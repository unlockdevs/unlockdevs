import Image from "next/image"
import ArrowDown from "@/assets/arrow-down.svg"


export const RedSpan = ({ children, className }) => (
    <span className={`text-red_imperial font-bold ${className}`}>{children}</span>
)

export const ArrowToDown = () => (
    <Image className="text-red_imperial w-7" src={ArrowDown} alt="arrow-down" />
)

export const Title = ({ children, className }) => (
    <h2 className={`text-5xl text-center text-white_light font-bold ${className}`}>{children}</h2>
)

export const Line = ({ horizontal, vertical }) => (
    <div className={`${vertical ? "w-2 h-14" : ""} ${horizontal ? "w-[100px] h-2" : ""} bg-red_imperial rounded`}></div>
)
