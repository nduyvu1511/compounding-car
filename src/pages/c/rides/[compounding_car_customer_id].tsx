import {
  Alert,
  CarpoolingCompoundingForm,
  Map,
  Modal,
  NoSSRWrapper,
  RatingForm,
  RatingItem,
  RidesCancelForm,
  RidesDetailLoading,
  RidesProgress,
  RidesSummary,
} from "@/components"
import {
  useCompoundingCarCustomer,
  useCompoundingForm,
  useEffectOnce,
  useFetcher,
  useRatingActions,
} from "@/hooks"
import { BookingLayout, CustomerLayout } from "@/layout"
import {
  CancelCompoundingFormParams,
  CompoundingCarCustomer,
  CreateRatingFormParams,
  RatingRes,
} from "@/models"
import { ridesApi } from "@/services"
import moment from "moment"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { notify } from "reapop"

const RidesDetail = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { fetcherHandler } = useFetcher()
  const { compounding_car_customer_id } = router.query
  const {
    data: compoundingCar,
    isInitialLoading,
    mutate,
  } = useCompoundingCarCustomer({
    compounding_car_customer_id: Number(compounding_car_customer_id),
    key: "get_compounding_car_customer",
    type: "once",
  })
  const { compoundingCarCustomerResToCarpoolingForm } = useCompoundingForm()
  const [showRatingForm, setShowRatingForm] = useState<boolean>(false)
  const [currentRatingUpdate, setCurrentRatingUpdate] = useState<RatingRes>()
  const { addRating, updateRating, deleteRating } = useRatingActions()
  const [currentDeleteRating, setCurrentDeleteRating] = useState<number | undefined>()
  const [showCancelModal, setShowCancelModal] = useState<boolean | undefined>()

  useEffectOnce(() => {
    return () => {
      mutate(undefined, false)
    }
  })

  const handleAddRating = (params: CreateRatingFormParams) => {
    if (!compoundingCar?.compounding_car_customer_id) return
    if (compoundingCar.rating_state === "un_rating") {
      dispatch(notify("Bạn không thể đánh giá cho chuyến đi này", "error"))
      return
    }

    addRating({
      params: {
        ...params,
        compounding_car_customer_id: compoundingCar.compounding_car_customer_id,
      },
      onSuccess: () => {
        mutate()
        setShowRatingForm(false)
      },
    })
  }

  const handleUpdateRating = (params: CreateRatingFormParams) => {
    if (!compoundingCar?.compounding_car_customer_id || !currentRatingUpdate?.rating_id) return
    if (compoundingCar.rating_state === "un_rating") {
      dispatch(notify("Bạn không thể chỉnh sửa cho chuyến đi này", "error"))
      return
    }

    updateRating({
      params: {
        ...params,
        rating_id: currentRatingUpdate?.rating_id,
      },
      onSuccess: () => {
        mutate()
        setCurrentRatingUpdate(undefined)
      },
    })
  }

  const handleDeleteRating = (rating_id: number) => {
    deleteRating({
      params: {
        rating_id,
      },
      onSuccess: () => {
        mutate()
        setCurrentDeleteRating(undefined)
      },
    })
  }

  const handleCancelCompoundingCar = (params: CancelCompoundingFormParams) => {
    if (!compoundingCar?.compounding_car_customer_id) return
    fetcherHandler({
      fetcher: ridesApi.cancelCompoundingCar({
        ...params,
        compounding_car_customer_id: compoundingCar.compounding_car_customer_id,
      }),
      onSuccess: () => {
        setShowCancelModal(false)
        router.push(
          `/c/ride-canceled?compounding_car_customer_id=${compoundingCar.compounding_car_customer_id}`
        )
      },
    })
  }

  return (
    <NoSSRWrapper>
      <BookingLayout
        showLoading={isInitialLoading}
        topNode={<RidesProgress state={compoundingCar?.state} />}
        rightNode={
          <RidesSummary
            rides={compoundingCar as CompoundingCarCustomer}
            car_account_type="customer"
          />
        }
        title="Chi tiết chuyến đi"
      >
        <div className="p-24 pt-0 bg-white-color rounded-[5px] shadow-shadow-1 h-fit">
          {isInitialLoading ? (
            <RidesDetailLoading />
          ) : !compoundingCar?.compounding_car_id ? (
            <div className="py-[40px] text-center">
              <p className="text-base">Không tìm thấy chuyến đi này</p>
            </div>
          ) : (
            <>
              {compoundingCar.state === "draft" &&
              moment(compoundingCar.expected_going_on_date).isBefore(Date.now()) ? (
                <p className="mb-24 text-base text-error">Chuyến đi này đã hết hạn</p>
              ) : null}
              <div className="h-[300px] mb-12">
                <Map viewOnly />
              </div>

              <div className="">
                <div className="mb-[40px]">
                  <CarpoolingCompoundingForm
                    viewButtonModal={false}
                    defaultValues={compoundingCarCustomerResToCarpoolingForm(compoundingCar)}
                    disabled
                    showButon={false}
                  />
                </div>

                {compoundingCar?.rating?.compounding_car_customer_id ? (
                  <div className="">
                    <p className="text-base mb-12">Đánh giá của bạn:</p>
                    <RatingItem
                      onDelete={(id) => setCurrentDeleteRating(id)}
                      onUpdate={(params) => setCurrentRatingUpdate(params)}
                      rating={compoundingCar.rating}
                    />
                  </div>
                ) : null}

                {compoundingCar.state === "confirm_paid" ? (
                  compoundingCar.rating_state === "no_rating" &&
                  !compoundingCar?.rating?.compounding_car_customer_id ? (
                    <button onClick={() => setShowRatingForm(true)} className="btn-primary">
                      Thêm đánh giá
                    </button>
                  ) : null
                ) : compoundingCar.state === "done" ||
                  compoundingCar.state === "cancel" ||
                  compoundingCar.state === "draft" ? null : (
                  <button onClick={() => setShowCancelModal(true)} className="btn bg-error">
                    Hủy chuyến đi
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </BookingLayout>

      {/* Modal... */}
      {compoundingCar?.compounding_car_id ? (
        <>
          {showRatingForm ? (
            <Modal onClose={() => setShowRatingForm(false)} heading="Thêm đánh giá">
              <div className="p-24">
                <RatingForm onSubmit={(data) => handleAddRating(data)} />
              </div>
            </Modal>
          ) : null}

          {currentRatingUpdate ? (
            <Modal onClose={() => setCurrentRatingUpdate(undefined)} heading="Chỉnh sửa đánh giá">
              <div className="p-24">
                <RatingForm
                  defaultValue={currentRatingUpdate}
                  onSubmit={(data) => handleUpdateRating(data)}
                />
              </div>
            </Modal>
          ) : null}

          {showCancelModal ? (
            <Modal onClose={() => setShowCancelModal(undefined)} heading="Hủy chuyến đi">
              <RidesCancelForm
                params={{
                  compounding_car_customer_id: compoundingCar.compounding_car_customer_id,
                  compounding_car_customer_state: compoundingCar.state,
                }}
                onSubmit={(data) => handleCancelCompoundingCar(data)}
              />
            </Modal>
          ) : null}

          {currentDeleteRating ? (
            <Alert
              desc="Bạn có chắc chắn muốn xóa đánh giá này"
              onClose={() => setCurrentDeleteRating(undefined)}
              onConfirm={() => handleDeleteRating(currentDeleteRating)}
              type="warning"
            />
          ) : null}
        </>
      ) : null}
    </NoSSRWrapper>
  )
}

RidesDetail.Layout = CustomerLayout
export default RidesDetail
