import { Profile } from "@/components"
import { CustomerAccountLayout } from "@/layout"

const ProfilePage = () => {
  return (
    <>
      <CustomerAccountLayout
        title="Hồ sơ cá nhân"
        desc="Quản lý thông tin hồ sơ để bảo mật tài khoản"
      >
        <div className="content-container px-[16px] md:px-0 pb-[64px] md:pb-0">
          <Profile />
        </div>
      </CustomerAccountLayout>
    </>
  )
}

export default ProfilePage
