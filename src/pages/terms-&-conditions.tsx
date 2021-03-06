/* eslint-disable react/no-unescaped-entities */
import { ArrowDownIcon, guideBg } from "@/assets"
import { GuestLayout } from "@/layout"
import Image from "next/image"
import { useState } from "react"

const Conditions = () => {
  const [tabActive, setTabActive] = useState<number>()

  return (
    <section>
      <div className="relative w-full h-[500px]">
        <Image src={guideBg} layout="fill" alt="" objectFit="cover" />
      </div>

      <div className="relative top-[-142px] block-element border border-solid border-border-color rounded-[10px] max-w-[1156px] w-full mx-auto px-[118px] py-[120px]">
        <div className="flex-center flex-col mb-[80px]">
          <p className="text-[24px] font-normal leading-[26px] mb-24">Điều lệ & Điều khoản</p>
          <h1 className="h1 text-primary text-center">
            Bảo mật thuộc quyền sở hữu của Công ty EXXE.VN
          </h1>
        </div>
        <div className="mb-[80px]">
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
          <div>
            <div
              onClick={() => setTabActive(tabActive === 1 ? undefined : 1)}
              className="flex items-center justify-between p-24 bg-[#F1F5FF] cursor-pointer border-b border-solid border-border-color"
            >
              <h3 className="h3 text-primary">1. Nguyên tắc cộng đồng</h3>
              <span
                className={`tranform transition-all duration-300 ${
                  tabActive === 1 ? "rotate-[180deg]" : ""
                }`}
              >
                <ArrowDownIcon className="w-[20px] h-[20px]" />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                tabActive === 1 ? "my-24" : "m-0"
              }`}
            >
              <ul
                className={`transition-all duration-300 px-24 overflow-hidden ${
                  tabActive === 1 ? "max-h-[1000000px]" : "max-h-0"
                }`}
              >
                {[
                  "Hãy đảm bảo rằng bạn luôn tuân thủ nghiêm chỉnh luật lệ giao thông Việt Nam. Khi di chuyển bằng xe ô tô, hãy luôn nhớ thắt dây an toàn dù bạn ngồi ghế trước hay ghế sau. Khi di chuyển bằng xe máy, hãy luôn đội nón bảo hiểm khi ngồi trên xe.",
                  "Đối tác tài xế có trách nhiệm cụ thể về vấn đề an toàn và tuyệt đối không thực hiện các hành vi cấm theo Điều Luật Giao Thông Đường Bộ trong các chuyến xe be như: không điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy, trong máu hoặc hơi thở có nồng độ cồn; không chạy quá tốc độ cho phép, lạng lách, đánh võng; không đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; không bắt ép hành khách sử dụng dịch vụ ngoài ý muốn; không sử dụng điện thoại khi đang chạy xe (đối tác có thể dùng giá đỡ điện thoại để xem chỉ đường hay tai nghe bluetooth để nghe điện thoại).",
                  "Các đối tác tài xế không nên nhận chuyến trong tình trạng mệt mỏi và buồn ngủ. Hãy đảm bảo tình trạng sức khỏe tốt khi đang lái xe để đảm bảo an toàn tối đa.",
                ].map((item, index) => (
                  <li key={index} className="mb-24 text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div
              onClick={() => setTabActive(tabActive === 2 ? undefined : 2)}
              className="flex items-center justify-between p-24 bg-[#F1F5FF] cursor-pointer border-b border-solid border-border-color"
            >
              <h3 className="h3 text-primary">2. Quy chế dịch vụ vận tải hành khách</h3>
              <span
                className={`tranform transition-all duration-300 ${
                  tabActive === 2 ? "rotate-[180deg]" : ""
                }`}
              >
                <ArrowDownIcon className="w-[20px] h-[20px]" />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                tabActive === 2 ? "my-24" : "m-0"
              }`}
            >
              <div
                className={`transition-all duration-300 px-24 overflow-hidden ${
                  tabActive === 2 ? "max-h-[10000000px]" : "max-h-0"
                }`}
              >
                <p className="text-base mb-24">
                  Quy chế dịch vụ vận tải hành khách (“Quy chế Vận tải Hành khách”) được xây dựng
                  nhằm mang đến nhiều dịch vụ trực tuyến hữu ích phục vụ nhu cầu đi lại, vận chuyển
                  hành khách của mọi người kết nối cung cấp dịch vụ qua ứng dụng Exxe.
                </p>

                <p className="text-base mb-24">
                  Quy chế Vận tải Hành khách là thỏa thuận pháp lý ràng buộc Khách hàng (hành
                  khách), Tài xế, Đơn vị vận tải, Exxe và các Bên liên quan khi thực hiện giao dịch
                  liên quan đến dịch vụ vận chuyển hành khách qua ứng dụng Exxe.
                </p>

                <h5 className="text-base text-primary mb-24 font-semibold">1. Nguyên tắc chung:</h5>

                <p className="text-base mb-24">
                  Khách hàng, Tài xế, Đơn vị vận tải và các bên liên quan, khi tham gia thực hiện
                  giao dịch dịch vụ vận chuyển, được tự do thỏa thuận trên cơ sở tôn trọng quyền và
                  lợi ích hợp pháp của các bên, phù hợp với quy định của pháp luật hiện hành có liên
                  quan, các quy định tại quy chế này và các quy định khác liên quan của Exxe từng
                  thời kỳ.
                </p>

                <p className="text-base mb-24">
                  Thông tin sử dụng trong các giao dịch vận chuyển hành khách và các thông tin khác
                  có liên quan phải minh bạch, chính xác, đầy đủ và xác thực.
                </p>
                <p className="text-base mb-24">
                  Khách hàng, Tài xế, Đơn vị vận tải và các bên liên quan khi thực hiện các giao
                  dịch vận chuyển hành khách thông qua dịch vụ và các dịch vụ khác liên quan, phải
                  tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành của Việt Nam
                  và cam kết thực hiện đúng những nội dung trong Quy chế này, Quy chế hoạt động Sàn
                  TMĐT Exxe và các quy định khác có liên quan của Exxe từng thời kỳ.
                </p>
                <h5 className="text-base mb-24 text-primary font-semibold">
                  2. Giải thích từ ngữ:
                </h5>
                <p className="text-base mb-24">
                  Trong phạm vi quy chế này, các từ ngữ sau đây được hiểu như sau:
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Ứng dụng Exxe</span> là ứng dụng sàn giao dịch
                  thương mại điện tử hoạt động trên thiết bị di động, được thiết lập, quản lý, vận
                  hành bởi Exxe.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Dịch vụ Exxe</span> là dịch vụ thương mại điện tử do
                  Exxe cung cấp cho phép Khách hàng, Tài xế kết nối với nhau, thực hiện cung cấp
                  dịch vụ vận tải hành khách theo hợp đồng bằng xe ô tô dưới 9 chỗ ngồi, được giao
                  dịch thông qua ứng dụng Be.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Dịch vụ Exxe</span> cung cấp cho phép Khách hàng,
                  Tài xế kết nối với nhau, thực hiện cung cấp dịch vụ vận tải hành khách từ tỉnh/
                  thành phố này sang tỉnh/thành phố khác, hoặc trong phạm vi một tỉnh/thành phố có
                  quãng đường di chuyển lớn, bao gồm hành trình một chiều (chiều đi) hoặc hai chiều
                  (chiều đi và chiều về), được giao dịch thông qua ứng dụng Exxe. Khách hàng có thể
                  đặt dịch vụ Exxe bằng phương tiện xe ô tô 4 - 16 chỗ ngồi.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Khách hàng </span>là tổ chức, cá nhân thực hiện yêu
                  cầu cung cấp dịch vụ vận chuyển hành khách qua ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Tài xế </span>là cá nhân cung cấp dịch vụ vận chuyển
                  hành khách bằng Phương tiện phù hợp, tùy vào từng loại dịch vụ vận chuyển.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Đơn vị vận tải</span> là doanh nghiệp, hợp tác xã
                  kinh doanh dịch vụ vận tải hành khách theo hợp đồng bằng xe ô tô 4 - 16 chỗ ngồi.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Phương tiện</span> là xe ô tô 4 - 16 chỗ ngồi dùng
                  để chuyên chở hành khách. Phương tiện phải đáp ứng các yêu cầu, điều kiện tham gia
                  lưu thông, cung cấp dịch vụ vận tải theo quy định của pháp luật hiện hành và quy
                  định của Exxe từng thời kỳ.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Hành khách</span> là người được chuyên chở trên
                  phương tiện do Khách hàng đặt dịch vụ hợp lệ qua ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  –<span className="font-bold"> Chuyến (Cuốc) xe</span> là hành trình vận chuyển
                  hành khách từ điểm đón đến điểm trả khách theo yêu cầu của Khách hàng khi thực
                  hiện lệnh đặt xe.
                </p>
                <h5 className="text-base font-bold text-primary mb-24">
                  3. Phạm vi cung cấp dịch vụ:
                </h5>
                <p className="text-base mb-24">
                  Dịch vụ Exxe và các dịch vụ liên quan được cung cấp trong phạm vi thành phố Hà
                  Nội, thành phố Hồ Chí Minh và các tỉnh, thành phố trực thuộc trung ương nơi mà
                  Exxe có đăng ký kinh doanh và đã có đủ điều kiện kinh doanh theo quy định của pháp
                  luật hiện hành có liên quan trong từng thời kỳ.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              onClick={() => setTabActive(tabActive === 3 ? undefined : 3)}
              className="flex items-center justify-between p-24 bg-[#F1F5FF] cursor-pointer border-b border-solid border-border-color"
            >
              <h3 className="h3 text-primary">3. Quy chế hoạt động</h3>
              <span
                className={`tranform transition-all duration-300 ${
                  tabActive === 3 ? "rotate-[180deg]" : ""
                }`}
              >
                <ArrowDownIcon className="w-[20px] h-[20px]" />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                tabActive === 3 ? "my-24" : "m-0"
              }`}
            >
              <div
                className={`transition-all duration-300 px-24 overflow-hidden ${
                  tabActive === 3 ? "max-h-[10000000px]" : "max-h-0"
                }`}
              >
                <h5 className="text-base font-semibold text-primary mb-24">A. Giới thiệu:</h5>
                <p className="text-base mb-24">
                  Ứng dụng Exxe là ứng dụng thương mại điện tử trên thiết bị di động do Công ty Cổ
                  phần Đầu Tư Công Nghệ và Vận Tải ExxVn, mã số thuế: ……………., địa chỉ: Số 2 đường
                  Hoàng Thế Thiện, Phường An lợi Đông, TP. Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                  (sau đây gọi là: Exxe), thiết lập, quản lý, vận hành để cung cấp môi trường cho
                  các thương nhân, tổ chức, cá nhân khác tiến hành các hoạt động thương mại phù hợp
                  với quy định của pháp luật hiện hành.
                </p>
                <p className="text-base mb-24">
                  Ứng dụng Exxe bao gồm: 2 chiều, 1 chiều, Tiện chuyến, Ghép chuyến.
                </p>
                <h5 className="text-base font-bold text-primary">B. Quy định chung:</h5>

                <p className="text-base mb-24">
                  1. Bản quy chế này ban hành các quy định, điều khoản, điều kiện áp dụng đối với
                  các thương nhân, tổ chức, cá nhân mua bán hàng hóa hoặc cung cấp dịch vụ tham gia
                  Sàn TMĐT Exxe với mục đích tạo ra một môi trường hoạt động thương mại, dịch vụ
                  lành mạnh, hợp pháp, phù hợp với quy định của pháp luật hiện hành.
                </p>
                <p className="text-base mb-24">
                  2. Thành viên tham gia giao dịch qua Sàn TMĐT Exxe được tự do thỏa thuận không
                  trái với các quy định của pháp luật, thuần phong mỹ tục và đạo đức xã hội; tự
                  nguyện, bình đẳng trong giao dịch; bảo đảm quyền và lợi ích hợp pháp của Nhà nước,
                  Exxe, các thành viên và các tổ chức, cá nhân liên quan; bảo đảm quyền lợi người
                  tiêu dùng.
                </p>
                <p className="text-base mb-24">
                  3. Hàng hóa, dịch vụ được giao dịch một phần hoặc toàn bộ qua Sàn TMĐT Exxe phải
                  đảm bảo tuân thủ các quy định pháp luật liên quan đến việc kinh doanh hàng hóa,
                  dịch vụ đó; Đối với hàng hóa, dịch vụ thuộc loại hình kinh doanh có điều kiện thì
                  phải có đầy đủ điều kiện kinh doanh; Hàng hóa, dịch vụ cung cấp qua Sàn TMĐT Exxe
                  không thuộc các trường hợp cấm kinh doanh, cấm vận chuyển, cấm quảng cáo theo quy
                  định của pháp luật hiện hành.
                </p>
                <p className="text-base mb-24">
                  4. Thương nhân cung cấp hàng hóa, dịch vụ thực hiện hoạt động thương mại qua Sàn
                  TMĐT Exxe có nghĩa vụ thông tin đầy đủ, trung thực cho người tiêu dùng về hàng
                  hoá, dịch vụ mà mình kinh doanh và phải chịu trách nhiệm về tính chính xác của các
                  thông tin đó, đồng thời phải chịu trách nhiệm về chất lượng, tính hợp pháp của
                  hàng hoá, dịch vụ mà mình kinh doanh.
                </p>
                <p className="text-base mb-24">
                  5. Bằng việc tham gia giao dịch trên Sàn TMĐT Exxe, Thương nhân, tổ chức, cá nhân
                  được xem là đã tìm hiểu đầy đủ quyền và nghĩa vụ của mình và hoàn toàn đồng ý bị
                  ràng buộc bởi Quy chế hoạt động Sàn TMĐT Exxe này. Thương nhân, tổ chức, cá nhân
                  liên quan thừa nhận giá trị pháp lý của các giao dịch hợp pháp, hợp lệ được thực
                  hiện qua Sàn TMĐT Exxe.
                </p>
                <p className="text-base mb-24">6. Các định nghĩa</p>
                <p className="text-base mb-24">
                  7. “Sàn TMĐT Exxe” là sàn giao dịch thương mại điện tử do Exxe tổ chức thiết lập,
                  quản lý, vận hành để cung cấp môi trường cho các thương nhân, tổ chức, cá nhân
                  khác tiến hành các hoạt động thương mại mua bán hàng hóa, cung cấp dịch vụ phù hợp
                  với quy định của pháp luật.
                </p>
                <p className="text-base mb-24">
                  8. “Khách hàng” (hoặc “Người mua”) là tổ chức, cá nhân có nhu cầu mua hàng hóa,
                  dịch vụ của Nhà cung cấp với một phần hoặc toàn bộ quy trình mua bán hàng hóa,
                  cung ứng dịch vụ được thực hiện qua ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  9. “Nhà cung cấp” (còn gọi là: “Người Bán” hoặc “Thương nhân” hoặc “Merchant”): là
                  tổ chức, cá nhân có nhu cầu bán hàng hóa, dịch vụ của mình cho Khách hàng với một
                  phần hoặc toàn bộ quy trình mua bán hàng, cung ứng dịch vụ được thực hiện qua ứng
                  dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  10. “Tài xế” là cá nhân trực tiếp điều khiển phương tiện để cung cấp dịch vụ vận
                  chuyển hành khách hoặc hàng hóa cho Khách hàng kết nối qua ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  11. “Đơn vị vận tải” là doanh nghiệp/hợp tác xã kinh doanh dịch vụ vận tải hành
                  khách bằng ô tô đáp ứng các quy định của pháp luật hiện hành.
                </p>
                <p className="text-base mb-24">
                  12. “Phương tiện” là xe ô tô 4 - 16 chỗ ngồi hoặc xe mô tô, xe gắn máy 02 bánh
                  (tùy theo loại hình dịch vụ) của Nhà cung cấp/Tài xế, đáp ứng đủ điều kiện để tham
                  gia lưu thông, vận chuyển hành khách/ hàng hóa theo quy định của pháp luật hiện
                  hành và các quy định có liên quan của Exxe.
                </p>
                <p className="text-base mb-24">
                  13. “Thành viên” là tổ chức, cá nhân đăng ký tài khoản ứng dụng Exxe và được Exxe
                  chấp thuận để có thể tiến hành một phần hoặc toàn bộ quy trình mua bán hàng hóa,
                  cung ứng dịch vụ qua Sàn TMĐT Exxe, tùy vào từng đối tượng cụ thể mà đăng ký loại
                  tài khoản ứng dụng Exxe phù hợp.
                </p>
                <p className="text-base mb-24">
                  14. “Sở hữu trí tuệ” là bất kỳ bằng sáng chế, bản quyền, thiết kế đã được đăng ký
                  hoặc chưa được đăng ký, quyền đối với thiết kế, nhãn hiệu đã được đăng ký hoặc
                  chưa được đăng ký, nhãn hiệu dịch vụ hoặc quyền sở hữu công nghiệp hoặc sở hữu trí
                  tuệ khác của Công ty Cổ phần Đầu Tư Công Nghệ và Vận Tải ExxeVn và bao gồm các ứng
                  dụng cho bất kỳ mục nào trong những mục trên.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              onClick={() => setTabActive(tabActive === 4 ? undefined : 4)}
              className="flex items-center justify-between p-24 bg-[#F1F5FF] cursor-pointer border-b border-solid border-border-color"
            >
              <h3 className="h3 text-primary">4. Điều khoản sử dụng:</h3>
              <span
                className={`tranform transition-all duration-300 ${
                  tabActive === 4 ? "rotate-[180deg]" : ""
                }`}
              >
                <ArrowDownIcon className="w-[20px] h-[20px]" />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                tabActive === 4 ? "my-24" : "m-0"
              }`}
            >
              <div
                className={`transition-all duration-300 px-24 overflow-hidden ${
                  tabActive === 4 ? "max-h-[10000000px]" : "max-h-0"
                }`}
              >
                <p className="text-base mb-24">
                  Chào mừng Quý Khách hàng đến với trang thông tin điện tử{" "}
                  <a
                    href="https://Exxe.vn"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary"
                  >
                    https://Exxe.vn
                  </a>{" "}
                  và ứng dụng Exxe của Công ty Cổ phần Đầu Tư Công Nghệ và Vận Tải ExxeVn.
                </p>
                <p className="text-base mb-24">
                  Ứng dụng Exxe là ứng dụng trên thiết bị di động cung cấp dịch vụ thương mại điện
                  tử (sau đây gọi tắt là: “Sàn TMĐT Exxe“) trong ngành giao thông vận tải được thiết
                  lập, quản lý và vận hành bởi Công ty Cổ phần Đầu Tư Công Nghệ và Vận Tải ExxeVn .
                  Công ty Cổ phần Đầu Tư Công nghệ và Vận Tải ExxeVn(sau đây gọi là “Công ty” hoặc
                  “EXXE ”) hoạt động theo Giấy chứng nhận đăng ký doanh nghiệp số …………… do Sở Kế
                  hoạch & Đầu tư thành phố Hồ chí Minh cấp lần đầu ngày ………………., các thay đổi sau đó
                  do Sở Kế hoạch & Đầu tư thành phố Hồ Chí Minh cấp.
                </p>
                <p className="text-base mb-24">
                  Quý Khách hàng vui lòng đọc kỹ Điều khoản và Điều kiện sử dụng ứng dụng Exxe
                  (“Điều khoản sử dụng”) trước khi cài đặt và sử dụng ứng dụng Exxe để đặt mua bất
                  kỳ dịch vụ nào thông qua Sàn TMĐT EXXE (sau đây gọi là “Dịch vụ”).
                </p>
                <p className="text-base mb-24">
                  Điều khoản sử dụng này là thỏa thuận pháp lý giữa Quý Khách hàng và Công ty khi
                  Quý Khách hàng đã lựa chọn sử dụng ứng dụng Exxe và sử dụng Dịch vụ trên Sàn TMĐT
                  Exxe. Bằng việc sử dụng Dịch vụ trên ứng dụng Exxe, Quý Khách hàng đồng ý rằng
                  mình đã đọc, hiểu rõ, chấp nhận và đồng ý với Điều khoản sử dụng này và với bất kỳ
                  nội dung sửa đổi, bổ sung nào của Điều khoản sử dụng này được công bố bởi Exxe tại
                  từng thời điểm trên trang thông tin điện tử{" "}
                  <a
                    href="https://Exxe.vn"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary"
                  >
                    https://Exxe.vn
                  </a>{" "}
                  và/hoặc trên ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  Điều khoản sử dụng này và bất kỳ sửa đổi, bổ sung nào của Điều khoản sử dụng này
                  được công bố bởi Exxe tại từng thời điểm tại trang thông tin điện tử
                  <a
                    href="https://Exxe.vn"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary"
                  >
                    https://Exxe.vn
                  </a>{" "}
                  và/hoặc trên Ứng dụng Exxe. Exxe bảo lưu quyền được điều chỉnh, sửa đổi, bổ sung
                  hoặc hủy bỏ bất kỳ điều khoản nào của Điều khoản sử dụng hoặc các chính sách liên
                  quan đến Dịch vụ tại bất cứ thời điểm nào mà Exxe cho là phù hợp.
                </p>
                <p className="text-base mb-24">
                  Những điều chỉnh, sửa đổi, bổ sung hoặc hủy bỏ Điều khoản sử dụng hoặc các chính
                  sách có liên quan đến Dịch vụ sẽ có hiệu lực ngay khi nội dung được đăng tải trên
                  trang thông tin điện tử{" "}
                  <a
                    href="https://Exxe.vn"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary"
                  >
                    https://Exxe.vn
                  </a>{" "}
                  và/hoặc thông qua ứng dụng <span className="text-bold">Exxe</span>.
                </p>
                <p className="text-base mb-24">
                  Quý Khách hàng có trách nhiệm kiểm tra thường xuyên Điều khoản sử dụng này khi sử
                  dụng ứng dụng <span className="font-bold">Exxe</span> và sử dụng Dịch vụ thông qua
                  ứng dụng <span className="font-bold">Exxe</span>. Việc tiếp tục sử dụng ứng dụng{" "}
                  <span className="font-bold">Exxe</span> sử dụng Dịch vụ trên Sàn TMĐT{" "}
                  <span className="font-bold">Exxe</span> sau khi có bất kỳ thay đổi nào về Điều
                  khoản sử dụng, bất kể là Quý Khách hàng có xem xét sự thay đổi của Điều khoản sử
                  dụng hay chưa, sẽ mặc nhiên được coi là quý khách đã chấp thuận và đồng ý đối với
                  những nội dung thay đổi đó.
                </p>
                <p className="text-base mb-24">
                  <span className="font-bold">Exxe</span> là chủ quản lý, vận hành ứng dụng{" "}
                  <span className="font-bold">Exxe</span> thực hiện hợp tác kinh doanh với Đối tác
                  đủ điều kiện để cung cấp dịch vụ vận tải cho Khách hàng theo quy định của pháp
                  luật hiện hành có liên quan của Việt Nam (sau đây gọi là: “Đối tác” hoặc “Nhà cung
                  cấp”).
                </p>
                <p className="text-base mb-24">
                  Thời điểm giao dịch giữa Nhà cung cấp với Quý Khách hàng được xác lập thông qua
                  ứng dụng Exxe cũng là thời điểm quyền và nghĩa vụ giữa Quý Khách hàng và Nhà cung
                  cấp và/hoặc Exxe phát sinh hiệu lực theo quy định pháp luật Việt Nam hoặc theo
                  Điều ước quốc tế mà nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là thành viên.
                </p>
                <p className="text-base mb-24">
                  Dịch vụ mà Exxe cung cấp là ứng dụng công nghệ kết nối Quý Khách hàng với các Đối
                  tác của Exxe nhằm tạo sự thuận lợi của các bên trong quá trình giao dịch. Exxe cam
                  kết hỗ trợ Quý Khách hàng hoặc thực hiện cung cấp thông tin liên quan cho cơ quan
                  có thẩm quyền để giải quyết những tranh chấp phát sinh trong quá trình Quý Khách
                  hàng sử dụng Dịch vụ của Nhà cung cấp kết nối thông qua ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  Quy định này sẽ giúp Quý Khách hàng hiểu rõ những thông tin cá nhân nào mà Exxe sẽ
                  thu thập, cũng như cách Exxe sử dụng những thông tin này sau đó
                </p>
                <h5 className="text-base font-bold mb-12">Cam kết</h5>
                <p className="text-base mb-24">
                  Khi sử dụng Dịch vụ, sử dụng ứng dụng Exxe, Quý Khách hàng cam kết và bảo đảm bảo
                  rằng:
                </p>
                <p className="text-base mb-[12px]">
                  1. Có năng lực hành vi dân sự đầy đủ theo quy định của pháp luật hiện hành để chấp
                  thuận và đồng ý với Điều khoản sử dụng; có quyền, thẩm quyền và năng lực để sử
                  dụng Dịch vụ và để tuân theo Điều khoản sử dụng này.
                </p>
                <p className="text-base mb-[12px]">
                  2. Những thông tin cung cấp cho Exxe luôn đảm bảo cập nhật, đầy đủ và xác
                  thực.Việc sử dụng Dịch vụ, sử dụng ứng dụng Exxe là để phục vụ cho nhu cầu hợp
                  pháp, hợp lệ.Không được ủy quyền cho người khác sử dụng danh tính hoặc tư cách
                  người dùng ứng dụng Exxe của mình.
                </p>
                <p className="text-base mb-[12px]">
                  3. Không được chuyển giao, chuyển nhượng tài khoản người dùng ứng dụng Exxe của
                  mình cho bất kỳ cá nhân hoặc tổ chức nào khác.
                </p>
                <p className="text-base mb-[12px]">
                  4. Cam kết luôn tuân thủ quy định của pháp luật hiện hành liên quan được áp dụng
                  tại quốc gia của mình và tại Việt Nam nơi sử dụng Dịch vụ.
                </p>
                <p className="text-base mb-[12px]">
                  5. Có trách nhiệm kiểm tra và đảm bảo rằng Quý Khách hàng đã tải đúng ứng dụng
                  Exxe tương thích dành cho thiết bị di động của mình. Exxe không chịu trách nhiệm
                  đối với việc Quý Khách hàng không có một thiết bị tương thích với ứng dụng Exxe
                  và/hoặc đã tải một phiên bản ứng dụng Exxe không phù hợp, không tương thích dành
                  cho thiết bị di động của Quý Khách hàng.
                </p>
                <p className="text-base mb-[12px]">
                  6. Công ty bảo lưu quyền không cho phép Quý Khách hàng sử dụng Dịch vụ trong
                  trường hợp Quý Khách hàng sử dụng ứng dụng Exxe trên một thiết bị không tương
                  thích, không được cho phép hoặc sử dụng ứng dụng Exxe có mục đích khác với mục
                  đích mà ứng dụng Exxe có hỗ trợ.
                </p>
                <div className="text-base mb-24">
                  Bằng việc sử dụng ứng dụng Exxe, Quý Khách hàng cam kết, đồng ý rằng:
                </div>
                <p className="text-base mb-[12px]">
                  1. Không sử dụng ứng dụng Exxe để gửi và lưu trữ bất kỳ tài liệu hoặc thông tin
                  trái phép nào hoặc phục vụ các mục đích lừa đảo; để làm phiền, quấy nhiễu người
                  khác hoặc thực hiện đặt sử dụng dịch vụ giả mạo; vi phạm điều cấm của pháp luật
                  hiện hành của Việt Nam.
                </p>
                <p className="text-base mb-[12px]">
                  2. Không liên hệ với Đối tác trên Sàn TMĐT Exxe nhằm mục đích khác ngoài mục đích
                  sử dụng Dịch vụ mà ứng dụng Exxe có hỗ trợ.
                </p>
                <p className="text-base mb-[12px]">
                  3. Không sử dụng thông tin của Exxe của Nhà cung cấp cho mục đích nào khác ngoài
                  mục đích sử dụng Dịch vụ.
                </p>
                <p className="text-base mb-[12px]">
                  4. Không thực hiện các hành vi (cố ý hay vô ý) có thể gây tổn hại cho ứng dụng
                  Exxe, tổn hại tới uy tín thương hiệu, tài sản của Exxe và/hoặc Nhà cung cấp.
                </p>
                <p className="text-base mb-[12px]">
                  5. Không sao chép, bán lại, tặng cho hoặc phân phối ứng dụng Exxe và/hoặc phần mềm
                  hỗ trợ liên quan khi không có sự cho phép bằng văn bản của Exxe
                </p>
                <p className="text-base mb-[12px]">
                  6. Hoàn toàn chịu trách nhiệm bảo toàn và bảo mật mật khẩu tài khoản sử dụng ứng
                  dụng EXXE (Tài khoản Người dùng) của mình hoặc bất kỳ phương thức nhận dạng nào mà
                  Exxe cung cấp để Khách hàng sử dụng ứng dụng Exxe.
                </p>
                <p className="text-base mb-[12px]">
                  7. Cung cấp cho Exxe bất kỳ bằng chứng về nhận dạng nào mà Exxe có thể yêu cầu vì
                  mục đích cung cấp Tài khoản Người dùng, cung cấp Dịch vụ.
                </p>
                <p className="text-base mb-[12px]">
                  8. Đồng ý cung cấp thông tin xác thực, thường xuyên duy trì, cập nhật kịp thời và
                  đầy đủ thông tin theo yêu cầu của Exxe để sử dụng Dịch vụ để đảm bảo rằng các
                  thông tin này luôn xác thực, cập nhật và đầy đủ vào mọi thời điểm. Quý Khách hàng
                  xác nhận rằng nếu các thông tin về Quý Khách hàng là không đúng, không chính xác,
                  thiếu cập nhật hoặc không đầy đủ trên bất kỳ phương diện nào thì Exxe có quyền
                  chấm dứt việc sử dụng Dịch vụ của Quý Khách hàng bất kỳ lúc nào cho dù là có hoặc
                  không thông báo.
                </p>
                <p className="text-base mb-[12px]">
                  9. Không thực hiện các hành vi lừa dối Exxe và các hành vi có tính chất tương tự
                  nhằm hưởng lợi bất chính trong bất kỳ sự kiện, hoạt động khuyến mại hoặc chiến
                  dịch nào do Exxe tiến hành.
                </p>
                <p className="text-base mb-[12px]">
                  10. Khi yêu cầu Dịch vụ thông qua ứng dụng Exxe hoặc khi sử dụng Dịch vụ, quý
                  khách phải tự chi trả cước viễn thông theo chính sách của nhà cung cấp dịch vụ
                  viễn thông.
                </p>
                <p className="text-base mb-[12px]">
                  11. Không được thực hiện các hành vi nhằm phá hoại sự vận hành bình thường của ứng
                  dụng Exxe và các hệ thống công nghệ thông tin liên quan của Exxe .
                </p>
                <p className="text-base mb-[12px]">
                  12. Việc sử dụng ứng dụng Exxe Dịch vụ và/hoặc các tính năng được tích hợp trên
                  ứng dụng Exxe của Quý Khách hàng sẽ phù hợp và tuân theo Chính sách Bảo mật thông
                  tin của Exxe.
                </p>
                <p className="text-base mb-[12px]">
                  13. Cam kết hoàn toàn chịu trách nhiệm pháp lý, chịu trách nhiệm đối với toàn bộ
                  tổn thất hoặc thiệt hại gây ra cho chính bản thân Quý Khách hàng, Đối tác, Exxe và
                  bất kỳ bên thứ ba nào khi Quý Khách hàng vi phạm bất kỳ quy định nào của Điều
                  khoản sử dụng này.
                </p>
                <h5 className="text-base font-bold text-primary mb-24">Thanh toán</h5>
                <p className="text-base mb-24 font-bold">1. Định nghĩa</p>
                <p className="text-base mb-24">
                  Dịch vụ thanh toán trực tuyến tự động: là việc cấp phép, xử lý dữ liệu và thực
                  hiện thanh toán do VCB và NAPAS (đơn vị chấp thuận thanh toán) cung cấp cho Exxe
                  để xử lý các giao dịch thanh toán tự động phát sinh khi Khách hàng sử dụng Dịch vụ
                  của Exxe . Giao dịch thanh toán trực tuyến tự động/Giao dịch: là giao dịch do Exxe
                  thay mặt Khách hàng thực hiện thanh toán hóa đơn hàng hóa, dịch vụ qua kênh thanh
                  toán trực tuyến khi phát sinh đối với các hàng hóa, dịch vụ mà Exxe cung cấp cho
                  Khách hàng sử dụng Token trên cơ sở ủy quyền của Khách hàng cho Exxe
                </p>
                <h5 className="text-base font-bold mb-12">2. Phương thức thực hiện thanh toán</h5>
                <p className="text-base mb-[12px]">
                  Khi Khách hàng sử dụng dịch vụ vận tải trên Sàn TMĐT Exxevà có sử dụng công cụ
                  thanh toán của NAPAS thì Khách hàng mặc nhiên đồng ý ủy quyền, không hủy ngang cho
                  Exxe thay mặt Khách hàng thực hiện giao dịch thanh toán trực tuyến tự động qua
                  cổng thanh toán của VCB và NAPAS. Nội dung ủy quyền: Khách hàng đồng ý ủy quyền
                  cho Exxe được thay mặt Khách hàng thực hiện các nội dung sau:
                </p>
                <p className="text-base mb-[12px]">
                  – Thực hiện giao dịch thanh toán trực tuyến tự động đối với các dịch vụ vận tải mà
                  Exxe cung cấp cho Khách hàng.
                </p>
                <p className="text-base mb-[12px]">
                  – Điều kiện thanh toán: thanh toán khi phát sinh Dịch vụ.
                </p>
                <p className="text-base mb-[12px]">
                  – Thời gian thanh toán tự động: cố định, hoặc không cố định.
                </p>
                <p className="text-base mb-[12px]">
                  – Giá trị thanh toán: cố định hoặc không cố định.
                </p>
                <p className="text-base mb-[12px]">– Phương tiện thanh toán: Token.</p>
                <p className="text-base mb-[12px]">
                  – Hàng hóa dịch vụ được thanh toán tự động: dịch vụ vận tải.Khi chấp thuận ủy
                  quyền cho Exxe thì Khách hàng mặc nhiên đồng ý cho VCB và NAPAS có quyền lưu trữ
                  các thông tin Khách hàng (bao gồm nhưng không giới hạn các thông tin về phương
                  tiện thanh toán, giao dịch, …) để phục vụ cho việc triển khai dịch vụ. Nếu Khách
                  hàng không đồng ý ủy quyền cho Exxe theo quy định tại mục này thì quý Khách hàng
                  có thể sử dụng phương thức thanh toán khác. Thuế
                </p>
                <p className="text-base mb-[12px]">
                  Là người sử dụng Dịch vụ thông qua ứng dụng Exxe, Quý Khách hàng đồng ý rằng,
                  nghĩa vụ thuế của Exxe, của Đối tác cung ứng dịch vụ vận tải là độc lập. Mỗi bên
                  có nghĩa vụ kê khai và thực hiện nghĩa vụ thuế của mình đối với nhà nước theo pháp
                  luật thuế nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
                </p>
                <h5 className="text-base font-bold mb-12">Li-xăng và quyền</h5>
                <p className="text-base mb-24">
                  Exxe và các bên cấp li-xăng cho Exxe (nếu có), khi được áp dụng, sẽ cấp cho Khách
                  hàng li-xăng có thể hủy ngang, không độc quyền, không thể chuyển nhượng, mang tính
                  cá nhân có giới hạn trong việc sử dụng ưng dụng Exxe vì mục đích sử dụng Dịch vụ
                  trên cơ sở Điều khoản sử dụng này. Tất cả các quyền không cấp cho Khách hàng một
                  cách cụ thể sẽ được bảo lưu bởi Exxe và các bên cấp li-xăng cho Exxe.
                </p>
                <p className="text-base mb-24">Khách hàng không được:</p>
                <p className="text-base mb-12">
                  – Cấp li-xăng, cấp lại li-xăng, bán, bán lại, chuyển giao, chuyển nhượng, phân
                  phối hoặc khai thác thương mại hoặc cung cấp cho bất kỳ bên thứ ba nào đối với ứng
                  dụng Exxe dưới bất kỳ hình thức nào.
                </p>
                <p className="text-base mb-12">
                  – Sửa đổi hoặc tạo ra sản phẩm phái sinh từ ứng dụng Exxe và/hoặc phần mềm liên
                  quan.
                </p>
                <p className="text-base mb-12">
                  – Tạo ra các “đường dẫn” Internet liên kết đến ứng dụng Exxe hoặc “làm nền tảng
                  cho” hay “nhân bản” bất kỳ phần mềm nào trên bất kỳ máy chủ hay thiết bị hoạt động
                  trên môi trường mạng Internet nào khác.
                </p>
                <p className="text-base mb-12">
                  – Đảo ngược thiết kế hoặc truy cập vào ứng dụng Exxe để:
                </p>
                <p className="text-base mb-24">
                  + Xây dựng một sản phẩm hoặc Dịch vụ cạnh tranh với Exxe
                </p>
                <p className="text-base mb-24">
                  + Xây dựng một sản phẩm sử dụng những ý tưởng, tính năng, chức năng hoặc đồ họa
                  tương tự như của ứng dụng Exxe hoặc
                </p>
                <p className="text-base mb-24">
                  + Sao chép bất kỳ ý tưởng, tính năng, chức năng hoặc đồ họa nào của ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  • – Khởi động một chương trình hoặc tập lệnh tự động, bao gồm nhưng không giới
                  hạn, nhện web, trình thu thập web, robot web, kiến web, trình tạo chỉ mục web,
                  chương trình tự động, virus, hoặc bất kỳ chương trình nào có thể đưa ra nhiều yêu
                  cầu đối với máy chủ của Exxe làm chậm hoặc cản trở hoạt động và/hoặc hiệu suất của
                  ứng dụng Exxe.
                </p>
                <p className="text-base mb-24">
                  • – Đăng tải, phân phối hoặc sao chép bằng bất kỳ phương cách nào đối với bất kỳ
                  tài liệu có bản quyền nào, tên thương mại, hay các thông tin sở hữu khác của Exxe
                  mà không có sự chấp thuận của Exxe.
                </p>
                <p className="text-base mb-24">
                  • – Gỡ bỏ bất kỳ thông báo về bản quyền, tên thương mại, hay các quyền sở hữu khác
                  trên trang thông tin điện tử, trên ứng dụng Exxe
                </p>
                <p className="text-base mb-24">
                  • – Khởi động một chương trình hoặc tập lệnh tự động, bao gồm nhưng không giới
                  hạn, nhện web, trình thu thập web, robot web, kiến web, trình tạo chỉ mục web,
                  chương trình tự động, virus, hoặc bất kỳ chương trình nào có thể đưa ra nhiều yêu
                  cầu đối với máy chủ của Exxe làm chậm hoặc cản trở hoạt động và/hoặc hiệu suất của
                  ứng dụng Exxe. • – Đăng tải, phân phối hoặc sao chép bằng bất kỳ phương cách nào
                  đối với bất kỳ tài liệu có bản quyền nào, tên thương mại, hay các thông tin sở hữu
                  khác của Exxe mà không có sự chấp thuận của Exxe. • – Gỡ bỏ bất kỳ thông báo về
                  bản quyền, tên thương mại, hay các quyền sở hữu khác trên trang thông tin điện tử,
                  trên ứng dụng Exxe
                </p>
                <p className="text-base mb-12">
                  – Gửi thư rác hoặc tin nhắn đồng loạt hoặc tin nhắn tự động.
                </p>
                <p className="text-base mb-12">
                  – Gửi hoặc lưu trữ tài liệu xâm phạm uy tín, danh dự của cá nhân, tổ chức khác.
                </p>
                <p className="text-base mb-12">
                  – Gửi hoặc lưu trữ tài liệu khiêu dâm, đe dọa, bôi nhọ, bao gồm, nhưng không giới
                  hạn, các tài liệu có hại cho trẻ em hoặc vi phạm quyền riêng tư của bên thứ ba.
                </p>
                <p className="text-base mb-12">
                  – Gửi tài liệu có chứa virus phần mềm, Trojan hoặc đoạn mã, các tập tin, tập lệnh,
                  gián điệp hoặc chương trình máy tính độc hại.
                </p>
                <p className="text-base mb-12">
                  – Gây cản trở hoặc phá vỡ tính toàn vẹn hoặc hiệu suất của ứng dụng Exxehoặc dữ
                  liệu chứa trong đó; hoặc cố gắng truy cập trái phép vào ứng dụng Exxe và/hoặc Phần
                  mềm; hoặc
                </p>
                <p className="text-base mb-12">
                  – Giả danh bất kỳ cá nhân hoặc tổ chức nào hoặc mô tả sai mối quan hệ của Khách
                  hàng với một cá nhân hoặc tổ chức để trốn tránh nghĩa vụ hoặc thực hiện các hành
                  vi có thể làm tổn hại quyền và lợi ích hợp pháp của Exxe và hoặc bên thứ ba.
                </p>
                <p className="text-base font-bold mb-12">Sở hữu trí tuệ</p>
                <p className="text-base mb-12">
                  Chỉ có Exxe và các bên cấp li-xăng cho Exxe (nếu có) có quyền sở hữu trí tuệ,
                  quyền liên quan đối với ứng dụng Exxe và/hoặc phần mềm hỗ trợ khác của ứng dụng
                  Exxe.
                </p>
                <p className="text-base mb-12">
                  Nội dung của Điều khoản sử dụng này không tạo nên một thỏa thuận mua bán, chuyển
                  nhượng/chuyển giao cho Khách hàng bất kỳ quyền sở hữu nào đối với hoặc liên quan
                  đến ứng dụng Exxe và/hoặc phần mềm hỗ trợ khác hoặc bất kỳ quyền sở hữu tài sản
                  trí tuệ nào thuộc sở hữu của Exxe.
                </p>
                <p className="text-base mb-12">
                  Nội dung của Điều khoản sử dụng này không tạo nên một thỏa thuận mua bán, chuyển
                  nhượng/chuyển giao cho Khách hàng bất kỳ quyền sở hữu nào đối với thương hiệu của
                  Công ty, logo của Công ty, logo của Dịch vụ, logo ứng dụng Exxevà logo của Nhà
                  cung cấp.
                </p>
                <p className="text-base font-bold mb-12">Bảo mật</p>
                <p className="text-base mb-24">
                  Là người sử dụng ứng dụng Exxe, Khách hàng phải bảo mật tất cả các thông tin và dữ
                  liệu liên quan đến Công ty, các dịch vụ, sản phẩm, công việc kinh doanh, kế hoạch
                  tiếp thị và quảng bá hoặc các hoạt động khác của Công ty và các công ty liên kết
                  của Công ty, cũng như các thông tin liên quan đến Đối tác cung cấp Dịch vụ thứ ba
                  hoặc dịch vụ của bên thứ ba mà đã được tiết lộ với Khách hàng bởi Công ty hoặc đại
                  diện của Công ty (bất kể bằng lời nói hay bằng văn bản, trước, tại hoặc sau ngày
                  của Điều khoản sử dụng này) hoặc đã được Khách hàng thu thập gián tiếp hay trực
                  tiếp, từ Công ty hoặc bất kỳ các công ty liên kết nào khác, hoặc đã được tạo ra
                  trong quá trình giao kết Điều khoản sử dụng này.
                </p>
                <p className="text-base mb-24">
                  Nghĩa vụ bảo mật nêu trên không áp dụng trong trường hợp sau:
                </p>
                <p className="text-base mb-24">
                  • Đã thuộc sở hữu của Khách hàng vào thời điểm tiếp nhận thông tin.
                </p>
                <p className="text-base mb-24">
                  • Là, hoặc trở thành trong tương lai, thông tin phổ cập mà không phải do lỗi hoặc
                  sai sót của chính Khách hàng.
                </p>
                <p className="text-base mb-24">
                  Đã được tiếp nhận từ một bên thứ ba có quyền tiết lộ chúng; hoặc phải tiết lộ theo
                  quy định pháp luật.
                </p>
                <p className="text-base font-bold mb-12">Phí</p>
                <p className="text-base mb-24">
                  Khách hàng sẽ chịu trách nhiệm đối với các chi phí sửa chữa hoặc chi phí vệ sinh
                  làm sạch cho Phương tiện vận tải của Công ty, của Nhà cung cấp (Đơn vị vận tải,
                  Lái xe) khi Khách hàng sử dụng Dịch vụ một cách không phù hợp hoặc vi phạm các quy
                  định trong Điều khoản sử dụng này. Công ty bảo lưu quyền thu các chi phí hợp lý
                  của việc sửa chữa hoặc chi phí vệ sinh làm sạch Phương tiện này; có thể thay mặt
                  cho Nhà cung cấp thông qua các phương thức thanh toán mà Khách hàng chỉ định hoặc
                  yêu cầu Khách hàng phải thanh toán tiền mặt trong trường hợp yêu cầu sửa chữa hoặc
                  vệ sinh Phương tiện của Nhà cung cấp đã được xác thực bởi Công ty.
                </p>
                <p className="text-base mb-24">
                  Công ty được quyền thu phí sử dụng ứng dụng{" "}
                  <span className="font-bold">Exxe</span> từ Khách hàng là người sử dụng ứng dụng{" "}
                  <span className="font-bold">Exxe</span> và/hoặc phần mềm hỗ trợ khác để đặt dịch
                  vụ vận tải. Chính sách về phí sử dụng dịch vụ (nếu có áp dụng) có thể được miễn,
                  giảm hoặc thay đổi tùy từng giai đoạn, có thể được công khai tại trang thông tin
                  điện tử của Công ty và/hoặc thông qua ứng dụng{" "}
                  <span className="font-bold">Exxe</span>.
                </p>
                <p className="text-base font-bold mb-12">Miễn trừ trách nhiệm</p>
                <p className="text-base mb-24">
                  Công ty không đưa ra bất kỳ cam đoan, bảo đảm hoặc phát sinh bất kỳ một trách
                  nhiệm nào đối với độ tin cậy, sự đúng hạn, kịp thời, chất lượng, sự phù hợp, tính
                  sẵn có, tính chính xác hoặc hoàn thiện của Dịch vụ cung cấp trên Sàn TMĐT Exxe,
                  và/hoặc về chế độ ưu đãi/quà tặng. Công ty không bảo đảm chắc chắn rằng:
                </p>
                <p className="text-base mb-12">
                  • Ứng dụng Exxe, phần mềm hỗ trợ liên quan sẽ hoàn toàn không có lỗi hoặc khiếm
                  khuyết.
                </p>
                <p className="text-base mb-12">
                  • Chất lượng của bất kỳ sản phẩm, dịch vụ, thông tin, quà tặng, ưu đãi mà Khách
                  hàng mua hoặc có được thông qua ứng dụng Exxe sẽ đáp ứng hoàn toàn các yêu cầu
                  hoặc mong đợi của Khách hàng.
                </p>
                <p className="text-base mb-12">
                  • Dịch vụ, ứng dụng Exxe sẽ hoàn toàn đạt yêu cầu hoặc mong đợi của Khách hàng.
                </p>
                <p className="text-base mb-12">
                  • Ứng dụng Exxe và/hoặc (các) máy chủ mà ứng dụng Exxehoạt động sẽ không có virus
                  hoặc các thành phần có hại khác.
                </p>
                <p className="text-base mb-24">
                  • Việc sử dụng Dịch vụ trên Sàn TMĐT Exxe, ứng dụng Exxevà/hoặc phần mềm hỗ trợ
                  khác sẽ được an toàn, kịp thời, không bị gián đoạn hoặc không có lỗi hoặc có thể
                  vận hành kết hợp với bất kỳ phần cứng, phần mềm, hệ thống hoặc dữ liệu nào khác.
                </p>
                <p className="text-base mb-24">
                  Công ty sẽ được miễn trừ trách nhiệm trong các trường hợp sau: Các tổn thất có thể
                  gây ra cho Khách hàng do không thể truy cập, sử dụng ứng dụng Exxevì các lý do:
                  Không thể truy cập, sử dụng ứng dụng vì lý do lỗi kết nối mạng Internet. Lỗi phần
                  cứng hoặc phần mềm ngoài tầm kiểm soát của Công ty. Các tổn thất do lỗi mạng
                  Internet, lỗi máy móc, hay lỗi khi bảo trì hệ thống. Khách hàng thừa nhận và đồng
                  ý rằng toàn bộ rủi ro phát sinh từ việc sử dụng dịch vụ, ưu đãi và bất kỳ dịch vụ
                  của bên thứ ba nào, bao gồm, nhưng không giới hạn, các dịch vụ vận tải và/hoặc ưu
                  đãi của bên thứ ba là hoàn toàn thuộc về chính Khách hàng và Khách hàng sẽ không
                  kiện đòi Công ty dưới bất kỳ hình thức nào.
                </p>
                <p className="text-base font-bold mb-12">Lỗi Internet</p>
                <p className="text-base mb-24">
                  Dịch vụ được cung cấp trên Sàn TMĐT <span className="font-bold">Exxe</span>, ứng
                  dụng <span className="font-bold">Exxe</span> có thể có những hạn chế, chậm trễ, và
                  các vấn đề khác xuất phát từ việc sử dụng internet và thông tin liên lạc theo
                  phương thức điện tử bao gồm việc thiết bị bạn sử dụng hoặc nhà cung cấp dịch vụ
                  bên thứ ba sử dụng bị lỗi, không có kết nối, nằm ngoài miền phủ sóng, bị tắt nguồn
                  hoặc không hoạt động. Công ty sẽ được miễn trừ hoàn toàn trách nhiệm đối với các
                  thiệt hại hay tổn thất phát sinh từ những vấn đề này.
                </p>
                <p className="text-base font-bold mb-12">Giới hạn</p>
                <p className="text-base mb-24">
                  Bất kỳ yêu cầu bồi thường nào của Khách hàng đối với Công ty trong bất kỳ trường
                  hợp nào sẽ chỉ giới hạn đối với tổng của tất cả các khoản đã được Khách hàng chi
                  trả và/hoặc Khách hàng sẽ trả cho việc sử dụng Dịch vụ giới hạn trong sự kiện dẫn
                  tới các yêu cầu bồi thường đó.
                </p>
                <p className="text-base font-bold mb-12">Thông báo</p>
                <p className="text-base mb-24">
                  Công ty có thể gửi thông báo dưới dạng một thông báo chung trên trang thông tin
                  điện tử, trên ứng dụng Exxe, qua thư điện tử đến địa chỉ thư điện tử của Khách
                  hàng có trong hồ sơ của Công ty, hoặc bằng văn bản gửi bằng thư đảm bảo hoặc thư
                  trả trước đến địa chỉ của Khách hàng lưu trong dữ liệu của Công ty.
                </p>
                <p className="text-base mb-24">
                  Thông báo của Công ty sẽ được coi là đã gửi tới Khách hàng sau 48 giờ kể từ lúc
                  gửi bưu điện (nếu được gửi bằng thư bảo đảm hoặc thư trả trước) hoặc sau 01 giờ
                  sau khi đã gửi (nếu gửi bằng thư điện tử).
                </p>
                <p className="text-base mb-24">
                  Khách có thể gửi thông báo cho Công ty bằng thư gửi qua đường bưu điện hoặc thư
                  bảo đảm tới địa chỉ Công ty theo thông tin liên hệ như được cung cấp trên website
                  hoặc ứng dụng Exxe. Thời điểm thông báo này có hiệu lực là kể từ thời điểm Công ty
                  nhận được thông báo.
                </p>
                <p className="text-base font-bold mb-12">Chuyển giao</p>
                <p className="text-base mb-24">
                  Khách hàng không được chuyển giao quyền, nghĩa vụ của mình phát sinh theo Điều
                  khoản sử dụng này nếu không có sự chấp thuận trước bằng văn bản của Công ty. Bất
                  kỳ hành động cố ý chuyển giao quyền, nghĩa vụ của mình phát sinh theo Điều khoản
                  sử dụng này của Khách hàng vi phạm mục này sẽ bị coi là vô hiệu. Công ty có thể
                  chuyển giao quyền, nghĩa vụ của mình phát sinh theo Điều khoản sử dụng này mà
                  không cần sự chấp thuận của Khách hàng.
                </p>
                <p className="text-base font-bold mb-12">Hiệu lực</p>
                <p className="text-base mb-24">
                  Bản Điều khoản sử dụng này được diễn giải và chịu điều chỉnh bởi pháp luật Việt
                  Nam.
                </p>
                <p className="text-base mb-24">
                  Bất kỳ tranh chấp, hành động, khiếu nại hay lý do khởi kiện xuất phát từ hay liên
                  quan đến Điều khoản sử dụng hoặc Dịch vụ sẽ hoàn toàn thuộc quyền xét xử của tòa
                  án có thẩm quyền của Việt Nam.
                </p>
                <p className="text-base mb-24">
                  Trong trường hợp phán quyết của Tòa án có thẩm quyền của Việt Nam không thể được
                  thi hành tại Quốc gia Thay thế, các tranh chấp chưa được giải quyết sẽ được chuyển
                  tới Trung tâm Trọng tài Quốc tế Việt Nam (“VIAC”), phù hợp với các Nguyên tắc Tố
                  tụng Trọng tài của VIAC được sửa đổi, bổ sung tại từng thời điểm (“Các Nguyên tắc
                  Tố tụng Trọng tài”) bởi một trọng tài do Các Bên cùng thống nhất chỉ định (“Trọng
                  tài”). Nếu Các Bên không thể thống nhất về một trọng tài, Chủ tịch của VIAC sẽ chỉ
                  định Trọng tài theo đúng Các Nguyên tắc Tố tụng Trọng tài. Địa điểm tố tụng trọng
                  tài là Việt Nam, ngôn ngữ trọng tài bằng tiếng Việt và phí Trọng tài sẽ được chia
                  đều cho Các Bên, trừ khi Trọng tài yêu cầu phí này được chi trả theo cách khác mà
                  Trọng tài xác định là cần thiết để điều khoản trọng tài này có thể được thi hành
                  theo pháp luật áp dụng.
                </p>
                <p className="text-base mb-24">
                  Không có bất kỳ quan hệ liên doanh, hợp tác, thỏa thuận lao động, hay quan hệ đại
                  lý nào tồn tại giữa Khách hàng với Công ty hay bất kỳ bên cung cấp thứ ba nào được
                  xác lập từ Điều khoản sử dụng này hay từ việc sử dụng Dịch vụ trừ trường hợp các
                  bên có thỏa thuận khác bằng văn bản.
                </p>
                <p className="text-base mb-24">
                  Nếu bất kỳ nội dung nào của Điều khoản sử dụng này bị coi là không hợp lệ hoặc
                  không thể thi hành, thì điều khoản đó sẽ bị xóa bỏ và các điều khoản còn lại sẽ
                  được thi hành đến mức tối đa theo luật pháp; những nội dung chưa được quy định tại
                  Điều khoản sử dụng này thì áp dụng theo quy định pháp luật hiện hành của Nước Cộng
                  hòa Xã hội Chủ nghĩa Việt Nam.
                </p>
                <p className="text-base mb-24">
                  Khách hàng chấp thuận rằng Công ty có quyền (nhưng không có nghĩa vụ) chấm dứt
                  cung cấp Dịch vụ ngay lập tức trong trường hợp Khách hàng bị phát hiện đã vi phạm
                  bất kỳ nội dung nào của Điều khoản sử dụng này. Công ty sẽ không phải bồi thường,
                  bồi hoàn hoặc chi trả bất kỳ phí tổn nào mà Khách hàng phải chịu do việc chấm dứt
                  cung cấp Dịch vụ này.
                </p>
                <p className="text-base mb-24">5/. Các câu hỏi thường gặp:</p>
                <p className="text-center underline mb-12">
                  • Tôi không thể sử dụng mã khuyến mãi?
                </p>
                <p className="text-base mb-12">
                  Mã khuyến mãi hợp lệ sẽ được tự động áp dụng trên ứng dụng Exxe khi bạn đặt xe.
                  Bấm vào phần “Khuyến mãi” để xem danh sách các khuyến mãi hiện có từ Exxe. Giá trị
                  của mã khuyến mãi chỉ áp dụng cho cước phí của một chuyến đi và số tiền còn thừa
                  sẽ không còn giá trị.
                </p>
                <p className="text-base mb-12">
                  Nếu mã khuyến mãi đã được nhập thành công, bạn sẽ thấy dấu xác nhận màu xanh lá
                  hiện ra ngay bên cạnh mã khuyến mãi và giá cước được thể hiện đã giảm giá.
                </p>
                <p className="text-base mb-24">
                  Nếu mã khuyến mãi vẫn không sử dụng được, hãy gửi màn hình thông báo lỗi đến chúng
                  tôi để được hỗ trợ kiểm tra.
                </p>
                <p className="text-center underline mb-12">• Làm thế nào để tạo tài khoản Exxe?</p>
                <p className="text-base mb-12">
                  Bạn cần có địa chỉ email và số điện thoại hợp lệ để tạo tài khoản Exxe. Sau khi
                  nhập số điện thoại, hệ thống sẽ gửi đến bạn một mã OTP thông qua tin nhắn SMS với
                  số điện thoại mà bạn vừa nhập.
                </p>
                <p className="text-base mb-12">
                  Nhập mã OTP và điền họ tên, email của bạn để hoàn tất đăng ký tài khoản với Exxe.
                  Sau khi điền đầy đủ thông tin, bạn đã có thể sử dụng ứng dụng Exxe để yêu cầu xe.
                </p>
                <p className="text-center underline mb-12">
                  • Tôi muốn thêm/ thay đổi phương thức thanh toán?
                </p>
                <p className="text-base mb-24">
                  Quý khách có thể thanh toán cho chuyến đi bằng tiền mặt cũng như thêm các phương
                  thức thanh toán khác. Hiện tại, Exxe hỗ trợ các khách hàng cá nhân thanh toán bằng
                  2 hình thức: Tiền mặt và Thẻ.
                </p>

                <p className="text-center underline mb-12">
                  • Tôi muốn thêm/ thay đổi phương thức thanh toán?
                </p>
                <p className="text-base mb-12">Chọn "Thanh toán" từ menu ứng dụng.</p>
                <p className="text-base mb-12">Nhấn Thêm thanh toán.</p>
                <p className="text-base mb-24">
                  Thêm phương thức thanh toán bằng cách nhập thủ công thông tin thẻ hoặc thêm một
                  loại thanh toán thay thế.
                </p>

                <p className="text-center underline mb-12">
                  • Làm thế nào để gửi hỗ trợ cho chuyến đi của tôi?
                </p>
                <p className="text-base mb-24">
                  {" "}
                  Quý khách vui lòng nhấp vào mục Trợ Giúp từ menu chính bên phía trái màn hình ứng
                  dụng để tìm giải pháp cho vấn đề gặp phải hoặc gửi yêu cầu hỗ trợ đến đội ngũ hỗ
                  trợ của Exxe. Để Exxe có thể hỗ trợ nhanh chóng, xin lưu ý một số điều khi gửi yêu
                  cầu hỗ trợ: Kiểm tra biên nhận chuyến xe để xác nhận lại cước phí. Chọn đúng
                  chuyến xe từ Lịch sử chuyến đi nếu cần hỗ trợ các vấn đề liên quan đến chuyến xe.
                  Exxe có thể yêu cầu thêm thông tin và hình ảnh sự cố hoặc hình ảnh báo lỗi trên
                  màn hình ứng dụng, hãy đảm bảo cung cấp hình ảnh liên quan. Mô tả vấn đề gặp phải
                  cụ thể và rõ ràng.
                </p>

                <p className="text-center underline mb-12">
                  • Cước phí chuyến đi sau khi đổi điểm đến được tính như thế nào?
                </p>
                <p className="text-base mb-12">Cước phí mới của chuyến đi sẽ được tính dựa trên:</p>
                <p className="text-base mb-12">- Quãng đường bạn đã đi</p>
                <p className="text-base mb-12">
                  - Khoảng cách từ vị trí bạn chọn đổi điếm đến tới điểm đến mới
                </p>
                <p className="text-base mb-12">
                  - Phụ phí cao điểm (nếu có) tại thời điểm bạn đặt xe
                </p>
                <p className="text-base mb-24">
                  - Phí dịch vụ khi đổi điểm đến (nếu có). Hiện tại, Exxe không thu phụ phí này.
                </p>

                <p className="text-center underline mb-12">
                  • Khuyến mãi có được áp dụng cho chuyến đi đổi điểm đến?
                </p>
                <p className="text-base mb-12">
                  Khuyến mãi vẫn được áp dụng cho chuyến đi đổi điểm đến. Nếu lộ trình ban đầu của
                  bạn đã được áp dụng khuyến mãi và lộ trình mới sau khi đổi điểm đến cũng thoả điều
                  kiện để áp dụng cùng khuyến mãi đó, Exxe sẽ giữ khuyến mãi này cho bạn. Nếu không,
                  Exxe sẽ tự động áp dụng cho bạn khuyến mãi phù hợp với lộ trình mới (nếu có), kể
                  cả khi lộ trình ban đầu không được áp dụng khuyến mãi.
                </p>

                <p className="text-center underline mb-12">
                  • Tại sao tôi không đổi điểm đến được?
                </p>
                <p className="text-base mb-12">Các trường hợp không được đổi điểm đến:</p>
                <p className="text-base mb-12">
                  - Lộ trình mới của bạn ngoài phạm vi của chuyến đi nội thành.
                </p>
                <p className="text-base mb-12">
                  - Phương thức thanh toán đang áp dụng cho chuyến đi của bạn không được hỗ trợ đổi
                  điểm đến. (Hiện tại, các phương thức thanh toán được hỗ trợ là Tiền mặt, Thẻ, Tài
                  khoản Doanh nghiệp)
                </p>
                <p className="text-base mb-12">
                  - Cước phí chuyến đi đổi điểm đến vượt quá giới hạn thanh toán bằng thẻ. (Hiện
                  tại, giới hạn này là 500.000đ)
                </p>
                <p className="text-base mb-24">
                  - Số dư trong tài khoản đang sử dụng để thanh toán cho chuyến đi không đủ để trả
                  cước phí chuyến đi sau khi đổi điểm đến.
                </p>

                <p className="text-base mb-12 underline text-center">
                  • Tôi cần xuất hóa đơn giá trị gia tăng đối với các chuyến xe Exxe tôi phải làm
                  thế nào?
                </p>
                <p className="mb-24 text-base">
                  Khi có nhu cầu xuất Hóa đơn giá trị gia tăng (GTGT) cho các chuyến xe Exxe, Quý
                  Khách có thể lựa chọn Tôi cần xuất hóa đơn ở phần Tùy chọn thêm của mỗi chuyến xe.
                  Hóa đơn được xuất khi có yêu cầu của khách hàng cho các dịch vụ với tất cả các
                  hình thức thanh toán (trừ thanh toán bằng tài khoản Công ty sẽ nhận hóa đơn GTGT
                  vào cuối tháng). Hóa đơn GTGT được xuất từ Exxe là hoá đơn điện tử đã đăng ký sử
                  dụng và được chấp thuận bởi cơ quan thuế. Exxe gửi hóa đơn GTGT theo mẫu 01/GTKT
                  cho giá trị chuyến xe, được thể hiện trên một hóa đơn duy nhất qua địa chỉ email
                  đã được đăng ký. Để biết thêm thông tin và một số lưu ý khi xuất hóa đơn giá trị
                  gia tăng, vui lòng xem thêm tại{" "}
                  <a
                    href="http://www.Exxe.vn"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary"
                  >
                    http://www.Exxe.vn
                  </a>
                </p>

                <p className="text-base mb-12">
                  KHÁCH HÀNG DOANH NGHIỆP ( note: cần 1 cái tên cho ứng dụng doanh nghiệp Ex: Exxe
                  Corporate )
                </p>
                <p className="text-base mb-12">• Exxe Corporate là gì?</p>
                <p className="text-base mb-12">
                  EXXE Corporate là gói sản phẩm dành riêng cho các doanh nghiệp tùy theo nhu cầu sử
                  dụng và quản trị việc đi lại, công tác của nhân viên doanh nghiệp.
                </p>
                <p className="text-base mb-12">• Sử dụng Exxe Corporate có tính phí không?</p>
                <p className="text-base mb-12">
                  Khi hợp tác với Exxe doanh nghiệp không cần chi trả thêm khoản chi phí phát sinh
                  nào mà ngược lại, doanh nghiệp có thể được hưởng chiết khấu trên giá cước căn cứ
                  vào giá trị sử dụng hàng tháng của doanh nghiệp.
                </p>
                <p className="text-base mb-24">• Tôi muốn đăng ký Exxe Corporate</p>

                <div className="mb-12 text-base">
                  Quý khách hàng Doanh nghiệp có thể đăng ký tại http://www.Exxe.vn hoặc liên hệ
                  tổng đài hỗ trợ của EXXE : <a href="tel:0847878788">0847878788</a>
                </div>
                <div className="mb-12 text-base">• Cách quản lý tài khoản của nhân viên?</div>
                <div className="mb-12 text-base">
                  Khi ký hợp đồng với Exxe Corporate, người phụ trách của doanh nghiệp sẽ được cấp
                  một tài khoản truy cập vào Cổng quản lý Doanh nghiệp của Exxe, trong đó có thể cài
                  đặt các tài khoản của nhân viên theo yêu cầu (hạn mức, thời gian, bán kính sử dụng
                  cho phép), và sau đó quản lý lịch sử các chuyến đi. Trên Cổng quản lý, người phụ
                  trách của Doanh Nghiệp có thể truy xuất các báo cáo sử dụng theo phòng ban, theo
                  nhóm hoặc theo từng nhân viên.
                </div>
                <div className="mb-12 text-base">
                  Exxe Loyalty ( cần 1 tên chương trình khác là chương trình khách hàng thân thiết )
                </div>
                <div className="mb-12 text-base">• Chương trình Exxe Loyalty là gì?</div>
                <div className="mb-12 text-base">
                  Exxe Loyalty là chương trình khách hàng thân thiết áp dụng cho tất cả khách hàng
                  sử dụng dịch vụ trên ứng dụng Exxe. Tôi cần làm gì để tham gia chương trình EXXE
                  Loyalty?
                </div>
                <div className="mb-12 text-base">
                  Bạn sẽ tự động trở thành thành viên của chương trình EXXE Loyalty khi sử dụng một
                  trong các dịch vụ. Có 5 hạng thành viên (bao gồm Thành Viên, Bạc, Vàng, Bạch Kim
                  và Kim Cương). Bạn có thể đạt được các hạng thành viên khi tích lũy đủ số điểm
                  thưởng EXXE Point theo quy định của từng hạng. ( có thể sắp xếp lại số lượng và
                  tên các thứ hạng của thành viên )
                </div>
                <div className="mb-12 text-base">• Điểm thưởng Exxe Point là gì?</div>
                <div className="mb-12 text-base">
                  Điểm thưởng Exxe Point là đơn vị tích lũy được khi bạn sử dụng dịch vụ trên ứng
                  dụng Exxe .
                </div>
                <div className="mb-12 text-base">
                  • Điểm thưởng Exxe Point có hết hạn không? ( có thể quy định lại )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Conditions.Layout = GuestLayout
export default Conditions
