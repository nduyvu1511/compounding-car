import { bg2, guideBg } from "@/assets"
import { GuestLayout } from "@/layout"
import Image from "next/image"

const AboutUs = () => {
  return (
    <section>
      <div className="relative w-full h-[500px]">
        <Image src={guideBg} layout="fill" alt="" objectFit="cover" />
      </div>

      <div className="relative top-[-142px] block-element border border-solid border-border-color rounded-[10px] max-w-[1156px] w-full mx-auto px-[118px] py-[120px]">
        <div className="flex-center flex-col mb-[80px]">
          <p className="text-[24px] font-normal leading-[26px] mb-24">Về chúng tôi</p>
          <h1 className="h1 text-primary text-center">Ứng dụng giải pháp đặt xe chuyên nghiệp</h1>
        </div>
        <div className="">
          <p className="text-base">
            Vì sao chúng ta không thể có những lựa chọn di chuyển an toàn hơn?”
          </p>
          <p className="text-base">
            “Liệu chúng ta có thể giúp các bác tài có điều kiện làm việc tốt hơn không?”
          </p>
          <p className="text-base">
            “Nếu như chúng ta có khả năng giúp cuộc sống này trở nên dễ dàng hơn một chút thì sao?”
          </p>
        </div>

        <div className="">
          <div className="relative h-[400px] mb-[40px]">
            <Image src={bg2} layout="fill" alt="" objectFit="cover" />
          </div>

          <div className="">
            <p className="text-base mb-24">
              Ừ thì, thực ra không phải là một, mà là một vài câu hỏi như bạn thấy đấy. Và những câu
              hỏi này chính là động lực để một nhóm bạn cực kỳ tham vọng (và cực kỳ lạc quan) quyết
              định thành lập công ty này, với trụ sở đầu tiên là một nhà kho nhỏ xíu được thuê tạm,
              đâu đó tại Kuala Lumpur, Malaysia.
            </p>
            <p className="text-base mb-24"> Đó là năm 2012.</p>
            <p className="text-base mb-24">
              Ngày nay, công ty nhỏ xíu đó đã trở thành Exxe, siêu ứng dụng đa dịch vụ hàng đầu và
              là công ty công nghệ di động lớn nhất Đông Nam Á, giúp kết nối hàng triệu khách hàng
              với hàng triệu Đối tác tài xế, Đối tác nhà hàng và Đối tác kinh doanh. Exxe mang trên
              mình trách nhiệm giải quyết những thách thức đang tồn tại trong khu vực Đông Nam Á,
              bao gồm thiếu khả năng tiếp cận công nghệ, cơ sở hạ tầng chưa hoàn thiện, và chênh
              lệch thu nhập.
            </p>
            <p className="text-base">
              Giống như mỗi người dân Đông Nam Á khác, chúng tôi mang trong mình nhiều tham vọng và
              quyết tâm. Chúng tôi vẫn luôn tự hỏi cuộc sống hàng ngày đang có những trở ngại gì cần
              mình khắc phục. Và mỗi ngày trôi qua, chúng tôi cũng vô cùng lạc quan về một cuộc sống
              có Exxe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutUs.Layout = GuestLayout
export default AboutUs
