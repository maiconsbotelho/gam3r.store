import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center gap-3  ">
      <Image src="/logo.png" height={50} width={50} alt="logo" />
      <Image src="/logo-texto.png" width={80} height={0} alt="logo" />
    </Link>
  );
}
