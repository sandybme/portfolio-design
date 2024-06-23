import './globals.css'

import Head from 'next/head';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Sandhanakrishnan Ravichandran- Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      
    </html>
  )
}
