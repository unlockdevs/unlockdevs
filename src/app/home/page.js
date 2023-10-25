import { Header } from "@/components/header";
import Simbolo from "@/assets/Simbolo.svg"
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md"

const RedSpan = ({ children, className }) => <span className={`text-red_imperial font-bold ${className}`}>{children}</span>
const Arrow = () => <MdKeyboardArrowDown size={50} className="text-red_imperial" />
const Title = ({ children }) => <h1 className="text-5xl text-white_light font-bold">{children}</h1>

export default function Home() {
    return (
        <main className="w-full min-h-screen overflow-x-hidden bg-night">
            <Header />

            <section className="flex items-center justify-center gap-20 mt-12 text-white_light">
                <div>
                    <h1 className="w-[50rem] text-7xl font-medium mb-14">Desbloqueando o <RedSpan>poder</RedSpan> da tecnologia com cada linha de <RedSpan>código.</RedSpan></h1>
                    <div className="flex w-[30rem] items-center gap-4">
                        <div className="w-2 h-14 rounded bg-red_imperial"></div>
                        <p className="text-2xl">Comunidade de <RedSpan>programadores</RedSpan> e <RedSpan>desenvolvedores.</RedSpan></p>
                    </div>
                </div>

                <div>
                    <Image width={635} height={563} src={Simbolo} />
                </div>
            </section>

            <div className="w-full flex justify-center animate-bounce mt-[90px]">
                <Arrow />
            </div>

            <section>

            </section>

        </main>
    )
}
