import { ArrowRightIcon, CheckCircleIcon, LogoIcon } from "@/assets"
import { Alert, ProgressBar } from "@/components"
import { driverFormFields, isObjectHasValue } from "@/helper"
import { useFetchFilledDriverFormFields } from "@/hooks"
import { DriverEmptyLayout } from "@/layout"
import { FilledDataFieldsKey } from "@/models"
import { useRouter } from "next/router"
import { useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { notify } from "reapop"

const DriverInfo = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { data, isInitialLoading } = useFetchFilledDriverFormFields()
  const [openAlert, setOpenAlert] = useState<boolean>(false)

  const filledDataLength = useMemo(() => {
    if (!data || !isObjectHasValue(data)) return 0

    return (
      Object.keys(data).reduce((a, b) => a + (data?.[b as FilledDataFieldsKey] ? 1 : 0), 0) || 0
    )
  }, [data])

  const isFilledAllData = useMemo(() => {
    return filledDataLength === Object.keys(data || {}).length
  }, [data, filledDataLength])

  const handleCreateDriverForm = () => {
    if (!isFilledAllData) {
      dispatch(notify("Vui lòng nhập đầy đủ thông tin để tiếp tục", "warning"))
      return
    }
    setOpenAlert(true)
  }

  if (isInitialLoading)
    return (
      <div className="content-container py-24">
        <div className="skeleton h-[40px] w-[140px] mb-[24px] rounded-[4px]"></div>
        <div className="skeleton h-[30px] rounded-[4px] mb-[40px]"></div>
        <div className="flex justify-between mb-[4px]">
          <div className="skeleton h-[12px] w-[40px] rounded-[4px]"></div>
          <div className="skeleton h-[12px] w-[40px] rounded-[4px]"></div>
        </div>
        <div className="skeleton h-[10px] rounded-[4px] mb-[40px]"></div>
        <div className="skeleton h-[30px] rounded-[4px] mb-[24px]"></div>
        <div className="skeleton h-[30px] rounded-[4px] mb-[24px]"></div>
        <div className="skeleton h-[30px] rounded-[4px] mb-[24px]"></div>
        <div className="skeleton h-[30px] rounded-[4px] mb-[24px]"></div>
        <div className="skeleton h-[30px] rounded-[4px] mb-[40px]"></div>
        <div className=" flex-center">
          <div className="w-[160px] rounded-[20px] py-[24px] skeleton mb-[24px]"></div>
        </div>
      </div>
    )

  return (
    <>
      <div className="py-24">
        <div className="content-container">
          <div className="">
            <LogoIcon className="mb-24" />
            <p className="text-16 font-medium leading-26">
              Vui lòng hoàn thành toàn bộ thông tin sau đăng ký để bắt đầu lái xe
            </p>
          </div>

          <div className="my-[40px]">
            <ProgressBar
              totalProgressNumber={Object.keys(data || {}).length}
              progressNumber={filledDataLength}
            />
          </div>

          <div className="">
            {driverFormFields.map((parent, index) => (
              <div key={index} className="driver__page-body-item">
                <ul className="driver__body-list">
                  {parent?.child?.length > 0 &&
                    parent.child.map((child, index) => (
                      <li
                        onClick={() => router.push(`/d/register/${child.route}`)}
                        key={index}
                        className="flex items-center justify-between cursor-pointer py-[14px] text-16 font-semibold leading-[22px]"
                      >
                        <p className="text-gray-color-4">{child.label}</p>
                        <p
                          className={`flex items-center text-warning ${
                            data?.[child.name] ? "text-success" : ""
                          }
                        } ${!child.isRequired ? "driver__body-list-item-noti-no-required" : ""}`}
                        >
                          {data?.[child.name]
                            ? "Hoàn thành"
                            : child.isRequired
                            ? "Bắt đầu ngay"
                            : "Không băt buộc"}
                          {data?.[child.name] ? (
                            <CheckCircleIcon className="ml-[16px]" />
                          ) : (
                            <ArrowRightIcon className="ml-[16px] w-[20] h-[20]" />
                          )}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex-center mt-[40px]">
            <button
              onClick={handleCreateDriverForm}
              className={`btn-primary ${!isFilledAllData ? "btn-not-allowed" : ""}`}
            >
              Gửi hồ sơ
            </button>
          </div>
        </div>
      </div>
      {openAlert ? (
        <Alert
          desc="Hồ sơ của bạn đang được xét duyệt, bộ phận CSKH Exxe sẽ liên hệ với bạn sớm nhất"
          onClose={() => {}}
          onConfirm={() => router.push("/d")}
          showLeftBtn={false}
        />
      ) : null}
    </>
  )
}

DriverInfo.Layout = DriverEmptyLayout
export default DriverInfo
