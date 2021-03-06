import {
  CarpoolingIcon,
  ConvenientIcon,
  MultiUserIcon,
  OneWayIcon,
  PaymentIcon,
  TwoWayIcon,
} from "@/assets"
import {
  COMPOUNDING_TYPE_COLOR,
  COMPOUNDING_TYPE_NAME,
  formatMoneyVND,
  toFirstUpperCase,
} from "@/helper"
import { CompoundingCarRes } from "@/models"
import moment from "moment"
import { RidesItemLocation } from "./ridesItemLocation"

interface RidesItemProps {
  onClick?: Function
  rides: CompoundingCarRes | null
}

const RidesItem = ({ onClick, rides }: RidesItemProps) => {
  if (rides === null) {
    return (
      <div className="min-h-[200px] block-element p-[18px]">
        <div className="flex items-center justify-between mb-[24px]">
          <div className="w-[80px] h-[12px] skeleton rounded-[4px]"></div>
          <div className="w-[120px] h-[12px] skeleton rounded-[4px]"></div>
        </div>

        <div className="mb-[40px]">
          <div className="flex items-center justify-between mb-[40px]">
            <div className="">
              <div className="w-[50px] h-[12px] skeleton rounded-[4px] mb-[12px]"></div>
              <div className="w-[70px] h-[12px] skeleton rounded-[4px] ml-auto"></div>
            </div>
            <div className="flex items-end flex-col">
              <div className="w-[80px] h-[12px] skeleton rounded-[4px] mb-[12px]"></div>
              <div className="w-[100px] h-[12px] skeleton rounded-[4px]"></div>
            </div>
          </div>
          <div className="skeleton h-[8px] rounded-[4px] mb-[24px] w-[90%] mx-auto"></div>
          <div className="skeleton h-[8px] rounded-[4px] mb-[24px] w-[90%] mx-auto"></div>
          <div className="skeleton h-[8px] rounded-[4px] mb-[24px] w-[90%] mx-auto"></div>
          <div className="skeleton h-[8px] rounded-[4px] mb-[24px] w-[90%] mx-auto"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[80px] h-[12px] skeleton rounded-[4px]"></div>
          <div className="w-[80px]  h-[12px] skeleton rounded-[4px]"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => onClick?.()}
      className="p-[18px] flex flex-col h-full justify-between relative overflow-hidden cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <p className="flex items-center mr-[16px]">
          {rides.compounding_type === "one_way" ? (
            <OneWayIcon />
          ) : rides.compounding_type === "two_way" ? (
            <TwoWayIcon />
          ) : rides.compounding_type === "convenient" ? (
            <ConvenientIcon />
          ) : (
            <CarpoolingIcon />
          )}
          <span
            style={{ color: COMPOUNDING_TYPE_COLOR[rides.compounding_type] }}
            className="text-sm ml-[8px] font-semibold"
          >
            {COMPOUNDING_TYPE_NAME[rides.compounding_type]}
          </span>
        </p>

        <span className="text-xs">Xem chi ti???t</span>
      </div>

      <div className="my-[18px] border-b border-solid border-border-color"></div>

      <RidesItemLocation
        compounding_type={rides.compounding_type}
        from_date={rides.expected_going_on_date}
        from_province_name={rides.from_province.province_brief_name}
        to_province_name={rides.to_province.province_brief_name}
        to_date={rides.expected_picking_up_date}
      />
      <div className="mt-[18px] flex-1">
        {/* <div className="flex items-center justify-between mb-[8px]">
          <p className="text-xs text-gray-90 w-[120px] mx-auto">Lo???i chuy???n:</p>
          <p className="flex-1 text-sm">{getCompoundingCarName(rides.compounding_type)}</p>
        </div> */}

        <div className="flex items-center justify-between mb-[8px]">
          <p className="text-xs text-gray-90 w-[120px] mx-auto">Ng??y ??i:</p>
          <p className="flex-1 text-sm">
            {moment(rides.expected_going_on_date).format("HH:mm DD/MM/YYYY")}
          </p>
        </div>

        {rides?.expected_picking_up_date ? (
          <div className="flex items-center justify-between mb-[8px]">
            <p className="text-xs text-gray-90 w-[120px] mx-auto">Ng??y v???:</p>
            <p className="flex-1 text-sm">
              {moment(rides.expected_picking_up_date).format("HH:mm DD/MM/YYYY")}
            </p>
          </div>
        ) : null}

        <div className="flex items-center justify-between mb-[8px]">
          <p className="text-xs text-gray-90 w-[120px] mx-auto">Lo???i xe:</p>
          <p className="flex-1 text-sm">{toFirstUpperCase(rides.car.name)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-90 w-[120px] mx-auto">S??? kh??ch:</p>
          <p className="flex-1 text-sm">
            {rides.number_available_seat}/{rides.number_seat_in_car} kh??ch
          </p>
        </div>
        {/* <div className="flex items-center justify-between mb-[8px]">
          <p className="text-xs text-gray-90 w-[120px] mx-auto">Gi?? v??/kh??ch:</p>
          <p className="flex-1 text-sm">{formatMoneyVND(rides.price_unit.price_unit)}</p>
        </div> */}
      </div>

      <div className="my-[18px] border-b border-solid border-border-color"></div>

      <div className="flex items-center justify-between">
        <p className="flex items-center">
          <MultiUserIcon />
          <span className="text-sm font-semibold ml-[8px]">
            {rides.number_available_seat}/{rides.number_seat_in_car}{" "}
          </span>
        </p>
        <p className="flex items-center">
          <PaymentIcon />
          <span className="text-sm font-semibold text-error ml-[8px]">
            {formatMoneyVND(rides.price_unit.price_unit)}/Kh??ch
          </span>
        </p>
      </div>

      {/* <div className="flex justify-end">
        <button className="text-base font-semibold">Xem chi ti???t</button>
      </div> */}

      {/* <div className="h-8 rounded-[20px] gradient absolute-horizontal bottom-0 w-[96%]"></div> */}
    </div>
  )
}

export { RidesItem }
