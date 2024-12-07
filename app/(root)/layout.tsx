
import Footer1 from '../components0/Footer1'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '../Context/authProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdvertConnectPro',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body >
         <AuthProvider>
          {children}
         </AuthProvider>
        </body>  
    </html>
  )
}

