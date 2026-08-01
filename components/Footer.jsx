import Link from 'next/link'
import Brand from './Brand'

export default function Footer(){
  return <footer className="footer">
    <div className="footerGrid">
      <div className="footerBrand"><Brand compact/><p>Controlled-access research materials presented with documented identity and responsible-use restrictions.</p></div>
      <div><h3>Research</h3><Link href="/catalog">Catalog</Link><Link href="/quality">Quality standards</Link><Link href="/research-policy">Research policy</Link></div>
      <div><h3>Company</h3><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div>
      <div><h3>Access</h3><Link href="/login">Sign in</Link><Link href="/register">Create account</Link><Link href="/terms">Terms</Link></div>
    </div>
    <div className="footerBottom">© 2026 AcquaVitta. Research use only. Not for human or animal use.</div>
  </footer>
}
