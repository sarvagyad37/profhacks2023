import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    InformationCircleIcon,
    UsersIcon,
    SparklesIcon,
    MegaphoneIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'ABOUT',
    href: '#about',
    icon: InformationCircleIcon,
  },
  {
    name: 'TEAM',
    href: '#team',
    icon: UsersIcon,
  },
  { 
    name: 'SPONSORS',
    href: '#sponsors', 
    icon: SparklesIcon },
  {
    name: 'FOLLOW US',
    href: '#follow',
    icon: MegaphoneIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <Popover className="relative bg-[#fbbf2d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">PROFHACKS</span>
              <p className='font-fancy'>PROFHACKS</p>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-900 hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#fb6b2d]">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">

            {solutions.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-black">
                    {item.name}
                </a>
            ))}


            
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6jjk4Y1XddxpVjh4UfbjX1gy6N2Ft0gImi1ZFMfkxZ-O2qQ/viewform?usp=sf_link"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-black bg-white px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-gray-50"
            >
              REGISTER →
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className='font-fancy'>PROFHACKS</p>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f8450b]">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-[#f8450b]" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="hhttps://docs.google.com/forms/d/e/1FAIpQLSf6jjk4Y1XddxpVjh4UfbjX1gy6N2Ft0gImi1ZFMfkxZ-O2qQ/viewform?usp=sf_link"
                  className="flex w-full items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-base font-semibold text-black shadow-sm hover:bg-gray-50"
                >
                  REGISTER →
                </a>
                
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}