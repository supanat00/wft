import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import NavbarMain from '@/components/(auth)/navbarAuth';
import {Providers} from "@/components/providers";

export const metadata = {
  title: 'Work Faster',
  description: 'Generated AI create Texts to Image',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
          <Providers>
            <NavbarMain />   
              {children}
          </Providers>
    </ClerkProvider> 
    )
}
