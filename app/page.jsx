import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const standards=[
  ['⌾','Documented identity','Compound identity and analytical context.'],
  ['⚗','Batch transparency','Supporting records organized for review.'],
  ['◇','Controlled handling','Storage information for research settings.'],
  ['▣','Restricted access','Catalog access for approved accounts.']
]

const declarations=[
  ['21+','ACCOUNT REQUIRED','Applicants must be at least 21 years old.'],
  ['○','NOT FOR HUMAN USE','Materials are for laboratory research use only.'],
  ['✣','NOT FOR ANIMAL USE','No animal or veterinary use is permitted.'],
  ['▤','TERMS & PRIVACY','Acceptance of current policies is required.'],
  ['▣','ACCOUNT ACCESS','Catalog access is reserved for approved accounts.']
]

const products=[
  ['BPC-157','5 mg','Lyophilized powder','/images/v10/bpc157.jpg'],
  ['TB-500','5 mg','Lyophilized powder','/images/v10/tb500.jpg'],
  ['GHK-Cu','5 mg','Research material','/images/v10/ghkcu.jpg'],
  ['Ipamorelin','5 mg','Lyophilized powder','/images/v10/ipamorelin.jpg']
]

export default function Home(){
  return <><Header/><main>
    <section className="v10Hero">
      <div className="heroCopy">
        <p className="eyebrow">ACQUAVITTA RESEARCH MATERIALS</p>
        <h1>Precision.<br/>Transparency.<br/><em>Research.</em></h1>
        <p className="lead">Industrial research materials with documented identity, controlled presentation and access reserved for qualified laboratory contexts.</p>
        <div className="standardRow">{standards.map(([icon,title])=><div className="standardMini" key={title}><span>{icon}</span><strong>{title}</strong></div>)}</div>
        <div className="buttonRow"><Link className="goldButton" href="/register">Request member access</Link><Link className="outlineButton" href="/quality">Review standards</Link></div>
        <div className="researchNotice"><span>◇</span><div><strong>Research use only</strong><p>Materials are not intended for human or animal consumption, administration, diagnosis, treatment, cure or prevention.</p></div></div>
      </div>
      <div className="heroPhoto">
        <Image src="/images/v10/hero-industrial.jpg" alt="AcquaVitta BPC-157 research vial on black stone" fill priority sizes="(max-width: 920px) 100vw, 58vw"/>
      </div>
    </section>

    <section className="declarationStrip">
      {declarations.map(([icon,title,text],i)=><article className={i===0?'ageBlock':''} key={title}><span className="declarationIcon">{icon}</span><div><strong>{title}</strong><p>{text}</p></div></article>)}
    </section>

    <section className="catalogShowcase">
      <div className="catalogLead">
        <p className="eyebrow">CONTROLLED CATALOG</p>
        <h2>Materials presented like laboratory standards.</h2>
        <p>Every compound is presented with clear specifications, documentation and controlled access.</p>
        <Link className="textLink" href="/catalog">Browse catalog →</Link>
      </div>
      <div className="v10ProductGrid">
        {products.map(([name,amount,form,img])=><article className="v10Product" key={name}>
          <div className="v10ProductImage"><Image src={img} alt={`${name} AcquaVitta research vial`} fill sizes="(max-width: 700px) 100vw, 22vw"/></div>
          <div className="v10ProductBody"><h3>{name}</h3><strong>{amount}</strong><p>{form}</p><span>RESEARCH MATERIAL</span></div>
        </article>)}
      </div>
    </section>

    <section className="brandProof">
      <div className="brandProofVisual"><Image src="/brand/acquavitta-logo.png" alt="Official AcquaVitta logo" width={1120} height={900}/></div>
      <div className="brandProofCopy"><p className="eyebrow">OFFICIAL BRAND ARTWORK</p><h2>The supplied logo is used directly.</h2><p>The header and footer use the original AcquaVitta PNG artwork supplied for the project. It is not redrawn, retyped or replaced. The transparent web version removes only the checkerboard background and preserves the original proportions.</p></div>
    </section>

    <section className="accessPanel">
      <div><p className="eyebrow">RESPONSIBLE ACCESS</p><h2>Account required before product access.</h2><p>Applicants must confirm that they are at least 21 years old and that materials will be used only for laboratory research—not in humans or animals.</p><Link className="goldButton" href="/register">Create research account</Link></div>
      <div className="declarationCard"><h3>Required declarations</h3><ul><li>Age 21 or older</li><li>No human use</li><li>No animal or veterinary use</li><li>Research use only</li><li>Acceptance of terms and privacy policy</li></ul></div>
    </section>
  </main><Footer/></>
}
