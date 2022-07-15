import { EditIcon, TrashIcon } from "@/assets"
import { Star } from "@/components/star"
import { formatTimeType, toImageUrl } from "@/helper"
import { RatingRes } from "@/models"
import Image from "next/image"
import { MdOutlineReportGmailerrorred } from "react-icons/md"
import { TagItem } from "../tag"

interface RatingItemProps {
  rating: RatingRes | null
  onDelete?: (id: number) => void
  onUpdate?: (id: number) => void
  onReport?: Function
  car_account_type?: "car_driver" | "customer"
}

export const RatingItem = ({
  rating,
  onDelete,
  onUpdate,
  onReport,
  car_account_type = "customer",
}: RatingItemProps) => {
  if (rating === null)
    return (
      <div className="p-24">
        <div className="flex items-start">
          <div className="w-[32px] h-[32px] rounded-[50%] skeleton mr-[16px]"></div>
          <div className="mr-[16px] flex-1">
            <div className="skeleton w-[120px] h-[8px] skeleton rounded-[5px] mb-[12px]"></div>
            <div className="skeleton w-[160px] h-[8px] skeleton rounded-[5px] mb-[12px]"></div>
            <div className="skeleton w-[80%] h-[8px] skeleton rounded-[5px] mb-[12px]"></div>
            <div className="skeleton w-[140px] h-[8px] skeleton rounded-[5px]"></div>
          </div>
          <div className="flex">
            <div className="skeleton w-[20px] h-[8px] rounded-[5px] mr-[16px]"></div>
            <div className="skeleton w-[20px] h-[8px] rounded-[5px]"></div>
          </div>
        </div>
      </div>
    )
  return (
    <div className="flex items-start py-[24px]">
      <div className="relative w-[32px] h-[32px] rounded-[50%] overflow-hidden mr-[16px]">
        <Image
          src={toImageUrl(rating?.partner_id?.avatar_url.image_url || "")}
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </div>

      <div className="flex-1 mr-[16px]">
        <p className="mb-[4px] text-xs">{rating?.partner_id.partner_name || ""}</p>

        <p className="mb-[12px]">
          <Star readonly ratingValue={rating?.rating_number * 20} size={14} allowHalfIcon />
        </p>

        <p className="text-base leading-[24px] mb-[12px]">{rating?.rating_content}</p>

        <p className="text-sm text-gray-color-2">{`${rating?.duration.time_value} ${formatTimeType(
          rating?.duration.time_type || ""
        )} trước`}</p>

        {rating.rating_tag_ids?.length > 0 ? (
          <ul className="flex flex-wrap mt-[12px]">
            {rating.rating_tag_ids.map((item, index) => (
              <li className="mr-[8px] mb-[12px]" key={index}>
                <TagItem label={item.tag_content} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="-actions">
        {car_account_type === "customer" ? (
          <>
            <button onClick={() => onUpdate && onUpdate(rating?.rating_id)} className="mr-[16px]">
              <EditIcon />
            </button>
            <button onClick={() => onDelete && onDelete(rating?.rating_id)}>
              <TrashIcon />
            </button>
          </>
        ) : (
          <button onClick={() => onReport && onReport(rating?.rating_id)} className="btn-reset">
            <MdOutlineReportGmailerrorred />
          </button>
        )}
      </div>
    </div>
  )
}
