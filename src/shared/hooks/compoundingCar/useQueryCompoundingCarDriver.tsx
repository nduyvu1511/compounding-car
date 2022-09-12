import { CompoundingCarRes, CompoundingListDriverParams } from "@/models"
import { ridesApi } from "@/services"
import { useQueryList } from "../async"

interface Res {
  data: CompoundingCarRes[]
  isValidating: boolean
  isFetchingMore: boolean
  hasMore: boolean
  filterRides: (params: CompoundingListDriverParams) => void
  fetchMoreRides: (params: CompoundingListDriverParams) => void
  isInitialLoading: boolean
}

const LIMIT = 12

export const useQueryCompoundingCarDriver = (): Res => {
  const { data, error, fetchMoreItem, filterList, hasMore, isFetchingMore, isValidating, offset } =
    useQueryList<CompoundingCarRes[]>({
      initialData: undefined,
      key: "query_compounding_car_driver",
      limit: 12,
    })

  const filterRides = async (params: CompoundingListDriverParams) => {
    filterList(
      ridesApi.getCompoundingCarListForDriver({
        ...params,
        limit: params.limit || LIMIT,
        offset: 0,
      })
    )
  }

  const fetchMoreRides = async (params: CompoundingListDriverParams) => {
    const newOffset = offset + LIMIT
    fetchMoreItem(
      ridesApi.getCompoundingCarListForDriver({
        ...params,
        limit: params.limit || LIMIT,
        offset: newOffset,
      })
    )
  }

  return {
    data: data || [],
    isValidating,
    isFetchingMore,
    hasMore,
    filterRides,
    fetchMoreRides,
    isInitialLoading: data === undefined && error === undefined,
  }
}
