/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  ButtonSubmit,
  InputCheckbox,
  InputDateTime,
  InputPolicy,
  InputSelect,
  InputStation,
  Map,
  Modal,
} from "@/components"
import { carpoolingCompoundingCarSchema } from "@/core/schema"
import {
  CARPOOLING_CAR_ID,
  CARPOOLING_DISTANCE,
  CARPOOLING_EXPECTED_GOING_ON_DATE,
  CARPOOLING_FROM_LOCATION,
  CARPOOLING_FROM_STATION,
  CARPOOLING_IS_CHECKED_POLICY,
  CARPOOLING_NOTE,
  CARPOOLING_NUMBER_SEAT,
  CARPOOLING_PRICE_PER_PASSENGER,
  CARPOOLING_TO_STATION,
  formatMoneyVND,
  setToLocalStorage,
} from "@/helper"
import { useCalcDistance, useCompoundingForm } from "@/hooks"
import {
  CreateCarpoolingCompoundingCar,
  CreateCarpoolingCompoundingForm,
  NumberSeatOptionModel,
} from "@/models"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { notify } from "reapop"

interface CarpoolingCompoundingFormProps {
  onSubmit?: (params: CreateCarpoolingCompoundingCar) => void
  defaultValues?: CreateCarpoolingCompoundingForm
  type?: "new" | "existed"
  limitNumberSeat?: number
  viewButtonModal?: boolean
  mode?: "create" | "update" | "confirm"
  disabled?: boolean
  showButon?: boolean
}

