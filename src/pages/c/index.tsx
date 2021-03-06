import { BookingModal, CompoundingFilter, RidesItem, Spinner, Tabs } from "@/components"
import { isObjectHasValue, toggleBodyOverflow } from "@/helper"
import { useQueryCompoundingCarCustomer } from "@/hooks"
import { CustomerLayout } from "@/layout"
import { CompoundingType } from "@/models"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

const HomeCustomer = () => {
  const router = useRouter()
  const {
    data: ridesList,
    isValidating,
    filterRides,
    hasMore,
    fetchMoreRides,
    isFetchingMore,
    getQueryParams,
  } = useQueryCompoundingCarCustomer({})
  const [showBookingModal, setShowBookingModal] = useState<CompoundingType | undefined>()

  useEffect(() => {
    if (router.isReady) {
      filterRides(getQueryParams(router.query))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  return (
    <>
      <section className="container py-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-sidebar-grid gap-24">
          <div className="">
            {router.isReady ? (
              <div className="sticky top-[81px] block-element p-24 z-[100]">
                <CompoundingFilter
                  type="customer"
                  defaultValues={router.query as any}
                  onChange={(data) => {
                    const filter = getQueryParams({ ...data, ...router.query })
                    if (isObjectHasValue(data)) {
                      router.push({
                        query: {
                          ...filter,
                        },
                      })
                    } else {
                      router.push({})
                    }
                  }}
                />
              </div>
            ) : null}
          </div>

          <div className="block-element px-24 pb-24">
            <div className="mb-24">
              <h1 className="h4 text-primary pt-24">Các chuyến đi hiện có</h1>
            </div>

            <div className="mb-24">
              <div className="flex items-center">
                <p className="text-base font-semibold mr-24">Danh sách chuyến:</p>
                <Tabs
                  list={[
                    { label: "Ghép chuyến", value: "compounding" },
                    { label: "Tiện chuyến", value: "convenient" },
                  ]}
                  tabActive={router.query.compounding_type || ""}
                  onChange={(val) =>
                    router.push({
                      query: {
                        ...router.query,
                        compounding_type: val,
                      },
                    })
                  }
                />
              </div>
            </div>

            {isValidating ? (
              <div className="grid grid-cols-3 gap-24">
                {Array.from({ length: 9 }).map((_, index) => (
                  <RidesItem key={index} rides={null} />
                ))}
              </div>
            ) : ridesList?.length > 0 ? (
              <div className="">
                <InfiniteScroll
                  dataLength={ridesList?.length || 0}
                  next={() => fetchMoreRides(router.query)}
                  hasMore={hasMore}
                  loader={isFetchingMore ? <Spinner size={30} className="py-[20px]" /> : null}
                >
                  <ul className="grid grid-cols-3 gap-24">
                    {ridesList?.length > 0 &&
                      ridesList.map((item, index) => (
                        <li
                          className="rounded-[20px] shadow-shadow-1 border border-solid border-gray-color-1 overflow-hidden"
                          key={index}
                        >
                          <RidesItem
                            onClick={() =>
                              router.push(`/c/ride-sharing/${item.compounding_car_id}`)
                            }
                            rides={item}
                          />
                        </li>
                      ))}
                  </ul>
                </InfiniteScroll>
              </div>
            ) : (
              <div className="flex-center my-[20px]">
                <p className="text-base">Không tìm thấy chuyến đi nào</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {showBookingModal ? (
        <BookingModal
          formType={showBookingModal}
          onClose={() => {
            setShowBookingModal(undefined)
            toggleBodyOverflow("unset")
          }}
        />
      ) : null}
    </>
  )
}

HomeCustomer.Layout = CustomerLayout
export default HomeCustomer
