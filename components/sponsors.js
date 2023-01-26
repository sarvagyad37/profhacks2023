import Image from "next/image";

import WolframLanguageLogo from "../public/assets/sponsors/wolfram-language-logo.png"
import RowanIEEELogo from "../public/assets/sponsors/rowan-ieee-logo.png"
import NoStarchPressLogo from "../public/assets/sponsors/no-starch-press-logo.jpg"
import IEEEPhillySectionLogo from "../public/assets/sponsors/ieee-philly-section-logo.jpg"
import OreillyLogo from "../public/assets/sponsors/oreilly-logo.png"
import RowanECELogo from "../public/assets/sponsors/rowan-ece-logo.png"
import TaskadeLogo from "../public/assets/sponsors/taskade-logo.png"

export default function Sponsors() {
    return (
        <section id="sponsors" className="flex flex-col items-center justify-start w-full px-6 h-screen lg:py-[10rem] bg-white outline-title">
            <h1 className="text-4xl font-fancy text-center text-yellow-400 mt-[4rem] md:mt-[8rem]">Sponsors</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center w-full h-full">
                <Image src={WolframLanguageLogo} alt="Wolfram Language Logo" className="h-[10rem] w-auto m-8"/>
                <Image src={TaskadeLogo} alt="Taskade Logo" className="w-auto h-[10rem] m-8"/>
                <Image src={NoStarchPressLogo} alt="No Starch Press Logo" className="w-auto h-[10rem] m-8"/>
                <Image src={RowanIEEELogo} alt="Rowan IEEE Logo" className="w-auto h-[10rem] m-8"/>
                <Image src={IEEEPhillySectionLogo} alt="IEEE Philly Section Logo" className="w-auto h-[7rem] m-8"/>
                <Image src={OreillyLogo} alt="O'Reilly Logo" className="w-auto h-[6rem] m-8"/>
                <Image src={RowanECELogo} alt="Rowan ECE Logo" className="w-auto h-[10rem] m-8"/>
            </div>
        </section>
    )
}