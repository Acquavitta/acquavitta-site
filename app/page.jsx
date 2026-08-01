import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PolicyNotice from '../components/PolicyNotice'

const pillars = [
  ['01','Material identity','Clear compound naming, physical form and documented analytical context.'],
  ['02','Independent records','Supporting documentation organized for qualified research review.'],
  ['03','Controlled handling','Storage and handling guidance presented without therapeutic instruction.'],
  ['04','Restricted access','Product access reserved for registered adults accepting the research-use terms.']
]

const products=[
  ['BPC-157','5 mg · Lyophilized powder','/images/bpc157.jpg'],
  ['TB-500','5 mg · Research material','/images/tb500.jpg'],
  ['GHK-Cu','5 mg · Research material','/images/ghkcu.jpg'],
  ['Ipamorelin','5 mg · Research material','/images/ipamorelin.jpg']
]

export default function Home(){
  return <><Header/><main>
    <section className="industrialHero">
      <div className="heroStone heroStoneA" aria-hidden="true"/><div className="heroStone heroStoneB" aria-hidden="true"/>
      <div className="heroCopy">
        <p className="eyebrow">ACQUAVITTA RESEARCH MATERIALS</p>
        <h1>Precision built on<br/><em>industrial clarity.</em></h1>
        <p className="lead">A controlled-access research platform combining documented materials, restrained presentation and a tactile stone-and-metal visual system.</p>
        <div className="buttonRow"><Link className="goldButton" href="/register">Request member access</Link><Link className="outlineButton dark" href="/quality">Review standards</Link></div>
        <PolicyNotice/>
      </div>
      <div className="heroVisual">
        <div className="imageFrame"><Image src="/images/hero.jpg" alt="Research vial on mineral stone" fill priority sizes="(max-width: 900px) 100vw, 48vw"/></div>
        <div className="materialLabel"><span>01</span><strong>Stone / Glass / Brass</strong><small>AcquaVitta material language</small></div>
      </div>
    </section>

    <section className="logoStatement">
      <div className="logoSlab"><Image src="/brand/acquavitta-logo-original.png" alt="AcquaVitta official logo" width={1104} height={887}/></div>
      <div className="logoStatementCopy"><p className="eyebrow">THE OFFICIAL MARK</p><h2>Your original logo, used directly.</h2><p>The V9 uses the supplied AcquaVitta artwork itself—without redrawing the molecular mark or replacing the wordmark. The source is displayed at a larger size so the gold detail remains sharp.</p></div>
    </section>

    <section className="pillarsSection">
      <div className="sectionHeading"><p className="eyebrow">DOCUMENTED STRUCTURE</p><h2>Research presentation with architectural discipline.</h2></div>
      <div className="pillarsGrid">{pillars.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="catalogPreview">
      <div className="catalogIntro"><p className="eyebrow">CONTROLLED CATALOG</p><h2>Materials presented like objects, not supplements.</h2><p>Industrial stone, clear glass and restrained brass details create a consistent research-focused product system.</p><Link className="goldButton" href="/register">Create research account</Link></div>
      <div className="productRail">{products.map(([name,meta,img])=><article className="productCard" key={name}><div className="productImage"><Image src={img} alt={`${name} research vial`} fill sizes="(max-width: 700px) 100vw, 25vw"/></div><div className="productInfo"><span>RESEARCH MATERIAL</span><h3>{name}</h3><p>{meta}</p><div className="lockedTag">Member access required</div></div></article>)}</div>
    </section>

    <section className="accessPanel">
      <div><p className="eyebrow">RESPONSIBLE ACCESS</p><h2>Account required before product access.</h2><p>Applicants must confirm that they are at least 21 years old and that materials will be used only for laboratory research—not in humans or animals.</p><Link className="goldButton" href="/register">Create research account</Link></div>
      <div className="declarationCard"><h3>Required declarations</h3><ul><li>Age 21 or older</li><li>No human use</li><li>No animal or veterinary use</li><li>Research use only</li><li>Acceptance of terms and privacy policy</li></ul></div>
    </section>
  </main><Footer/></>
}
