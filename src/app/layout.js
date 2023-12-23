import './globals.css'
import Footer from "@/app/components/footer"

export const metadata = {
  title: 'Daniel Hommen',
  description: 'Daniel Hommens portfolio website showcasing development projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
