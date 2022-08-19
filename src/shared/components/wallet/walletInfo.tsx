import { formatMoneyVND } from "@/helper"
import { JournalRes } from "@/models"
import { useMemo } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

interface WalletInfoProps {
  data: JournalRes[]
}

export const WalletInfo = ({ data }: WalletInfoProps) => {
  const totalMoney: number = useMemo(() => {
    return data?.reduce((a, b) => a + b.remains_amount, 0) || 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className="flex-row flex items-stretch">
      <div className="w-[140px xs: w-[160px] sm:w-[200px] mr-24 md:mr-[40px] relative flex-center">
        <CircularProgressbar
          styles={buildStyles({ pathColor: "#2E41B6", trailColor: "#D7D7D7" })}
          value={((data?.[1]?.remains_amount || 0) / totalMoney) * 100}
          strokeWidth={5}
        />
        <div className="absolute z-10 flex-col flex-center">
          <p className="text-xs mb-4">Tổng</p>
          <p className="text-sm font-semibold">{formatMoneyVND(totalMoney)}</p>
        </div>
      </div>

      <div className="flex-1 lg:flex-auto my-auto">
        <div className="">
          <p className="flex items-center mb-8">
            <span className="w-[10px] h-[10px] rounded-[50%] bg-border-color-2 mr-8"></span>
            <span className="text-xs whitespace-nowrap">Tổng số tiền</span>
          </p>
          <p className="text-base font-semibold">{formatMoneyVND(data[0].remains_amount)}</p>
        </div>

        {data?.[1] ? (
          <div className="mt-24 md:mt-[40px]">
            <p className="flex items-center mb-8">
              <span className="w-[10px] h-[10px] rounded-[50%] bg-primary mr-8"></span>
              <span className="text-xs whitespace-nowrap">Số tiền khả dụng</span>
            </p>
            <p className="text-base font-semibold text-primary">
              {formatMoneyVND(data[1].remains_amount)}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
