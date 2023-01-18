import '@styles/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
import cx from 'classnames'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import { Provider as RWBProvider } from 'react-wrap-balancer'
import * as CookieConsent from 'vanilla-cookieconsent'

const sfPro = localFont({
  src: '../styles/SF-Pro-Display-Medium.otf',
  variable: '--font-sf'
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
  useEffect(() => {
    CookieConsent.run({
      page_scripts: true
    })
  }, [])

  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <main className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </main>
      </RWBProvider>
    </SessionProvider>
  )
}
