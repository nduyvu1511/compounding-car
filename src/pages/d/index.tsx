import { SpinnerIcon } from "@/assets"
import { BookingModal, CompoundingFilter, RidesItem, Tabs } from "@/components"
import { compoundingTypeFilters, toggleBodyOverflow } from "@/helper"
import { useQueryCompoundingCarDriver } from "@/hooks"
import { DriverLayout } from "@/layout"
import { CompoundingType } from "@/models"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

const HomeDriver = () => {
  const router = useRouter()
  const {
    data: ridesList,
    isValidating,
    filterRides,
    hasMore,
    fetchMoreRides,
    isFetchingMore,
    getQueryParams,
  } = useQueryCompoundingCarDriver({})
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
                  type="driver"
                  defaultValues={router.query as any}
                  onChange={(data) => {
                    if (!data) {
                      router.push({})
                      return
                    }
                    const filter = getQueryParams({ ...router.query, ...data })
                    router.push(
                      {
                        query: { ...filter },
                      },
                      undefined,
                      { shallow: true, scroll: true }
                    )
                  }}
                />
              </div>
            ) : null}
          </div>

          <div className="block-element px-24 pb-24">
            <div className="mb-24">
              <h1 className="h4 text-primary pt-24">C??c chuy???n xe c?? th??? nh???n</h1>
            </div>

            <div className="mb-24">
              <div className="flex items-center">
                <p className="text-base font-semibold mr-24">Danh s??ch chuy???n:</p>
                <Tabs
                  list={compoundingTypeFilters}
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
                {Array.from({ length: 9 }).map((item, index) => (
                  <RidesItem key={index} rides={null} />
                ))}
              </div>
            ) : ridesList?.length > 0 ? (
              <div className="">
                <InfiniteScroll
                  dataLength={ridesList?.length || 0}
                  next={() => fetchMoreRides(router.query)}
                  hasMore={hasMore}
                  loader={
                    isFetchingMore ? (
                      <div className="flex-center py-10">
                        <SpinnerIcon className="animate-spin" />
                      </div>
                    ) : null
                  }
                >
                  <ul className="grid grid-cols-3 gap-24">
                    {ridesList?.length > 0 &&
                      ridesList.map((item, index) => (
                        <li
                          className="rounded-[20px] shadow-shadow-1 border border-solid border-gray-color-1 overflow-hidden"
                          key={index}
                        >
                          <RidesItem
                            onClick={() => router.push(`/d/rides/${item.compounding_car_id}`)}
                            rides={item}
                          />
                        </li>
                      ))}
                  </ul>
                </InfiniteScroll>
              </div>
            ) : (
              <div className="flex-center my-[20px]">
                <p className="text-base">Kh??ng t??m th???y chuy???n ??i n??o</p>
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

export default HomeDriver
HomeDriver.Layout = DriverLayout
