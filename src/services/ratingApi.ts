import {
  CreateRatingParams,
  DeleteRatingParams,
  ListQuery,
  RatingRangePost,
  UpdateRatingParams,
} from "@/models"
import axiosClient from "."

const ratingApi = {
  getRatingTags: (rating_number?: RatingRangePost) => {
    return axiosClient.post("/api/rating_controller/get_quick_rating_tag", {
      params: { rating_number },
    })
  },

  createRating: (params: CreateRatingParams) => {
    return axiosClient.post("/api/rating_controller/create_rating", {
      params,
    })
  },

  updateRating: (params: UpdateRatingParams) => {
    return axiosClient.post("/api/rating_controller/update_rating", {
      params,
    })
  },

  deleteRating: (params: DeleteRatingParams) => {
    return axiosClient.post("/api/rating_controller/delete_rating", {
      params,
    })
  },

  getRatingListByCustomer: (params?: ListQuery) => {
    return axiosClient.post("/api/rating_controller/get_list_rating_by_customer", {
      params: {
        ...params,
      },
    })
  },

  getRatingListByDriver: () => {
    return axiosClient.post("/api/rating_controller/get_list_rating_by_car_driver", {
      params: {},
    })
  },

  reportRating: (params: DeleteRatingParams) => {
    return axiosClient.post("/api/rating_controller/report_rating", {
      params,
    })
  },
}
export { ratingApi }
