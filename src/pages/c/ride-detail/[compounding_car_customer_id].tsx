import {
  Alert,
  ButtonSubmit,
  CarpoolingCompoundingForm,
  DriverInfoSummary,
  Map,
  Modal,
  RatingForm,
  RatingItem,
  RidesCancelForm,
  RidesDetailLoading,
  RidesProgress,
  RidesSummary,
  RidesSummaryMobile,
  RideSummaryModal,
} from "@/components"
import { toggleBodyOverflow } from "@/helper"
import {
  useBackRouter,
  useCompoundingCarCustomer,
  useCompoundingForm,
  useEffectOnce,
  useFetcher,
  useRatingActions,
} from "@/hooks"
import { CustomerBookingLayout } from "@/layout"
import { CancelCompoundingFormParams, CreateRatingFormParams, RatingRes } from "@/models"
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
  const [showRatingModal, setShowRatingModal] = useState<boolean>(false)
  const [currentRatingUpdate, setCurrentRatingUpdate] = useState<RatingRes>()
  const { addRating, updateRating, deleteRating } = useRatingActions()
  const [currentDeleteRating, setCurrentDeleteRating] = useState<number | undefined>()
  const [showCancelModal, setShowCancelModal] = useState<boolean | undefined>()

  useEffectOnce(() => {
    return () => {
      mutate(undefined, false)
    }
  })

  useBackRouter({
    cb: () => {
      setShowCancelModal(undefined)
      setCurrentRatingUpdate(undefined)
      setCurrentDeleteRating(undefined)
      toggleBodyOverflow("unset")
    },
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
        toggleRatingModal(false)
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

  const toggleRatingModal = (status: boolean) => {
    setShowRatingModal(status)
    if (status) {
      toggleBodyOverflow("hidden")
    } else {
      toggleBodyOverflow("unset")
    }
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
        router.push(`/c/ride-detail/cancel/${compoundingCar.compounding_car_customer_id}`)
      },
    })
  }

  return (
    <>
      <CustomerBookingLayout
        showLoading={isInitialLoading}
        topNode={<RidesProgress state={compoundingCar?.state} />}
        rightNode={
          compoundingCar ? (
            <>
              <div className="hidden lg:block">
                <RidesSummary rides={compoundingCar} car_account_type="customer" />
              </div>
              <div className="lg:hidden mx-12 mb-12 md:mb-0 md:mx-24 rounded-[5px] overflow-hidden">
                <RidesSummaryMobile rides={compoundingCar} />
              </div>
            </>
          ) : null
        }
        title="Chi tiết chuyến đi"
      >
        <div className="p-12 md:p-24 pt-0">
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

              {compoundingCar.state === "confirm_paid" ? (
                <button
                  className="text-sm text-primary mb-12 underline"
                  onClick={() =>
                    router.push(
                      `/c/ride-sharing/checkout-success?compounding_car_customer_id=${compoundingCar.compounding_car_customer_id}`
                    )
                  }
                >
                  Xem chi tiết hóa đơn
                </button>
              ) : null}

              <div className="h-[300px] mb-12">
                <Map
                  direction={{
                    destination: {
                      lat: Number(compoundingCar.to_latitude),
                      lng: Number(compoundingCar.to_longitude),
                    },
                    origin: {
                      lat: Number(compoundingCar.from_latitude),
                      lng: Number(compoundingCar.from_longitude),
                    },
                  }}
                  viewOnly
                />
              </div>

              <div className="">
                <div className="mb-[40px]">
                  <CarpoolingCompoundingForm
                    defaultValues={compoundingCarCustomerResToCarpoolingForm(compoundingCar)}
                    disabled
                    showButon={false}
                    mode="confirm"
                  />
                </div>

                {compoundingCar?.rating?.compounding_car_customer_id ? (
                  <div className="">
                    <p className="text-base mb-24 uppercase md:normal-case font-semibold md:font-medium">
                      Đánh giá của bạn:
                    </p>
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
                    <ButtonSubmit title="Thêm đánh giá" onClick={() => toggleRatingModal(true)} />
                  ) : null
                ) : compoundingCar.state === "done" ||
                  compoundingCar.state === "cancel" ||
                  compoundingCar.state === "draft" ? null : (
                  <ButtonSubmit
                    className="bg-error hover:bg-error"
                    title="Hủy chuyến đi"
                    onClick={() => setShowCancelModal(true)}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </CustomerBookingLayout>

      {/* Modal... */}
      {compoundingCar?.compounding_car_id ? (
        <>
          <Modal
            show={showRatingModal}
            onClose={() => toggleRatingModal(false)}
            heading="Thêm đánh giá"
          >
            <div className="w-full p-24">
              <RatingForm onSubmit={(data) => handleAddRating(data)} />
            </div>
          </Modal>

          <Modal
            show={!!currentRatingUpdate}
            onClose={() => setCurrentRatingUpdate(undefined)}
            heading="Chỉnh sửa đánh giá"
          >
            <div className="w-full p-24">
              <RatingForm
                defaultValue={currentRatingUpdate}
                onSubmit={(data) => handleUpdateRating(data)}
              />
            </div>
          </Modal>

          <Modal
            show={!!showCancelModal}
            onClose={() => setShowCancelModal(undefined)}
            heading="Hủy chuyến đi"
          >
            <div className="w-full">
              <RidesCancelForm
                params={{
                  compounding_car_customer_id: compoundingCar.compounding_car_customer_id,
                  compounding_car_customer_state: compoundingCar.state,
                }}
                onSubmit={(data) => handleCancelCompoundingCar(data)}
              />
            </div>
          </Modal>

          <Alert
            show={!!currentDeleteRating}
            desc="Bạn có chắc chắn muốn xóa đánh giá này"
            onClose={() => setCurrentDeleteRating(undefined)}
            onConfirm={() => currentDeleteRating && handleDeleteRating(currentDeleteRating)}
            type="warning"
          />
        </>
      ) : null}

      {compoundingCar ? <RideSummaryModal rides={compoundingCar} /> : null}
    </>
  )
}

export default RidesDetail