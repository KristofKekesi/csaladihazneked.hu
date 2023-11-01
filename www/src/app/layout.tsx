import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/app/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Családiház tervezés',
  description: 'todo',
}

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="a -translate-y-6 bg-white rounded-3xl pt-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
