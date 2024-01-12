import type { Metadata } from 'next'
import './globals.scss'
import { cookies } from 'next/headers'
import Header from '@/components/Header'
import classNames from 'classnames/bind'
import Style from './page.module.scss'

export const metadata: Metadata = {
  title: 'Blog',
  description: '기록을 저장하는 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value ?? "dark"
  const cx = classNames.bind(Style)
  return (
    <html lang="kr">
      <body data-theme={theme} >
        <Header theme={theme} />
        <main className={cx("main-wrap")}>

          {children}
        </main>
      </body>
    </html>
  )
}
