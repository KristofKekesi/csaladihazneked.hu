import type { Metadata, Viewport } from 'next'
import "@/app/globals.css"

import { GeistSans } from 'geist/font'

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';


export const metadata: Metadata = {
  title: 'Családiház tervezés',
  description: 'todo'
}


export const viewport: Viewport = {
  themeColor: "#BABEAE"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} max-w-full`}>
        <Header />
        <main className="-translate-y-6 pt-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
