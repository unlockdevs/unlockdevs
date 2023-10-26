import Image from "next/image"
import Link from "next/link"

// Images
import Logo from "@/assets/logo.svg"

const NavLink = ({ children, to }) => <li className="hover:text-red_imperial  transition-all"><Link href={to}>{children}</Link></li>

export function Header() {
    return (
        <nav className="w-full h-28 flex items-center justify-between px-32">
            <section className="pb-3">
                <Link href="/">
                    <Image width={200} src={Logo} alt="logo" />
                </Link>
            </section>

            <section className="text-white_light text-[22px] flex">
                <ul className="flex gap-10 items-center">
                    <NavLink to="/">Comunidade</NavLink>
                    <NavLink to="/">CodeSolvers</NavLink>
                    <NavLink to="#projetos">Projetos</NavLink>
                    <NavLink to="#sobre-nos">Sobre Nós</NavLink>
                </ul>
            </section>
        </nav>
    )
}