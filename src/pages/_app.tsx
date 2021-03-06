import { App, EmptyLayout } from "@/layout"
import { AppPropsWithLayout } from "@/models"
import { persistor, store } from "core"
import Head from "next/head"
import { Provider } from "react-redux"
import { NotificationsProvider } from "reapop"
import { PersistGate } from "redux-persist/integration/react"
import { SWRConfig } from "swr"
import "../styles/index.scss"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SWRConfig value={{ revalidateOnFocus: false, shouldRetryOnError: false }}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <App>
            <Layout>
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </Layout>
          </App>
        </SWRConfig>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
