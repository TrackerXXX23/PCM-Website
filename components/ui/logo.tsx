import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="PCM">
      <div style={{ width: '120px', height: '30px', position: 'relative' }}>
        <Image
          src="/images/pcm-logo.svg"
          alt="PCM Financial Services Logo"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </Link>
  );
}
