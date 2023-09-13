import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import {Providers} from "@/components/providers";
import NavbarMain from "@/components/ui/navbarMain"
import { Analytics } from '@vercel/analytics/react';

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
    <ClerkProvider> 
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>        
          <Providers>
          
          < NavbarMain />
            {children}            
            <Analytics />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
    )
}
