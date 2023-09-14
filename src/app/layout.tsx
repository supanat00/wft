import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import {Providers} from "@/components/providers";
import NavbarMain from "@/components/ui/navbarMain"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Work Faster - Welcome',
  description: 'AI Generated by TKO.Bro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>       
         <ClerkProvider> 
          <Providers>          
            < NavbarMain />
              {children}            
              <Analytics />
          </Providers>
         </ClerkProvider>
        </body>
      </html>      
    )
}
