import { PaymentRes } from "@/models"
import { userApi } from "@/services"
import useSWR from "swr"

interface Res {
  isValidating: boolean
  isInitialLoading: boolean
  data: PaymentRes[]
}

export const usePaymentMethodRechargeMoney = (): Res => {
  const { isValidating, mutate, data, error } = useSWR<PaymentRes[]>(
    "usePaymentMethodRechargeMoney",
    () =>
      userApi
        .getPaymentMethodListForRechargeMoney()
        .then((res) => res?.result?.data)
        .catch((err) => console.log(err))
  )
  return {
    data: data || [],
    isInitialLoading: data === undefined && error === undefined,
    isValidating,
  }
}
