import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PolicyNotice from '../components/PolicyNotice'

const standards = [
  ['Documented identity', 'Product records organized by compound, format and analytical documentation.'],
  ['Batch transparency', 'Supporting analytical records presented with each qualified research listing.'],
  ['Controlled handling', 'Clear storage, handling and shipment information for research environments.'],
  ['Restricted access', 'Catalog access is designed for registered adults who accept the research-use policy.']
]

export default function Home() {
  return <><Header/><main>
    <section className="hero">
      <div className="heroCopy">
        <p className="eyebrow">ACQUAVITTA RESEARCH MATERIALS</p>
        <h1>Molecular precision.<br/><em>Scientific clarity.</em></h1>
        <p className="lead">A controlled-access research portal built around transparent documentation, refined presentation and responsible use restrictions.</p>
        <div className="buttonRow"><Link className="goldButton" href="/register">Request member access</Link><Link className="outlineButton" href="/quality">Review standards</Link></div>
        <PolicyNotice/>
      </div>
      <div className="heroVisual"><Image src="/images/hero.jpg" alt="Research vial presented on white marble" fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div>
    </section>

    <section className="standardsSection">
      <div className="sectionIntro"><p className="eyebrow">RESPONSIBLE ACCESS</p><h2>Designed for qualified research contexts.</h2><p>Public pages explain the brand and standards. Detailed product access is reserved for registered members who complete the required declarations.</p></div>
      <div className="standardsGrid">{standards.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="accessPanel">
      <div><p className="eyebrow">CONTROLLED CATALOG</p><h2>Account required before product access.</h2><p>Applicants must confirm they are at least 21 years old and agree that all materials are intended exclusively for laboratory research—not for use in humans or animals.</p><Link className="goldButton" href="/register">Create research account</Link></div>
      <div className="declarationCard"><h3>Required declarations</h3><ul><li>Age 21 or older</li><li>No human use</li><li>No animal or veterinary use</li><li>Research use only</li><li>Acceptance of terms and privacy policy</li></ul></div>
    </section>

    <section className="editorialSection">
      <div className="editorialImage"><Image src="/images/bpc157.jpg" alt="Research vial on stone surface" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
      <div className="editorialCopy"><p className="eyebrow">SCIENCE · TRANSPARENCY · INTEGRITY</p><h2>Premium presentation without therapeutic claims.</h2><p>AcquaVitta communicates compound identity, analytical context and documentation while avoiding claims of medical benefit, dosing, administration or personal use.</p><Link className="textLink" href="/research-policy">Read the research-use policy →</Link></div>
    </section>
  </main><Footer/></>
}
