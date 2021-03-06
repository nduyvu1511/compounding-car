import { CustomerIcon, DriverIcon, WarningIcon } from "@/assets"
import { CarAccountType } from "@/models"
import { useState } from "react"

interface AccountTypeFormProps {
  onSubmit: (params: CarAccountType) => void
}

const AccountTypeForm = ({ onSubmit }: AccountTypeFormProps) => {
  const [accountType, setAccounType] = useState<CarAccountType | undefined>()

  const handleChooseAccountType = (status: CarAccountType) => {
    setAccounType(status)
  }

  return (
    <div className="">
      <div className="flex items-stretch mb-[40px]">
        {[
          ["Tài khoản khách hàng", CustomerIcon, "customer"],
          ["", DriverIcon, "separate"],
          ["Tài khoản tài xế", DriverIcon, "car_driver"],
        ].map(([label, Icon, value], index) =>
          value === "separate" ? (
            <div className="mx-[32px] w-[1px] my-[50px] bg-border-color"></div>
          ) : (
            <div
              key={index}
              onClick={() => handleChooseAccountType(value as CarAccountType)}
              className={`relative flex-1 flex-center flex-col p-24 border border-solid rounded-[20px] cursor-pointer ${
                accountType === value ? "bg-bg-1 border-primary" : "border-border-color-2"
              }`}
            >
              <Icon className="w-[80%]" />
              <span
                className={`text-base font-semibold mt-[40px] ${
                  accountType === value ? "text-error" : "text-primary"
                }`}
              >
                {label as string}
              </span>
            </div>
          )
        )}
      </div>

      <div className="flex items-start mt-[30px] mb-[80px]">
        <WarningIcon className="w-24 h-24 mr-12 mt-[4px]" />
        <p className="text-sm leading-[22px]">
          Vui lòng chọn đúng loại tài khoản, mỗi số điện thoại chỉ có thể đăng ký một tài khoản.{" "}
        </p>
      </div>

      <div className="flex-center">
        <button
          onClick={() => accountType && onSubmit(accountType)}
          className={`btn-primary ${!accountType ? "btn-disabled" : ""}`}
        >
          Xác nhận
        </button>
      </div>
    </div>
  )
}

export { AccountTypeForm }
