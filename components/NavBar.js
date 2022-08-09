import { Disclosure, Transition } from '@headlessui/react'
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
const navigation = [
  { name: 'home', href: '/', number: '01' },
  { name: 'services', href: '/services', number: '02' },
  { name: 'contact', href: '/contact', number: '03' },
  { name: 'about', href: '/about', number: '04' }
]

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className={'shadow-sm shadow-stone-300 sticky top-0 z-20 '}
    >
      {({ open }) => (
        <motion.div>
          <div className="flex justify-center sm:hidden ">
            <Link href="/">
              <a>
                {' '}
                <Image
                  src="/logo2.png"
                  width={100}
                  height={100}
                  alt="Reliance Digital Creative logo"
                />
              </a>
            </Link>
          </div>

          <div className="relative sm:h-40 h-20 ml-10 ">
            <div className="sm:flex hidden p-4">
              <Link href="/">
                <a>
                  <Image
                    src="/logo1.png"
                    height={120}
                    width={120}
                    alt="Reliance Digital Creative logo"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 top-0 right-0 flex">
            {/* Mobile menu button*/}
            <Disclosure.Button className="justify-center p-2 rounded-md text-black transition-all hover:text-green-500 text-3xl">
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Disclosure.Button>
          </div>
          {/* mobile menu */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-y-0 opacity-0"
            enterTo="transform  scale-y-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-0 opacity-0"
          >
            <Disclosure.Panel className="">
              <motion.div className="bg-white h-screen absolute w-screen sm:p-40 p-10 sm:flex sm:justify-between">
                <div className="flex flex-col sm:gap-14 gap-8">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, type: 'spring', bounce: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover-underline-animation font-bold"
                      >
                        <span className="text-sm mr-2 ">{item.number}</span>
                        <span className="text-3xl md:text-5xl flex flex-col">
                          {item.name}
                        </span>
                      </motion.span>
                    </Disclosure.Button>
                  ))}
                </div>
                {/* contact section */}
                <motion.div
                  className="flex flex-col gap-4 sm:mt-20"
                  initial={{ opacity: 0, x: 100 }}
                  //animation of component appearence
                  animate={{ opacity: 1, x: 0 }}
                  // how your element will appears f.e(duration in seconds)
                  transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
                >
                  {/* icon container */}
                  <div className="text-3xl flex gap-5  transition:all mt-10 sm:mt-0">
                    <Link href="https://www.instagram.com/reliancedm/">
                      <a>
                        {' '}
                        <AiOutlineInstagram className="hover:text-green-500 cursor-pointer" />
                      </a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                      <a>
                        <AiOutlineFacebook className="hover:text-green-500 cursor-pointer" />
                      </a>
                    </Link>
                    <Link href="https://www.linkedin.com/">
                      <a>
                        <AiOutlineLinkedin className="hover:text-green-500 cursor-pointer" />
                      </a>
                    </Link>
                  </div>
                  <Link href="mailto:reliancedigitalcreative@gmail.com">
                    <a className="hover:text-green-500 transition:all text-lg ml-.5">
                      reliancedigitalcreative@gmail.com
                    </a>
                  </Link>
                  <Link href="tel:5108707804">
                    <a className="">
                      <Button text=" (510) 870-7804" />
                    </a>
                  </Link>
                </motion.div>
              </motion.div>
            </Disclosure.Panel>
          </Transition>
        </motion.div>
      )}
    </Disclosure>
  )
}
