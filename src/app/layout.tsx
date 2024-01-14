"use client";
import { CopilotProvider } from "@copilotkit/react-core";
import { CopilotSidebarUIProvider } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css"; // also import this if you want to use the chatbot component

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotProvider chatApiEndpoint="/api/copilotkit/openai">
          <CopilotSidebarUIProvider>
            {children}
          </CopilotSidebarUIProvider>
        </CopilotProvider>
      </body>
    </html>
  )
}
