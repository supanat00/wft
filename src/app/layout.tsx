import './globals.css'
import { Inter } from 'next/font/google'

import {Providers} from "@/components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Work Faster',
  description: 'Generated AI Create texts to image',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <Providers>
          <header >          
          </header>
              {children}
          </Providers>
        </body>
      </html>
    )
}
