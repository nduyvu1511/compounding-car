import { RidesProgress, RidesSummary, RidesSummaryLoading } from "@/components"
import { useCompoundingCarCustomer, useEffectOnce } from "@/hooks"
import { CustomerLayout } from "@/layout"
import { useRouter } from "next/router"
import { useEffect } from "react"

const CheckoutSuccess = () => {
  const router = useRouter()
  const { compounding_car_customer_id } = router.query
  const {
    data: compoundingCarCustomer,
    isValidating,
    mutate: mutateCompoundingCar,
  } = useCompoundingCarCustomer({
    key: "get_compounding_car_customer_detail_checkout",
    type: "once",
    compounding_car_customer_id: Number(compounding_car_customer_id),
  })

  useEffectOnce(() => {
    return () => {
      mutateCompoundingCar(undefined, false)
    }
  })

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        router.push("/c")
      }
      return true
    })

    return () => {
      router.beforePopState(() => true)
    }
  }, [router])

  if (compoundingCarCustomer?.state !== "deposit") return null
  return (
    <div className="max-w-[684px] w-full mx-auto sm:py-24">
      {isValidating ? (
        <RidesSummaryLoading />
      ) : (
        <div className="">
          <div className="block-element pt-24">
            <div className="pl-12 md:pl-0 mb-24">
              <RidesProgress state="assign" />
            </div>
            <RidesSummary
              car_account_type="customer"
              type="bill"
              rides={compoundingCarCustomer as any}
            />
          </div>
        </div>
      )}
    </div>
  )
}

CheckoutSuccess.Layout = CustomerLayout
export default CheckoutSuccess
