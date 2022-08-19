import { HeaderMobile, Wallet, Seo } from "@/components"
import { CustomerAccountLayout } from "@/layout"

const WalletCustomer = () => {
  return (
    <CustomerAccountLayout showHeaderMobile={false}>
      <Seo
        description="Ví cá nhân"
        thumbnailUrl=""
        title="Ví cá nhân"
        url="https://exxe.vn/c/wallet"
      />
      <HeaderMobile title="Ví cá nhân" className="lg:hidden" />
      <Wallet />
    </CustomerAccountLayout>
  )
}

export default WalletCustomer
