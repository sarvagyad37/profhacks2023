import Image from "next/image";

import swirlyArrow from "../public/assets/swirly-arrow.svg"

export default function About() {
    return (
        <section id="about" className="flex flex-col items-center justify-start w-full sm:h-screen bg-white">
            <h1 className="text-4xl font-fancy text-center text-red-500 mt-[4rem] md:mt-[8rem] outline-title">About</h1>
            <div className="w-[70%] lg:w-1/2 mt-12">
            <p className="text-center text-base sm:text-xl font-normal my-8">ProfHacks 2023 is the 8th iteration of IEEE&apos;s hallowed annual hackathon.</p>
            <p className="text-center text-base sm:text-xl font-normal my-8">We are excited to announce that ProfHacks 2023 will be a Haunted Hackathon. We will be hosting a series of spooky events and activities to make this year&apos;s hackathon the most memorable one yet.</p>
            <p className="text-center text-base sm:text-xl font-normal my-8">All are welcome to learn, hack or even game all night in ProfHacks, the Haunted Hack.</p>
            </div>
            <Image className="hidden lg:block relative right-[-30%] bottom-[55%]" src={swirlyArrow} alt="Swirly Arrow"/>
        </section>
    )
}