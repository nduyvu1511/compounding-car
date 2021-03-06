import { ArrowDownIcon } from "@/assets"
import { toImageUrl } from "@/helper"
import { useAuth } from "@/hooks"
import { SidebarItem } from "@/models"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

interface AccountSidebarProps {
  navList: SidebarItem[]
  avatar: string
  name: string
  phone: string
}

const AccountSidebar = ({ navList, avatar, name, phone }: AccountSidebarProps) => {
  const router = useRouter()
  const { logout } = useAuth()

  return (
    <div className="">
      <div className="flex items-center py-[14px] mb-[14px] border-b border-solid border-border-color">
        <div className="relative w-[32px] h-[32px] overflow-hidden rounded-[50%] mr-[12px]">
          <Image src={toImageUrl(avatar)} layout="fill" alt="" objectFit="cover" />
        </div>
        <div className="flex-1">
          <p className="text-14 font-medium leading-26 mb-[4px] line-clamp-1 word-wrap-anywhere">
            {name}
          </p>
          <p className="text-12 leading-[16px]">{phone}</p>
        </div>
      </div>

      <ul className="">
        {navList.map(({ icon, label, path, child }, index) => (
          <li
            onClick={() => router.push(path)}
            className={`mb-12 last:mb-0 ${
              child ? "relative" : ""
            } hover:bg-gray-color-1 rounded-[5px]`}
            key={index}
          >
            <div
              className={`flex items-center py-[8px] px-[12px] cursor-pointer ${
                path === router.pathname ? "bg-primary rounded-[5px] text-white-color" : ""
              }`}
            >
              <span className="text-24">{icon}</span>
              <span className={`text-14 ml-[12px] font-medium flex-1 line-clamp-1 leading-26`}>
                {label}
              </span>
            </div>
          </li>
        ))}

        <li className={`last:mb-0 mt-[12px] border-t border-solid border-border-color`}>
          <button
            onClick={() =>
              logout(() => {
                router.push("/")
              })
            }
            className="py-[8px] w-full text-left px-[12px] leading-26 cursor-pointer text-error text-14 font-medium"
          >
            ????ng xu???t
          </button>
        </li>
      </ul>
    </div>
  )
}

export { AccountSidebar }
