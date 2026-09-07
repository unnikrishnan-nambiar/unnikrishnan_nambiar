import Image from 'next/image';
import logo from '@/public/logo.png';

type LogoProps = {
  className?: string;
};

// The real "ryx ai" wordmark (public/logo.png — extracted from the supplied
// artwork, background removed).
export default function Logo({ className = '' }: LogoProps) {
  return <Image src={logo} alt="ryx ai" className={className} priority />;
}
