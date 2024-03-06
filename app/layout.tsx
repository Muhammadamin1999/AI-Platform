import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenFlow Studio',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            >
          {children}
          </ThemeProvider>
          
          
        </body>
      </html>
    </ClerkProvider>
  )
}