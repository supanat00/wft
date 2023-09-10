'use client'

import './globals.css'


import NavbarMain from '@/components/(root)/navbarRoot';
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
    <Providers>
      < NavbarMain />
      {children}
    </Providers>
    )
}
