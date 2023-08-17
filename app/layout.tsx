import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DawaDuniya- Aapki Sehat ki Duniya Ka Sathi',
  description: 'Aapki Sehat ki Duniya Ka Sathi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        <Navbar/>
        <ToastProvider/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
