import { RatingRangePost, RatingTagRes } from "@/models"
import { ratingApi } from "@/services"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

interface Res {
  ratingTags: RatingTagRes[]
  isValidating: boolean
}

export const useFetchRatingTags = (rating_number?: RatingRangePost): Res => {
  const [ratingTags, setRatingTags] = useState<RatingTagRes[]>([])
  const [isValidating, setValidating] = useState<boolean>(false)

  useEffect(() => {
    if (!rating_number) return
    setValidating(true)
    ratingApi
      .getRatingTags(rating_number)
      .then((res: AxiosResponse<RatingTagRes[]>) => {
        setValidating(false)
        setRatingTags(res?.result?.data || [])
      })
      .catch((err) => {
        setValidating(false)
        console.log(err)
      })
  }, [rating_number])

  return {
    ratingTags,
    isValidating,
  }
}
