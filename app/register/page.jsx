import Link from 'next/link'
import PageShell from '../../components/PageShell'

const checks = [
  'I confirm that I am 21 years of age or older.',
  'I understand that AcquaVitta materials are not for human use.',
  'I understand that AcquaVitta materials are not for animal or veterinary use.',
  'I will use any materials solely for legitimate laboratory or analytical research.',
  'I accept the Terms, Privacy Policy and Research Use Policy.'
]

export const metadata = { title: 'Create account' }
export default function Register() {
  return <PageShell><section className="formPage"><div className="formIntro"><p className="eyebrow">CONTROLLED ACCESS</p><h1>Create a research account.</h1><p>This form demonstrates the final access flow. Production authentication will require a configured identity provider, email verification and server-side records.</p></div><form className="accountForm"><div className="fieldGrid"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div><label>Organization<input name="organization" autoComplete="organization" required /></label><label>Business email<input type="email" name="email" autoComplete="email" required /></label><label>Password<input type="password" name="password" minLength={12} autoComplete="new-password" required /></label><div className="checks">{checks.map((c)=><label className="checkRow" key={c}><input type="checkbox" required/><span>{c}</span></label>)}</div><button className="goldButton" type="button" aria-describedby="demo-note">Submit access application</button><p id="demo-note" className="formNote">Authentication is intentionally not activated in this build. Do not collect real customer data until the production identity service is connected.</p><p className="formNote">Already registered? <Link href="/login">Sign in</Link>.</p></form></section></PageShell>
}
