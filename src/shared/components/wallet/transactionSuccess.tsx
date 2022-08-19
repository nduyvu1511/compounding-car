import { formatMoneyVND, PAYMENT_PURPOSE_NAME } from "@/helper"
import { JournalDetailRes } from "@/models"
import moment from "moment"

interface TransactionSuccessProps {
  transaction: JournalDetailRes
}

export const TransactionSuccess = ({ transaction }: TransactionSuccessProps) => {
  return (
    <div className="w-full">
      <ul>
        <li className="flex justify-between items-center mb-12">
          <p className="text-xs">Loại giao dịch</p>
          <p className="flex-1 text-right text-sm md:text-base">
            {PAYMENT_PURPOSE_NAME[transaction.payment_purpose]}
          </p>
        </li>
        <li className="flex justify-between items-center mb-12">
          <p className="text-xs">Thời gian thanh toán</p>
          <p className="flex-1 text-right text-sm md:text-base">
            {moment(transaction.payment_id.date).format("DD/MM/YYYY")}
          </p>
        </li>
        <li className="flex justify-between items-center mb-12">
          <p className="text-xs">Nguồn tiền</p>
          <p className="flex-1 text-right text-sm md:text-base">Nguồn tiền</p>
        </li>
        <li className="flex justify-between items-center mb-12">
          <p className="text-base font-semibold">Số tiền giao dịch</p>
          <p className="flex-1 text-right text-base text-blue-7 font-semibold">
            {formatMoneyVND(transaction.payment_id.amount)}
          </p>
        </li>
      </ul>
    </div>
  )
}
