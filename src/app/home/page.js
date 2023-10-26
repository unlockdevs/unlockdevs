// Componentes
import { Header } from "@/components/header";
import { Container } from "@/components/container";

// Images
import Image from "next/image";
import Simbolo from "@/assets/simbolo.svg"
import ArrowDown from "@/assets/arrow-down.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import { ProjectCard } from "@/components/projectCard";


const RedSpan = ({ children, className }) => <span className={`text-red_imperial font-bold ${className}`}>{children}</span>
const ArrowToDown = () => <Image className="text-red_imperial w-7" src={ArrowDown} alt="arrow-down" />
const Title = ({ children }) => <h2 className="text-5xl text-center text-white_light font-bold">{children}</h2>
const Line = ({ horizontal, vertical }) => <div className={`${vertical ? "w-2 h-14" : ""} ${horizontal ? "w-[100px] h-2" : ""} bg-red_imperial rounded`}></div>

export default function Home() {
    return (
        <main className="w-full min-h-screen pb-8 bg-night">
            <Header />

            <Container className="gap-20 mt-12 text-white_light">
                <div>
                    <h1 className="w-[50rem] text-7xl font-medium mb-14">Desbloqueando o <RedSpan>poder</RedSpan> da tecnologia com cada linha de <RedSpan>código.</RedSpan></h1>
                    <div className="flex w-[30rem] items-center gap-4">
                        <Line vertical />
                        <p className="text-2xl">Comunidade de <RedSpan>programadores</RedSpan> e <RedSpan>desenvolvedores.</RedSpan></p>
                    </div>
                </div>

                <div>
                    <Image width={635} height={563} src={Simbolo} alt="symbol" />
                </div>
            </Container>

            <Container className="animate-bounce my-[140px]">
                <ArrowToDown />
            </Container>

            <Container className="flex-col">
                <div className="flex items-center flex-col gap-4 mb-14">
                    <Title>Projetos em Destaque</Title>
                    <Line horizontal />
                </div>

                <section id="projetos" className="flex flex-wrap justify-center p-4 w-full max-w-[90rem] gap-6">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </section>

                <div className="relative w-[93rem] flex items-center justify-center mt-8">
                    <button className="flex z-[1] w-[424px] h-12 rounded-lg items-center justify-center border border-red_imperial bg-eerie_black gap-4 ">
                        <span className="text-2xl font-medium text-red_imperial">Mais Projetos</span>
                        <Image className="pt-1" width={12} src={ArrowRight} alt="arrow-right" />
                    </button>
                    <div className="absolute w-full h-[1px] bg-red_imperial"></div>
                </div>
            </Container>
        </main>
    )
}