export const CarpoolingCompoundingForm = ({
  onSubmit,
  defaultValues,
  mode = "create",
  type = "new",
  limitNumberSeat,
  viewButtonModal = true,
  disabled = false,
  showButon = true,
}: CarpoolingCompoundingFormProps) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    clearErrors,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm<CreateCarpoolingCompoundingForm>({
    resolver: yupResolver(carpoolingCompoundingCarSchema),
    mode: "all",
    defaultValues,
  })
  const { calculateDistanceBetweenTwoCoordinates } = useCalcDistance()
  const { vehicleTypeOptions, seats, calcPriceFromProvinceIds } = useCompoundingForm()
  const [numberSeat, setNumberSeat] = useState<number>(
    limitNumberSeat || getValues("car_id.number_seat")
  )
  const [distance, setDistance] = useState<number>(getValues("distance") || 0)
  const [price, setPrice] = useState<number>(getValues("price_per_passenger") || 0)
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [showMap, setShowMap] = useState<boolean>(false)
  const [isPickingFromStart, setPickingFromStart] = useState<boolean>()
  console.log(defaultValues)
  const calcDistance = () => {
    const fromStation = getValues("from_station")
    const toStation = getValues("to_station")
    if (!fromStation?.province_id || !toStation?.province_id) return

    calculateDistanceBetweenTwoCoordinates({
      params: {
        origin: { lat: +fromStation.lat, lng: +fromStation.lng },
        destination: { lat: +toStation.lat, lng: +toStation.lng },
      },
      onSuccess: (distance) => {
        setToLocalStorage(CARPOOLING_DISTANCE, distance)
        setValue("distance", distance)
        setDistance(distance)
      },
    })
  }

  const handleGetFromLocation = () => {
    const value = getValues("from_location")?.province_id
    if (value) {
      setPickingFromStart(false)
      setValue("from_location", undefined)
      setToLocalStorage(CARPOOLING_FROM_LOCATION, undefined)
    } else {
      setShowAlert(true)
    }
  }

  const calcPrice = async () => {
    const fromLocation = getValues("from_station")
    const toLocation = getValues("to_station")
    const carId = getValues("car_id")
    if (!fromLocation?.province_id || !toLocation?.province_id || !carId?.value) return
    calcPriceFromProvinceIds({
      params: {
        car_id: +carId.value,
        from_province_id: fromLocation.province_id,
        to_province_id: toLocation.province_id,
      },
      onSuccess: (data) => {
        setValue("price_per_passenger", data)
        setToLocalStorage(CARPOOLING_PRICE_PER_PASSENGER, data)
        setPrice(data)
      },
    })
  }

  const onSubmitHandler = (data: CreateCarpoolingCompoundingForm) => {
    const params: CreateCarpoolingCompoundingCar = {
      car_id: Number(data.car_id.value),
      compounding_type: "compounding",
      distance: data.distance,
      expected_going_on_date: data.expected_going_on_date,
      from_address: data.from_station.address,
      from_latitude: data.from_station.lat + "",
      from_longitude: data.from_station.lng + "",
      to_address: data.to_station.address,
      to_latitude: data.to_station.lat + "",
      to_longitude: data.to_station.lng + "",
      from_province_id: data.from_station.province_id,
      to_province_id: data.to_station.province_id,
      note: data?.note || "",
      from_pick_up_station_id: data.from_station.station_id,
      is_picking_up_from_start: !!data?.from_location?.province_id,
      number_seat: Number(data.number_seat.value),
      to_pick_up_station_id: data.to_station.station_id,
      price_per_passenger: data.price_per_passenger,
    }
    onSubmit?.(params)
  }

  const handleTogglePolicy = (): boolean | undefined => {
    const isChecked = getValues("is_checked_policy")
    if (!isChecked) {
      clearErrors("is_checked_policy")
      setToLocalStorage(CARPOOLING_IS_CHECKED_POLICY, true)
      return true
    }
    setToLocalStorage(CARPOOLING_IS_CHECKED_POLICY, undefined)
    return
  }
  console.log(errors)
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmitHandler(data)
        })}
        className=""
      >
        <div className={`${disabled ? "pointer-events-none" : ""}`}>
          <div className="form-item">
            <div className="mb-8">
              <InputStation
                prevProvinceId={getValues("to_station.province_id")}
                name="from_station"
                control={control}
                onChange={(station) => {
                  if (!station) return
                  setValue("from_station", station)
                  clearErrors("from_station")
                  calcPrice()
                  setToLocalStorage(CARPOOLING_FROM_STATION, station)
                  calcDistance()
                }}
                placeholder="??i???m ??i"
                isError={!!errors?.from_station}
                defaultValue={getValues("from_station")}
                type="from"
              />
            </div>

            {type === "new" ? (
              <>
                {getValues("from_station")?.province_id ? (
                  <div className="flex items-center">
                    <InputCheckbox
                      type="circle"
                      size={20}
                      onCheck={handleGetFromLocation}
                      isChecked={!!getValues("from_location")?.province_id}
                    />
                    <p
                      className="flex-1 ml-[12px] text-12 cursor-pointer"
                      onClick={handleGetFromLocation}
                    >
                      ????n t???n n??i
                      <span className=""> (Chi ph?? ph??t sinh th??m v???i t??i x???)</span>
                    </p>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>

          <div className="form-item">
            <InputStation
              name="to_station"
              control={control}
              onChange={(location) => {
                if (!location) return
                setToLocalStorage(CARPOOLING_TO_STATION, location)
                setValue("to_station", location)
                clearErrors("to_station")
                calcDistance()
                calcPrice()
              }}
              placeholder="??i???m ?????n"
              isError={!!errors?.to_station}
              defaultValue={getValues("to_station")}
              prevProvinceId={getValues("from_station.province_id")}
              type="from"
            />

            {price || distance ? (
              <div className="flex justify-between text-[12px] font-medium mt-8">
                {price ? <p className="mr-[12px]">Gi??: {formatMoneyVND(price || 0)}</p> : null}
                {distance ? <p className="">Qu??ng ???????ng: {distance.toFixed(2)}km</p> : null}
              </div>
            ) : null}
          </div>

          <div className="form-item">
            <InputSelect
              onChange={(val) => {
                if (getValues("car_id")?.value >= (val as any).number_seat) {
                  setValue("car_id", undefined as any)
                  dispatch(notify("Vui l??ng ch???n l???i s??? h??nh kh??ch", "error"))
                }
                setNumberSeat((val as any).number_seat)
                setToLocalStorage(CARPOOLING_CAR_ID, val)
                calcPrice()
                setValue("car_id", val as NumberSeatOptionModel)
              }}
              control={control}
              defaultValue={getValues("car_id")}
              name="car_id"
              placeholder="Lo???i xe"
              options={vehicleTypeOptions}
              required
              isError={!!errors?.car_id}
              disabled={type === "existed"}
            />
          </div>

          <div className="form-item">
            <InputDateTime
              control={control}
              name="expected_going_on_date"
              placeholder="Ch???n ng??y ??i"
              defaultValue={getValues("expected_going_on_date")}
              onChange={(val) => {
                setToLocalStorage(CARPOOLING_EXPECTED_GOING_ON_DATE, val)
              }}
              isError={!!errors?.expected_going_on_date}
              disableDate={type === "existed"}
            />
          </div>

          <div className="form-item">
            <InputSelect
              onChange={(val) => {
                if (!val?.value) return
                setToLocalStorage(CARPOOLING_NUMBER_SEAT, val)
                setValue("number_seat", val)
              }}
              control={control}
              defaultValue={getValues("number_seat")}
              name="number_seat"
              placeholder="S??? h??nh kh??ch"
              options={seats(limitNumberSeat || numberSeat || 0) as NumberSeatOptionModel[]}
              required
              isError={!!errors?.number_seat}
            />
          </div>

          <div className="form-item">
            <label htmlFor="note" className="form-label">
              Ghi ch?? cho chuy???n ??i
            </label>

            <textarea
              {...register}
              className="form-textarea form-input"
              name="note"
              id="note"
              cols={10}
              placeholder="Ghi ch?? th??m cho chuy???n ??i..."
              defaultValue={getValues("note")}
              onChange={(e) => {
                setValue("note", e.target.value)
                setToLocalStorage(CARPOOLING_NOTE, e.target.value)
              }}
            ></textarea>
          </div>

          {!disabled ? (
            <div className="mb-[40px]">
              <Controller
                control={control}
                name={"is_checked_policy"}
                render={({ field: { onChange, onBlur } }) => (
                  <InputPolicy
                    onChange={() => onChange(handleTogglePolicy())}
                    isError={!!errors?.is_checked_policy}
                    onBlur={onBlur}
                    value={getValues("is_checked_policy")}
                  />
                )}
                rules={{ required: true }}
              />
            </div>
          ) : null}
        </div>

        {!viewButtonModal ? <div className="mt-24"></div> : null}
        {onSubmit && showButon ? (
          <ButtonSubmit
            view={viewButtonModal ? "modal" : "page"}
            title={mode === "create" ? "Ti???p t???c" : mode === "confirm" ? "X??c nh???n" : "L??u"}
            isError={!isValid}
          />
        ) : null}
      </form>

      {showAlert ? (
        <Alert
          onClose={() => setShowAlert(false)}
          onConfirm={() => {
            setShowAlert(false)
            setShowMap(true)
          }}
          type="info"
          desc="N???u ??i gh??p, Exxe ch??? c?? th??? cung c???p c??c tr???m ????n tr??n m???i t???nh, n???u b???n ch???n ????n t???n n??i, chi ph?? ph??t sinh n??y s??? ???????c b???n v?? t??i x??? gi???i quy???t"
        />
      ) : null}

      {showMap ? (
        <Modal iconType="back" onClose={() => setShowMap(false)} heading="Ch???n ??i???m ?????n t???i">
          <Map
            defaultLocation={{
              address: getValues("from_station.address"),
              lat: +getValues("from_station.lat"),
              lng: +getValues("from_station.lng"),
              province_id: getValues("from_station.province_id"),
            }}
            prevProvinceId={getValues("to_station.province_id")}
            onChooseLocation={(location) => {
              setValue("from_location", location)
              setPickingFromStart(true)
              setToLocalStorage(CARPOOLING_FROM_LOCATION, location)
              setShowMap(false)
            }}
          />
        </Modal>
      ) : null}
    </>
  )
}
