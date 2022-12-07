import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ScrollingRibbon() {

    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-container className="hidden lg:w-full h-[50%] lg:flex overflow-x-hidden font-fancy bg-white">
            <div data-scroll-section className="hidden text-4xl lg:flex flex-row flex-nowrap justify-center py-6 items-center lg:absolute left-[-20%] bg-red-500 border-y-8 border-gray-800 rotate-12 z-10" >
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
            </div>
            <div data-scroll-section className="hidden text-4xl lg:flex flex-row flex-nowrap justify-center py-6 items-center lg:absolute left-[-20%] bg-[#fbbf2d] border-y-8 border-gray-800 rotate-[-12deg] z-10" >
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
                <span className="mx-4 whitespace-nowrap" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">PROFHACKS</span>
            </div>
        </div>

    )
}