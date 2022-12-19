export default function Hero() {
    return (
        <main className="mx-auto sm:h-[calc(100vh-101px)] max-w-7xl px-4 py-12 sm:py-24 ">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-fancy text-gray-900 sm:text-7xl md:text-[6rem] xl:text-[8rem]">
              <span className="block text-[#f8450b] outline-title">PROFHACKS</span>{' '}
              <span className="block text-white outline-title">2023</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-black font-medium sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              RU Ready for the Haunted Hack?
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf6jjk4Y1XddxpVjh4UfbjX1gy6N2Ft0gImi1ZFMfkxZ-O2qQ/viewform?usp=sf_link"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f8450b] hover:bg-[#ce4011] md:py-4 md:text-lg md:px-10"
                >
                  REGISTER NOW
                </a>
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div> */}
            </div>
            <div className="left-[2%] bottom-[6%] absolute font-semibold text-lg text-left hidden md:block">
                <strong>A NEW WAVE OF <br/>HACKFEST IS ABOUT <br/>TO HIT ROWAN UNIVERSITY.</strong>
            </div>
            <div className="right-[2%] bottom-[6%] absolute font-semibold text-lg text-right hidden md:block">
                <strong><a href="#">TWITTER</a><br/><a href="#">INSTAGRAM</a><br/><a href="#">DISCORD</a></strong>
            </div>
          </div>
        </main>
        )
    }