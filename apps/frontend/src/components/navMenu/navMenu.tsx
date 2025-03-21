import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex justify-start text-sm  w-full items-center gap-8 pl-10">
      <Link href="/">
        <h1 className="text-2xl font-bold">Página Inicial</h1>
      </Link>
      <Link href="/about">
        <h1 className="text-2xl font-bold">Sobre</h1>
      </Link>
      <Link href="/contact">
        <h1 className="text-2xl font-bold">Contatos</h1>
      </Link>
    </nav>
  );
}
