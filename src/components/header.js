import Logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <nav className="w-full h-28 flex items-center justify-between pl-24 pr-24">
            <section className="pb-3">
                <Link href="/">
                    <Image width={200} src={Logo} />
                </Link>
            </section>

            <section className="text-white_light text-xl flex">
                <ul className="flex gap-10 items-center">
                    <li><Link href="/">Comunidade</Link></li>
                    <li><Link href="/">CodeSolvers</Link></li>
                    <li><Link href="#projetos">Projetos</Link></li>
                    <li><Link href="#sobre-nos">Sobre Nós</Link></li>
                </ul>
            </section>
        </nav>
    )
}