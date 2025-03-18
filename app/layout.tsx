import { Metadata } from "next";
import './globals.css'
import {Josefin_Sans} from 'next/font/google';
import { cn } from "./_utils/cn";
const josefin = Josefin_Sans({
  subsets:['latin'],
  display:'swap'
})

export const metadata: Metadata = {
  title: 'The Wild Oasis',
  description: 'Discover and book the most luxurious hotels worldwide, offering unparalleled comfort, elegance, and top-tier hospitality.',

};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={cn('bg-primary-950 text-primary-100 min-h-screen', josefin.className)}>
        {children}
      </body>
    </html>
  )
}