import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["400","700"],
  subsets: ["latin"],
  variable: "--font-poppins"
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <nav>
          <h1>logo</h1>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Sign up</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
