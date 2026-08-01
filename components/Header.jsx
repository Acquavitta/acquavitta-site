import Link from 'next/link'
import Brand from './Brand'

export default function Header(){
  return <>
    <div className="researchBanner">FOR RESEARCH USE ONLY · NOT FOR HUMAN OR ANIMAL USE · 21+ ACCOUNT REQUIRED</div>
    <header className="siteHeader">
      <div className="headerInner">
        <Brand compact />
        <nav className="desktopNav" aria-label="Main navigation">
          <Link href="/catalog">Catalog</Link>
          <Link href="/quality">Quality</Link>
          <Link href="/research-policy">Research Library</Link>
          <Link href="/quality">COAs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="headerActions">
          <Link className="outlineButton small" href="/login">Sign in</Link>
          <Link className="goldButton small" href="/register">Create account</Link>
        </div>
      </div>
    </header>
  </>
}
