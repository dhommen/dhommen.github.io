import './globals.css'

export const metadata = {
  title: 'Daniel Hommen',
  description: 'Daniel Hommen´s portfolio website showcasing development projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
