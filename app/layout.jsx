import './styles.css'

export const metadata = {
  title: { default: 'AcquaVitta | Molecular Precision', template: '%s | AcquaVitta' },
  description: 'Research materials presented with analytical transparency. For laboratory research only. Not for human or animal use.',
  metadataBase: new URL('https://acquavitta.com'),
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
