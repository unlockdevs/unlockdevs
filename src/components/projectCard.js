import Image from "next/image";
import Simbolo from "@/assets/symbol.svg"

export function ProjectCard() {

    // Fazer um if bem grande depois, para verificar se existe um projeto ou não!!
    return (
        <div className="flex items-center justify-center w-[450px] h-[260px] rounded-[20px] bg-eerie_black">
            <Image width={60} src={Simbolo} alt="symbol" /> 
        </div>
    )
}