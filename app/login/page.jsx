import Link from 'next/link'
import PageShell from '../../components/PageShell'
export const metadata = { title: 'Sign in' }
export default function Login(){return <PageShell><section className="formPage compactForm"><div className="formIntro"><p className="eyebrow">MEMBER PORTAL</p><h1>Sign in.</h1><p>Catalog access will be enforced server-side after production authentication is connected.</p></div><form className="accountForm"><label>Email<input type="email" autoComplete="email" required/></label><label>Password<input type="password" autoComplete="current-password" required/></label><button className="goldButton" type="button">Sign in</button><p className="formNote">Need access? <Link href="/register">Create an account</Link>.</p></form></section></PageShell>}
