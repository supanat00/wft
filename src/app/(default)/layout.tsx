'use client'

import './globals.css'

export const metadata = {
  title: 'Work Faster - Dashboard',
  description: 'Generated AI Create texts to image',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <main className="px-6 flex gap-4 flex-col pb-16 flex-grow">
            {children}
        </main>
    )
}
