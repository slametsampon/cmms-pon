import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import { SessionProvider, useSession } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function Auth({ children }) {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required')
    },
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return children
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {/**isDevelopment && isSocket && <ClientReload />*/}
        {/**<Analytics />*/}
        <LayoutWrapper>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </LayoutWrapper>
      </ThemeProvider>
    </SessionProvider>
  )
}
