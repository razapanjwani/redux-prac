import { Inter } from 'next/font/google'
import './globals.css'

import Prvider from '@/redux/Prvder'
import PrvderTwo from '@/reduxTwo/Prvider'

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body>
        <PrvderTwo>
          
        {children}
        </PrvderTwo>
      </body>
    </html>
    
  )
}
