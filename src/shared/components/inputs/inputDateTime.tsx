import { subtractDateTimeToNumberOfHour } from "@/helper"
import "react-datetime/css/react-datetime.css"
import { Control, Controller } from "react-hook-form"
import { MyInputDateTime } from "./myInputDateTime"

interface InputDateTimeProps {
  showLabel?: boolean
  onChange: (params: string) => void
  defaultValue?: string
  placeholder: string
  required?: boolean
  name: string
  control: Control<any>
  isError?: boolean | undefined
  disableHour?: boolean
  disableDate?: boolean
}

export const InputDateTime = ({
  showLabel = true,
  onChange: onChangeProps,
  defaultValue,
  isError = false,
  control,
  name,
  placeholder,
  required = true,
  disableHour = false,
  disableDate = false,
}: InputDateTimeProps) => {
  return (
    <>
      {showLabel ? (
        <label htmlFor={name} className="form-label">
          {placeholder} {required ? "(*)" : ""}
        </label>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur } }) => (
          <MyInputDateTime
            disableHour={disableHour}
            disableDate={disableDate}
            isError={isError}
            onChange={(dateTime) => {
              const newDateTime = subtractDateTimeToNumberOfHour(dateTime, 7)
              onChange(newDateTime)
              onChangeProps(newDateTime)
            }}
            initialValue={defaultValue}
          />
        )}
        rules={{ required: true }}
      />

      {isError ? <p className="form-err-msg">Vui lòng nhập trường này</p> : null}
    </>
  )
}
