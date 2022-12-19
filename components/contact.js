export default function Contact() {
    return (
      <div className="bg-[#fbbf2d]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-black sm:text-3xl">Get in touch</h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-bold text-black">Say Hello!</h3>
                  <dl className="mt-2 text-base font-semibold text-gray-900">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd><a href="mailto:contact@profhacks.org">contact@profhacks.org</a> </dd>
                    </div>
                    {/* <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 123-4567</dd>
                    </div> */}
                  </dl>
                </div>
          
              </div>
            </div>
        </div>
        </div>
        </div>
    )
}
