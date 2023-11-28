import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import { CartProvider } from '@/contexts/CartContext'
// import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Coder App',
  description: 'Curso 60210',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
