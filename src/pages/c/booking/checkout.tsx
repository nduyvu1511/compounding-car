import {
  CheckoutLoading,
  Payment,
  RidesProgress,
  RidesSummary,
  RidesSummaryMobile,
  RidesSummaryModal,
} from "@/components"
import {
  useCompoundingCarActions,
  useCompoundingCarCustomer,
  useCustomerCheckout,
  useEffectOnce,
} from "@/hooks"
import { CustomerBookingLayout } from "@/layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Checkout = () => {
  const router = useRouter()
  const { compounding_car_customer_id } = router.query
  const {
    data: compoundingCar,
    isInitialLoading,
    mutate: mutateCompoundingCar,
  } = useCompoundingCarCustomer({
    key: "booking_checkout_customer",
    type: "autoFocus",
    compounding_car_customer_id: Number(compounding_car_customer_id),
  })
  const { createPayment } = useCustomerCheckout()
  const { customerCancelCompoundingCarBeforeDeposit } = useCompoundingCarActions()

  const handleConfirmTransaction = (acquirer_id: number) => {
    const { compounding_car_customer_id } = compoundingCar || {}
    if (!compounding_car_customer_id) return
    createPayment({
      params: {
        acquirer_id,
        returned_url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/c/booking/checking-checkout-status?compounding_car_customer_id=${compounding_car_customer_id}`,
        compounding_car_customer_id,
      },
      onSuccess: (data) => {
        window.open(data.vnpay_payment_url, "name", "height=600,width=800")?.focus()
      },
    })
  }

  const handleCancelCompoundingCarCustomer = () => {
    if (!compoundingCar?.compounding_car_customer_id) return
    customerCancelCompoundingCarBeforeDeposit({
      params: { compounding_car_customer_id: compoundingCar.compounding_car_customer_id },
      onSuccess: () => {
        router.push("/c")
      },
    })
  }

  useEffectOnce(() => {
    return () => {
      mutateCompoundingCar(undefined, false)
    }
  })

  useEffect(() => {
    if (compoundingCar === undefined) return

    if (compoundingCar?.state === "deposit") {
      router.push(
        `/c/booking/checkout-success?compounding_car_customer_id=${compounding_car_customer_id}`
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compoundingCar])

  return (
    <CustomerBookingLayout
      reverse={true}
      showLoading={isInitialLoading}
      topNode={<RidesProgress state={compoundingCar?.state} />}
      rightNode={
        compoundingCar ? (
          <>
            <div className="hidden lg:block">
              <RidesSummary rides={compoundingCar} car_account_type="customer" />
            </div>
            <div className="lg:hidden mx-12 mb-12 md:mb-24 md:mx-24 rounded-[5px] overflow-hidden">
              <RidesSummaryMobile rides={compoundingCar} />
            </div>
          </>
        ) : null
      }
      title="Đặt cọc chuyến đi"
    >
      {isInitialLoading ? (
        <CheckoutLoading />
      ) : compoundingCar?.compounding_car_customer_id ? (
        compoundingCar?.state === "draft" ? (
          <p className="m-24 -[40px] text-base">
            Vui lòng xác nhận
            <Link
              href={`/c/booking/confirm?compounding_car_customer_id=${compounding_car_customer_id}`}
            >
              <a className="text-primary"> chuyến đi này </a>
            </Link>
            trước khi thực hiện đặt cọc
          </p>
        ) : (
          <Payment
            amount_due={compoundingCar?.amount_due}
            down_payment={compoundingCar?.down_payment}
            amount_total={compoundingCar.amount_total}
            secondsRemains={compoundingCar.second_remains}
            onCheckout={(id) => handleConfirmTransaction(id)}
            onCancelCheckout={handleCancelCompoundingCarCustomer}
          />
        )
      ) : null}
      {compoundingCar ? <RidesSummaryModal rides={compoundingCar} /> : null}
    </CustomerBookingLayout>
  )
}

export default Checkout
