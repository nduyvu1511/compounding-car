import { isObjectHasValue } from "@/helper"
import { CompoundingCarCustomer } from "@/models"
import { ridesApi } from "@/services"
import { AxiosResponse } from "axios"
import useSWR from "swr"

interface Res {
  data: CompoundingCarCustomer | undefined
  isValidating: boolean
  isInitialLoading: boolean
}

interface Props {
  key: string
  type: "once" | "autoFocus"
  compounding_car_customer_id?: number
}

export const useCompoundingCarCustomer = ({
  key,
  type,
  compounding_car_customer_id,
}: Props): Res => {
  const { isValidating, data, error } = useSWR<CompoundingCarCustomer, any>(
    compounding_car_customer_id ? key : null,
    () =>
      ridesApi
        .getDetailCompoundingCarCustomer({
          compounding_car_customer_id: Number(compounding_car_customer_id),
        })
        .then((res: AxiosResponse<any>) => {
          const data = res?.result?.data
          if (isObjectHasValue(data)) return data
          return undefined
        })
        .catch((err) => console.log(err)),
    type === "once"
      ? {
          dedupingInterval: 1000,
        }
      : {
          dedupingInterval: 100,
          revalidateOnFocus: true,
        }
  )

  return {
    isValidating,
    data,
    isInitialLoading: error === undefined && data === undefined,
  }
}
