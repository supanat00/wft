import './globals.css'

export const metadata = {
  title: 'Work Faster - Welcome',
  description: 'AI Generated by TKO.Bro',
}

export default function DefaultLayout({
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
