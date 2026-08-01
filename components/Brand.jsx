import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ compact=false, symbolOnly=false }) {
  const src = symbolOnly ? '/brand/acquavitta-symbol.png' : '/brand/acquavitta-logo.png'
  return (
    <Link href="/" className={`brand ${compact ? 'brandCompact' : ''} ${symbolOnly ? 'brandSymbolOnly' : ''}`} aria-label="AcquaVitta home">
      <Image
        src={src}
        alt="AcquaVitta official logo"
        width={symbolOnly ? 700 : 1120}
        height={symbolOnly ? 700 : 900}
        priority
        className="brandArtwork"
      />
    </Link>
  )
}
