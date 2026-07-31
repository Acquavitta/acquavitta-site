import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ compact = false }) {
  return (
    <Link className={`brand ${compact ? 'brandCompact' : ''}`} href="/" aria-label="AcquaVitta home">
      <Image src="/images/acquavitta-logo.png" alt="AcquaVitta" width={300} height={252} priority className="brandImage" />
    </Link>
  )
}
