import { Alert, ItemSelect, RidesSummary } from "@/components"
import { formatMoneyVND } from "@/helper"
import { useCompoundingCarCustomer, useEffectOnce, useFetcher } from "@/hooks"
import { CustomerBookingLayout } from "@/layout"
import { CompoundingCarCustomer, PaymentMethod } from "@/models"
import { ridesApi } from "@/services"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const CheckoutOptions = () => {
  const router = useRouter()
  const { compounding_car_customer_id } = router.query
  const { fetcherHandler } = useFetcher()

  const {
    data: compoundingCar,
    isInitialLoading,
    mutate: mutateCompoundingCar,
  } = useCompoundingCarCustomer({
    key: "get_compounding_car_customer_to_check_full",
    type: "once",
    compounding_car_customer_id: Number(compounding_car_customer_id),
  })
  const [paymentType, setPaymentType] = useState<PaymentMethod | undefined>()
  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffectOnce(() => {
    return () => {
      mutateCompoundingCar(undefined, false)
    }
  })

  // Check deposit status
  useEffect(() => {
    if (compoundingCar?.state === "confirm_paid") {
      router.push(
        `/c/order-done/checkout-success?compounding_car_customer_id=${compounding_car_customer_id}`
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compoundingCar])

  const handleCheckoutMethod = async () => {
    if (!paymentType) return
    fetcherHandler({
      fetcher: ridesApi.customerPayForRemainingAmount({
        compounding_car_customer_id: Number(compounding_car_customer_id),
        payment_method: paymentType,
      }),
      onSuccess: () => {
        if (paymentType === "cash") {
          setShowAlert(true)
        } else {
          router.push(
            `/c/order-done/checkout?compounding_car_customer_id=${compounding_car_customer_id}`
          )
        }
      },
    })
  }

  return (
    <>
      <CustomerBookingLayout
        showLoading={isInitialLoading}
        rightNode={<RidesSummary rides={compoundingCar as CompoundingCarCustomer} />}
        title="Thanh to??n cho chuy???n ??i"
      >
        <div className="block-element pb-24">
          <div className="px-24">
            <div className="">
              <p className="text-base text-warning font-semibold mb-24">
                Vui l??ng thanh to??n s??? ti???n{" "}
                <span>{formatMoneyVND(compoundingCar?.down_payment || 0)}</span> ????? ho??n t???t giao
                d???ch
              </p>

              <ul className="mb-[40px]">
                {[
                  ["Thanh to??n cho t??i x???", "cash"],
                  ["Thanh to??n online", "transfer"],
                ].map(([label, value]) => (
                  <li key={value} className="mb-[16px]">
                    <ItemSelect
                      isActive={paymentType === value}
                      onChange={() => setPaymentType(value as PaymentMethod)}
                      title={label}
                    />
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCheckoutMethod}
                className={`btn-primary ${paymentType ? "" : "btn-disabled"} `}
              >
                Ti???n h??nh thanh to??n
              </button>
            </div>
          </div>
        </div>
      </CustomerBookingLayout>
      {showAlert ? (
        <Alert
          onClose={() => setShowAlert(false)}
          onConfirm={() => {
            setShowAlert(false)
            router.push("/c")
          }}
          showLeftBtn={false}
          desc="Ch???n h??nh th???c thanh to??n th??nh c??ng, vui l??ng nh???c t??i x??? x??c nh???n ????? ho??n t???t chuy???n ??i ?????t h??ng"
        />
      ) : null}
    </>
  )
}

export default CheckoutOptions
