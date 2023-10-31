// Components
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/projectCard";
import { AdminCard } from "@/components/adminCard";
import { SectionTitle } from "@/components/sectionTitle";
import { ArrowToDown, Line, RedSpan, Title } from "@/components/layout";

// Images
import Image from "next/image";
import Simbolo from "@/assets/simbolo.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import CharIlustration from "@/assets/characters-illustration.svg"

// Icons
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi"
import { Footer } from "@/components/footer";


export default function Home() {
    return (
        <main className="w-full min-h-screen bg-night">
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
                <SectionTitle id="projetos">
                    <Title>Projetos em destaque</Title>
                </SectionTitle>

                <section className="flex flex-wrap justify-center p-4 w-full max-w-[90rem] gap-6">
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

            <Container className="flex flex-col">
                <SectionTitle id="sobre-nos">
                    <Title>Sobre Nós</Title>
                </SectionTitle>

                <section className="flex items-center px-20 text-white_light">
                    <Image src={CharIlustration} alt="Illustration" />

                    <p className="text-3xl max-w-[50rem]">
                        Lorem <RedSpan>ipsum</RedSpan> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem <RedSpan>ipsum</RedSpan> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem <RedSpan>ipsum</RedSpan> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem <RedSpan>ipsum</RedSpan> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </section>
            </Container>

            <Container className="flex flex-col">
                <SectionTitle>
                    <Title>Administradores</Title>
                </SectionTitle>

                <section className="flex flex-wrap max-w-[105rem] gap-24 justify-center px-20">
                    <AdminCard
                        name="João Carlos"
                        skill="Desenvolvedor Web | Designer"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="https://i.pinimg.com/564x/73/92/36/739236f2a40f2e98c8ea3bc6be86a56a.jpg"
                    />

                    <AdminCard
                        name="Pedro Mota"
                        skill="Desenvolvedor Web"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="https://i.pinimg.com/736x/e2/2f/87/e22f87ee6a5af3918a9c38eed99773b0.jpg"
                    />

                    <AdminCard
                        name="Iran"
                        skill="Desenvolvedor Web"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="https://i.pinimg.com/564x/a5/33/2b/a5332b64260d4b4c6cb9aab2e45a13d4.jpg"
                    />
                </section>
            </Container>

            <Container className="flex flex-col mb-[10rem]">
                <SectionTitle>
                    <Title>Fale Conosco</Title>
                </SectionTitle>


                <section className="flex flex-wrap justify-center max-w-[70rem] gap-14 text-white_light text-5xl font-bold">
                    <div className="flex items-center gap-4 cursor-pointer hover:text-pink-700 transition-colors">
                        <FaInstagram size={100} />
                        <div>
                            <h2>@unlockdevs</h2>
                            <p className="text-red_imperial text-xl font-normal">
                                clique para acessar nosso intagram
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 cursor-pointer hover:text-orange-500 transition-colors">
                        <HiOutlineMail size={100} />
                        <div>
                            <h2>Nosso e-mail</h2>
                            <p className="text-red_imperial text-xl font-normal">
                                clique para copiar nosso e-mail
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 cursor-pointer hover:text-green-500 transition-colors">
                        <FaWhatsapp size={100} />
                        <div>
                            <h2>Fale conosco</h2>
                            <p className="text-red_imperial text-xl font-normal">
                                clique para falar pelo WhatsApp
                            </p>
                        </div>
                    </div>
                </section>
            </Container>

            <Footer />
        </main>
    )
}
