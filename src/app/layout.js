import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import Script from 'next/script'
import Footer from '@/Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Style And Smile',
  description: 'Beaute Sealun',
}

const RootLayout =({ children }) => {
  return (
    <html lang="en">

      <head>
        <Script src="https://kit.fontawesome.com/816fadddff.js" crossorigin="anonymous"></Script>
      </head>
       
      <body className={inter.className}>

       <Navbar/>
        {children}
       
       <Footer/>
      </body>
     
    </html>
  )
}

export default RootLayout;
