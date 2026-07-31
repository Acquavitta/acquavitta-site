import Link from 'next/link'
import PageShell from '../../components/PageShell'
export const metadata={title:'Member portal'}
export default function Account(){return <PageShell><section className="simplePage"><p className="eyebrow">MEMBER PORTAL</p><h1>Account access is not yet activated.</h1><p>The production portal will include profile details, accepted policy version, account verification and order history without storing payment-card data.</p><Link className="goldButton" href="/login">Return to sign in</Link></section></PageShell>}
