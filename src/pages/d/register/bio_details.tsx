import { ImageFileLoading, InputLoading, TextareaLoading, UserInfoForm } from "@/components"
import { ScreenContainer } from "@/container"
import { useProfile } from "@/hooks"
import { DriverEmptyLayout } from "@/layout"
import { UserInfoFormParams } from "@/models"
import { setProfile } from "@/modules"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { notify } from "reapop"

const BioDetail = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: userInfo, isValidating, createUserInfo } = useProfile(true)

  useEffect(() => {
    dispatch(notify("Vui lòng nhập tên hợp lệ để tiếp tục", "info"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmitHandler = (data: UserInfoFormParams) => {
    if (data.name === `USER-${userInfo?.phone}`) {
      dispatch(notify("Vui lòng nhập tên hợp lệ để tiếp tục", "warning"))
      return
    }
    createUserInfo({
      params: {
        ...data,
        car_account_type: "car_driver",
      },
      onSuccess: (userInfo) => {
        dispatch(setProfile(userInfo))
        router.push("/d/register")
      },
      onError: () => {
        dispatch(notify("Có lỗi xảy ra, vui lòng thử lại", "error"))
      },
    })
  }

  return (
    <ScreenContainer heading="Thông tin người dùng">
      <div className="content-container">
        {!isValidating ? (
          <UserInfoForm onSubmit={onSubmitHandler} defaultValues={userInfo} />
        ) : (
          <>
            <ImageFileLoading />
            <InputLoading />
            <InputLoading />
            <InputLoading />
            <TextareaLoading />
          </>
        )}
      </div>
    </ScreenContainer>
  )
}

BioDetail.Layout = DriverEmptyLayout
export default BioDetail
