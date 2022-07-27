import { compoundingOrderList, isArrayHasValue, isObjectHasValue } from "@/helper"
import { useAddress, useCompoundingForm, useCurrentLocation } from "@/hooks"
import { CarAccountType, CompoundingFilterParams, OptionModel } from "@/models"
import { useEffect, useState } from "react"
import "react-datetime/css/react-datetime.css"
import Select from "react-select"
import { InputDate, ItemSelect } from "../inputs"

interface CompoundingFilterFormProps {
  type: CarAccountType
  onChange: (params: CompoundingFilterParams | undefined) => void
  defaultValues?: CompoundingFilterParams
  touchableDevice?: boolean
  onCloseFilter?: Function
  showInModal?: boolean
}

export const CompoundingFilter = ({
  onChange: onChangeProps,
  defaultValues,
  type,
  touchableDevice = false,
  onCloseFilter,
  showInModal = false,
}: CompoundingFilterFormProps) => {
  const { provinceOptions } = useAddress()
  const { vehicleTypeOptions, seats } = useCompoundingForm()
  const { getCurrentLocation } = useCurrentLocation({ showLoading: true })
  const [numberSeatOptions, setNumberSeatOptions] = useState<OptionModel[]>(seats(16))
  const [compoundingFormValues, setCompoundingFormValues] = useState<
    CompoundingFilterParams | undefined
  >(defaultValues)

  useEffect(() => {
    setCompoundingFormValues(defaultValues)
  }, [defaultValues])

  const handleChange = (params: CompoundingFilterParams) => {
    !touchableDevice && onChangeProps({ ...compoundingFormValues, ...params })
  }

  return (
    <div className="relative flex-1 flex-col">
      <div
        className={`compounding__filter flex-1 overflow-y-auto ${
          showInModal ? `h-[calc(100vh-120px)] md:h-[calc(100vh-170px)] p-12 lg:h-auto` : "h-full"
        }`}
      >
        <div className="items-center justify-between mb-[24px] hidden xl:flex">
          <p className="text-xl">Bộ lọc</p>
          {isObjectHasValue(defaultValues) ? (
            <span
              onClick={() => {
                onChangeProps(undefined)
                setCompoundingFormValues(undefined)
              }}
              className="text-primary text-14 leading-26 font-medium cursor-pointer"
            >
              Đặt lại
            </span>
          ) : null}
        </div>

        <div className="form-date form-date-sm mb-[10px]">
          <InputDate
            onChange={(val) => {
              setCompoundingFormValues({
                ...compoundingFormValues,
                from_expected_going_on_date: val + "",
              })
              handleChange({ from_expected_going_on_date: val + "" })
            }}
            value={compoundingFormValues?.from_expected_going_on_date || ""}
            inputProps={{ placeholder: "Ngày đi" }}
          />
        </div>

        <div className="form-date form-date-sm mb-[10px]">
          <InputDate
            onChange={(val) => {
              setCompoundingFormValues({
                ...compoundingFormValues,
                to_expected_going_on_date: val + "",
              })
              handleChange({ to_expected_going_on_date: val + "" })
            }}
            value={compoundingFormValues?.to_expected_going_on_date || ""}
            inputProps={{ placeholder: "Ngày về" }}
          />
        </div>

        <div className="form-select form-select-sm">
          <Select
            key={"from_province_id"}
            openMenuOnFocus={true}
            options={provinceOptions}
            controlShouldRenderValue
            value={
              compoundingFormValues?.from_province_id
                ? provinceOptions?.find(
                    (item) => item.value == compoundingFormValues?.from_province_id
                  )
                : null
            }
            name="from_province_id"
            onChange={(val) => {
              if (!val) return
              setCompoundingFormValues({ ...compoundingFormValues, from_province_id: +val.value })
              handleChange({ from_province_id: +val.value })
            }}
            placeholder="Đi từ"
          />
        </div>

        <div className="form-select form-select-sm">
          <Select
            key={"to_province_id"}
            options={provinceOptions}
            value={
              compoundingFormValues?.to_province_id
                ? provinceOptions.find(
                    (item) => item.value == compoundingFormValues?.to_province_id
                  )
                : null
            }
            name="to_province_id"
            onChange={(val) => {
              if (!val) return
              handleChange({ to_province_id: +val.value })
              setCompoundingFormValues({ ...compoundingFormValues, to_province_id: +val.value })
            }}
            placeholder="Đến tại"
          />
        </div>

        <div className="form-select form-select-sm">
          <Select
            key={"car_id"}
            options={vehicleTypeOptions}
            value={
              compoundingFormValues?.car_id
                ? vehicleTypeOptions.find((item) => item.value == compoundingFormValues.car_id)
                : null
            }
            name="car_id"
            onChange={(val) => {
              if (!val) return
              handleChange({ car_id: +val.value })
              setCompoundingFormValues({ ...compoundingFormValues, car_id: +val.value })
              setNumberSeatOptions(seats(Number(val.number_seat)))
            }}
            placeholder="Loại xe"
          />
        </div>

        {type === "customer" ? (
          <div className="form-select form-select-sm">
            <Select
              maxMenuHeight={180}
              key={"number_seat"}
              options={numberSeatOptions}
              value={
                compoundingFormValues?.number_seat &&
                numberSeatOptions &&
                isArrayHasValue(numberSeatOptions)
                  ? numberSeatOptions.find(
                      (item) => item.value == compoundingFormValues.number_seat
                    )
                  : null
              }
              name="number_seat"
              onChange={(val) => {
                if (!val) return
                handleChange({ number_seat: +val.value })
                setCompoundingFormValues({ ...compoundingFormValues, number_seat: +val.value })
              }}
              placeholder="Số hành khách"
            />
          </div>
        ) : null}

        <div className="mt-24">
          <label htmlFor="" className="form-label mb-24">
            Sắp xếp theo:
          </label>
          <ul>
            {compoundingOrderList.map(({ label, value }, index) => (
              <li key={index} className="mb-[16px] last:mb-0">
                <ItemSelect
                  isActive={compoundingFormValues?.order_by == value}
                  onChange={() => {
                    if (value === "sort_by_distance") {
                      getCurrentLocation(({ lng, lat }) => {
                        const val = {
                          order_by: "sort_by_distance",
                          current_latitude: lat + "",
                          current_longitude: lng + "",
                        }
                        setCompoundingFormValues({
                          ...compoundingFormValues,
                          ...val,
                        } as CompoundingFilterParams)
                        handleChange(val as CompoundingFilterParams)
                      })
                    } else {
                      setCompoundingFormValues({
                        ...compoundingFormValues,
                        order_by: value,
                        current_latitude: "",
                        current_longitude: "",
                      })
                      handleChange({ order_by: value })
                    }
                  }}
                  title={label}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 xl:hidden bg-white-color flex md:flex-col p-12">
        <button
          onClick={() => {
            onChangeProps(undefined)
            onCloseFilter?.()
          }}
          className={`btn-primary-outline py-[6px] mr-12 md:mr-0 md:mb-12 flex-1 rounded-[5px] w-full ${
            !isObjectHasValue(defaultValues) ? "btn-disabled" : ""
          }`}
        >
          Xóa bộ lọc
        </button>
        <button
          onClick={() => {
            isObjectHasValue(compoundingFormValues) && onChangeProps(compoundingFormValues)
            onCloseFilter?.()
          }}
          className={`btn-primary py-[6px] flex-1 rounded-[5px] w-full ${
            !isObjectHasValue(compoundingFormValues) ? "btn-disabled" : ""
          }`}
        >
          Áp dụng
        </button>
      </div>
    </div>
  )
}
