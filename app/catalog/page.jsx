import Image from 'next/image'
import Link from 'next/link'
import PageShell from '../../components/PageShell'
const items=[['BPC-157','bpc157.jpg'],['TB-500','tb500.jpg'],['GHK-Cu','ghkcu.jpg'],['Ipamorelin','ipamorelin.jpg']]
export const metadata={title:'Research catalog'}
export default function Catalog(){return <PageShell><section className="catalogPage"><div className="lockedIntro"><p className="eyebrow">MEMBER CATALOG PREVIEW</p><h1>Research materials.</h1><p>This preview demonstrates the catalog design. Production access must be protected by authenticated server sessions and recorded acceptance of current terms.</p><Link className="goldButton" href="/login">Sign in for access</Link></div><div className="productGrid">{items.map(([name,img])=><article className="productCard" key={name}><div className="productImage"><Image src={`/images/${img}`} alt={`${name} research vial`} fill sizes="(max-width: 700px) 100vw, 25vw"/></div><div className="productInfo"><span>RESEARCH MATERIAL</span><h2>{name}</h2><p>Technical listing available to approved members.</p></div></article>)}</div></section></PageShell>}
