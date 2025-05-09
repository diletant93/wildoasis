import { Metadata, Viewport } from "next";
import './globals.css'
import { Josefin_Sans } from 'next/font/google';
import { cn } from "./_utils/cn";
import Header from "./_components/Header";
import Providers from "./_providers/Providers";
import ViewportHeightProvider from "./_providers/ViewportHeightProvider";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={cn('bg-primary-950 text-primary-100 flex flex-col relative h-dvh', josefin.className)}>
        <ViewportHeightProvider />
        <Header />
        <Providers>
          <div className="flex-1 grid  overflow-y-auto md:overflow-y-scroll md:px-8 md:py-12">
            <main className="max-w-[80rem] 2xl:max-w-[100rem] grid sm:block mx-auto w-full">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}