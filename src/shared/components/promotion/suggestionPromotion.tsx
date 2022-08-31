import { ArrowRightIcon, CouponFillIcon } from "@/assets"
import { useScrollTop } from "@/hooks"
import { PromotionRes } from "@/models"
import { promotionApi } from "@/services"
import { useRouter } from "next/router"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import useSWR from "swr"
import { PromotionItem } from "./promotionItem"

export const SuggestionPromotion = () => {
  const router = useRouter()
  const { isValidating, data } = useSWR<PromotionRes[]>("get_suggestion_promotions", () =>
    promotionApi
      .getPromotionList({ limit: 8, offset: 0 })
      .then((res) => res.result.data)
      .catch((err) => console.log(err))
  )

  return (
    <div className="xl:max-w-[986px]">
      <div className="items-center justify-between mb-16 hidden md:flex">
        {isValidating ? (
          <>
            <div className="h-16 skeleton rounded-[4px] w-[120px]"></div>
            <div className="h-12 skeleton rounded-[4px] w-[80px]"></div>
          </>
        ) : (
          <>
            <p className="text-base font-semibold">Ưu đãi hiện có </p>
            <button
              onClick={() => router.push("/promotion")}
              className="text-xs font-semibold text-gray-color-7 flex items-center"
            >
              Xem thêm <ArrowRightIcon className="ml-12 text-gray-color-7" />
            </button>
          </>
        )}
      </div>
      <Swiper
        className="suggestion-promotion pt-4 pb-[1px]"
        spaceBetween={12}
        slidesPerView={"auto"}
        breakpoints={{
          768: {
            spaceBetween: 16,
          },
          1024: {
            spaceBetween: 24,
          },
        }}
      >
        {isValidating
          ? Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <PromotionItem data={null} />
              </SwiperSlide>
            ))
          : data?.map((item) => (
              <SwiperSlide className="" key={item.promotion_id}>
                <PromotionItem onClick={(id) => router.push(`/promotion/${id}`)} data={item} />
              </SwiperSlide>
            ))}
      </Swiper>
      <PromotionButton />
    </div>
  )
}

const PromotionButton = () => {
  const router = useRouter()
  const height = useScrollTop()

  return (
    <button
      onClick={() => router.push("/promotion")}
      className={`fixed bottom-[48px] md:bottom-[66px] lg:bottom-[100px] right-24 md:right-[36px] bg-bg-error-2 flex-center text-base font-semibold text-error py-[10px]
     md:py-[15px] px-[20px] md:px-[28px] rounded-[30px] shadow-shadow-3 z-[100] transition-all duration-300 ${
       height > 300 ? "opacity-100 visible" : "opacity-0 invisible"
     }`}
    >
      <CouponFillIcon className="mr-8" /> Ưu đãi
    </button>
  )
}
