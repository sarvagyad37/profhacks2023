import Image from "next/image";
import spin from "../public/assets/spin.svg"

export default function Marquee() {
    return (
        <div class="w-full flex overflow-x-hidden font-fancy bg-white border">
      
        <div class="flex flex-row flex-nowrap justify-center items-center sm:py-12 animate-marquee2">
          <span class="text-2xl sm:text-4xl mx-4 whitespace-nowrap">HAUNTED HACK</span>
          <span class="mx-4 whitespace-nowrap"><Image className="min-w-[80px] sm:min-w-[100px] animate-spin" src={spin} alt="spin"/></span>
          <span class="text-2xl sm:text-4xl mx-4 whitespace-nowrap">RU READY?</span>
          <span class="mx-4 whitespace-nowrap"><Image className="min-w-[80px] sm:min-w-[100px] animate-spin" src={spin} alt="spin" /></span>
          <span class="text-2xl sm:text-4xl mx-4 whitespace-nowrap">HAUNTED HACK</span>
          <span class="mx-4 whitespace-nowrap"><Image className="min-w-[80px] sm:min-w-[100px] animate-spin" src={spin} alt="spin" /></span>
          <span class="text-2xl sm:text-4xl mx-4 whitespace-nowrap">RU READY?</span>
          <span class="mx-4 whitespace-nowrap"><Image className="min-w-[80px] sm:min-w-[100px] animate-spin" src={spin} alt="spin" /></span>
          <span class="text-2xl sm:text-4xl mx-4 whitespace-nowrap">HAUNTED HACK</span>
          <span class="mx-4 whitespace-nowrap"><Image className="min-w-[80px] sm:min-w-[100px] animate-spin" src={spin} alt="spin" /></span>
          <span class="text-2xl sm:text-4xl mx-4 whitespace-nowrap">RU READY?</span>
          <span class="mx-4 whitespace-nowrap"><Image className="min-w-[80px] sm:min-w-[100px] animate-spin" src={spin} alt="spin" /></span>
        </div>
      </div>
      
    )
}