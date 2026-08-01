import './styles.css'

export const metadata={
  title:'AcquaVitta | Research Materials',
  description:'Controlled-access research materials for qualified laboratory contexts.',
  robots:{index:true,follow:true}
}

export default function RootLayout({children}){return <html lang="en"><body>{children}</body></html>}
