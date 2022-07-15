import { CompoundingType } from "@/models"
import { Map } from "../map"
import { RidesItemLocation } from "../rides"

interface ScheduleSummary {
  from_province_name: string
  to_province_name: string
  expected_going_on_date: string
  expected_picking_up_date: string
  distance: number
  duration: number
  compounding_type: CompoundingType
}

const ScheduleSummary = ({
  compounding_type,
  distance,
  duration,
  expected_going_on_date,
  expected_picking_up_date,
  from_province_name,
  to_province_name,
}: ScheduleSummary) => {
  return (
    <div className="">
      <div className="bg-primary p-24">
        <h3 className="text-18 leading-[26px] font-medium text-white-color">Thông tin chuyến đi</h3>
      </div>
      <div className="p-24">
        <div className="mb-24">
          <RidesItemLocation
            compounding_type={compounding_type}
            from_date={expected_going_on_date}
            from_province_name={from_province_name}
            to_province_name={to_province_name}
            to_date={expected_picking_up_date}
          />
        </div>

        <div className=" h-[200px] relative mb-[24px]">
          <Map viewOnly />
        </div>

        <div className="">
          <p className="text-16 font-semibold mb-12">Thông tin lộ trình:</p>

          <ul>
            <li className="flex items-baseline justify-between py-8">
              <span className="mr-8 text-xs">Tổng lộ trình ước tính:</span>
              <span className="text-sm">{duration} km</span>
            </li>
            <li className="flex items-baseline justify-between py-8">
              <span className="mr-8 text-xs">Thời gian di chuyển dự kiến:</span>
              <span className="text-sm">10 giờ 11 phút</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-24 border border-b border-solid border-border-color"></div>
    </div>
  )
}

export { ScheduleSummary }
