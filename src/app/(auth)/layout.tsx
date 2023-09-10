import './globals.css'

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
        <main>
            {children}
        </main>
    )
}
