import { Metadata } from "next";
import './globals.css'
import { Josefin_Sans } from 'next/font/google';
import { cn } from "./_utils/cn";
import Header from "./_components/Header";
import Providers from "./_providers/Providers";
import { Toaster } from "@/components/ui/sonner";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'The Wild Oasis'
  },
  description: 'Discover and book the most luxurious hotels worldwide, offering unparalleled comfort, elegance, and top-tier hospitality.',

};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={cn('bg-primary-950 text-primary-100 min-h-screen flex flex-col relative', josefin.className)}>
        <Header />
        <div className="flex-1 grid px-8 py-12">
          <main className="max-w-7xl mx-auto w-full">
            <Providers>
              {children}
            </Providers>
          </main>
        </div>
      </body>
    </html>
  )
}