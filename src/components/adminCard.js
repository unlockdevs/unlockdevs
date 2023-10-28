// import Image from "next/image";
import Link from "next/link";

import ProfileImage from "@/assets/profile-image.svg"
import { RedSpan, Title } from "./layout";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6"

const MidiaBtn = ({ children, to }) => (
    <Link href={to} className="hover:text-red_imperial transition-colors">
        {children}
    </Link>
)

export function AdminCard({ name, skill, description, image }) {

    return (
        <div className="flex items-center gap-7">
            <img className="w-[270px] h-[270px] rounded-full object-cover" src={image === null ? ProfileImage : image} alt="profile" />
            <div className="text-white_light max-w-sm">
                <div className="mb-2">
                    <Title className="text-start">{name}</Title>
                    <RedSpan className="text-xl">{skill}</RedSpan>
                </div>

                <p className="text-lg mb-4">
                    {description}
                </p>

                <div className="flex items-center gap-3">
                    <MidiaBtn to="https://google.com">
                        <FaInstagram size={40} />
                    </MidiaBtn>

                    <MidiaBtn to="https://google.com">
                        <FaGithub size={40} />
                    </MidiaBtn>

                    <MidiaBtn to="https://google.com">
                        <FaLinkedin size={40} />
                    </MidiaBtn>
                </div>
            </div>
        </div>
    )
}