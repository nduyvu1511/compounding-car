import { SpinnerLoading } from "@/components"
import { AppDispatch, RootState } from "@/core"
import { useAuth } from "@/hooks"
import {
  fetchProvinces,
  fetchVehicles,
  setMessageUnreadCount,
  setProfile,
  setSocketInstance,
} from "@/modules"
import { chatApi } from "@/services"
import "moment/locale/vi"
import { ReactNode, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import NotificationsSystem, { atalhoTheme, dismissNotification, setUpNotifications } from "reapop"
import { io } from "socket.io-client"

const App = ({ children }: { children: ReactNode }) => {
  const { getUserInfo } = useAuth()
  const dispatch = useDispatch<AppDispatch>()
  const notifications = useSelector((state: RootState) => state.notifications)
  const provinces = useSelector((state: RootState) => state.compoundingCarData.provinces)
  const vehicleTypes = useSelector((state: RootState) => state.compoundingCarData.vehicleTypes)

  const connectSocket = () => {
    const socket = io(process.env.NEXT_PUBLIC_CHAT_SOCKET_URL as string, {
      query: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFkNTZjNTRhMjBiZWY4MmU0NzlmMGQiLCJ1c2VyX2lkIjoyLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NjI5MDEzNTl9.7YgTIRjbTGsmUSEfz3RwHl0UdTgv6f9loNJ4Zmz_3nQ",
      },
    })

    socket.emit("login")
    socket.on("connect", () => {
      dispatch(setSocketInstance(socket))
    })
  }

  useEffect(() => {
    getUserInfo((userInfo) => {
      dispatch(setProfile(userInfo))
    })

    connectSocket()

    chatApi
      .getMessageUnreadCount()
      .then((res) => {
        dispatch(setMessageUnreadCount(res.data.message_unread_count))
      })
      .catch((err) => {})

    setUpNotifications({
      defaultProps: {
        position: "top-center",
        dismissible: true,
        dismissAfter: 3000,
        status: "success",
      },
    })

    if (!provinces?.[0]?.province_id) {
      dispatch(fetchProvinces() as any)
    }

    if (!vehicleTypes?.[0]?.value) {
      dispatch(fetchVehicles() as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
      <SpinnerLoading />
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dispatch(dismissNotification(id))}
        theme={atalhoTheme}
      />
    </>
  )
}

export { App }
