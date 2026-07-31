import Link from 'next/link'
import Brand from './Brand'

export default function Footer() {
  return <footer className="footer">
    <div className="footerGrid">
      <div><Brand compact /><p>Molecular precision for qualified laboratory research.</p></div>
      <div><h3>Access</h3><Link href="/register">Create account</Link><Link href="/login">Sign in</Link><Link href="/account">Member portal</Link></div>
      <div><h3>Policies</h3><Link href="/research-policy">Research use policy</Link><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link></div>
      <div><h3>Contact</h3><a href="mailto:shop@acquavitta.com">shop@acquavitta.com</a><p>AcquaVitta.com</p></div>
    </div>
    <div className="footerBottom">© 2026 AcquaVitta. Research materials only. Not for human or veterinary use.</div>
  </footer>
}
