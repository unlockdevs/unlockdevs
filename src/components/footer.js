import Image from "next/image";
import Link from "next/link";
import LogoFooter from "@/assets/logo-footer.svg"
import { RedSpan } from "./layout";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const TitleLinks = ({ children }) => <h3 className="text-wenge text-xl font-bold uppercase mb-3">{children}</h3>
const FLink = ({ children, to }) => <Link href={to} className="text-gray_light text-2xl hover:opacity-50 transition-opacity">{children}</Link>
const CircleMidia = ({ children, to }) => <Link href={to} className="flex items-center justify-center bg-night rounded-full w-16 h-16 text-white_light">{children}</Link>

export function Footer() {
    return (
        <footer className="w-full h-[350px] px-24 py-10 bg-eerie_black">
            <section className="flex justify-between w-full h-full">
                <section className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <Image width={300} src={LogoFooter} alt="logo footer" />
                        <RedSpan className="font-medium">“Uma comunidade de desenvolvedores”</RedSpan>
                    </div>

                    <span className="text-wenge text-xl font-bold">©2023 Unlock Developer’s</span>
                </section>

                <section className="flex gap-28">
                    <div>
                        <TitleLinks>Navegação</TitleLinks>
                        <ul className="flex flex-col">
                            <FLink to="#sobre-nos">Sobre Nós</FLink>
                            <FLink to="#nosso-time">Nosso Time</FLink>
                            <FLink to="#projetos">Projetos</FLink>
                        </ul>
                    </div>

                    <div>
                        <TitleLinks>Comunidade</TitleLinks>
                        <ul className="flex flex-col">
                            <FLink to="#discord">Discord</FLink>
                            <FLink to="#whatsapp">Grupo WhatsApp</FLink>
                            <FLink to="#codesolvers">CodeSolvers</FLink>
                        </ul>
                    </div>
                </section>

                <section className="flex gap-5">
                    <CircleMidia to="#">
                        <FaInstagram size={40} />
                    </CircleMidia>

                    <CircleMidia to="#">
                        <FaGithub size={40} />
                    </CircleMidia>

                    <CircleMidia to="#">
                        <FaWhatsapp size={40} />
                    </CircleMidia>
                </section>
            </section>
        </footer>
    )
}