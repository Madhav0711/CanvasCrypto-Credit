import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../client/components/Navbar'
import Footer from '../../client/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CryptoCanvasCredit',
  description: 'Created by Ayush and Raj !!!!!!!!!!!!!!',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
      <link href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
      </head>
      <body className={inter.className} style={{background:"blue"}}>
        <Navbar/>
        {children}
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      <script src="script.js"></script>
      </body>
    </html>
    </>
  )
}
