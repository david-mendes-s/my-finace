import './globals.css'
import { Inter, Mulish } from 'next/font/google'


const mulish = Mulish({subsets: ['latin'], weight:['400', '500', '700', '800', '900']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
