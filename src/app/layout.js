import './globals.css'

export const metadata = {
  title: 'Unlock Devs',
  description: 'Desbloqueando o poder da tecnologia com cada linha de código.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
