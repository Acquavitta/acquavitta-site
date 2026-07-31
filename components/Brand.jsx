import Image from 'next/image';
import Link from 'next/link';
export default function Brand(){return <Link href="/" className="brand" aria-label="AcquaVitta home"><Image src="/images/acquavitta-logo.png" alt="AcquaVitta" width={360} height={220} priority /></Link>}
