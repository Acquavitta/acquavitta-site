import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ compact=false, light=false }) {
  return (
    <Link href="/" className={`brand ${compact ? 'brandCompact' : ''} ${light ? 'brandLight' : ''}`} aria-label="AcquaVitta home">
      <Image
        src="/brand/acquavitta-logo-original.png"
        alt="AcquaVitta"
        width={1104}
        height={887}
        priority
        className="brandArtwork"
      />
    </Link>
  )
}
