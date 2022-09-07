import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineInstagram
} from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
const navigation = [
  { name: 'Home', href: '/', number: '01' },
  { name: 'Services', href: '/services', number: '02' },
  { name: 'Work', href: '/work', number: '03' },
  { name: 'About', href: '/about', number: '04' },
  { name: 'Contact', href: '/contact', number: '05' }
]

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY])

  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!open)
  }

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  }
  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  }
  const handleMenu = () => {
    if (scrollY > 500) {
      return 'bg-black bg-opacity-90 nav-bar'
    } else {
      return 'nav-bar'
    }
  }

  return (
    <nav className={handleMenu()}>
      {/* icon and ham menu container */}
      <div className="text-4xl flex justify-between items-center mt-2 p-2 space">
        <Link href="/">
          <a className="mt-2">
            <Image
              src="/logo.png"
              alt="reliance digital creative"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <div className="md:flex text-xl  items-center gap-20 hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.a className="hover-underline-animation cursor-pointer">
                <p className="text-sm">{link.number}</p>
                {link.name}
              </motion.a>
            </Link>
          ))}
        </div>

        <div
          className="md:hidden
          p-2 rounded-lg text-3xl"
        >
          {open ? (
            <AiOutlineClose
              onClick={onClick}
              className="cursor-pointer text-white"
            />
          ) : (
            <AiOutlineMenu
              onClick={onClick}
              className="cursor-pointer text-white "
            />
          )}
        </div>
      </div>
      {/* Mobile menu  */}
      <AnimatePresence>
        {' '}
        {open ? (
          // links container
          <motion.div
            className="
             p-4
             md:hidden
             bg-black
             bg-opacity-90 text-white"
            initial={{ height: 0 }}
            animate={{
              height: '100vh'
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { delay: 0.3, duration: 0.3 }
            }}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="flex flex-col gap-10 text-2xl"
            >
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.a
                    onClick={onClick}
                    variants={itemVariants}
                    className=" cursor-pointer"
                    rel="nofollow"
                  >
                    <p className="text-sm">{link.number}</p>
                    {link.name}
                  </motion.a>
                </Link>
              ))}
            </motion.div>
            {/* contact container */}
            <motion.div
              className="flex flex-col gap-3 mt-10 border-t border-gray-600 text-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.a
                className="hover:text-red-500  sm:mt-10  cursor-pointer underline text-emerald-500"
                variants={itemVariants}
                href="mailto:reliancedigitalcreative@gmail.com"
              >
                reliancedigitalcreative@gmail.com
              </motion.a>
              <motion.a
                className="sm:mt-10 hover:text-red-500 underline text-emerald-500"
                variants={itemVariants}
                href="tel:5108707804"
              >
                510-870-7804
              </motion.a>
              <motion.a
                className="hover:text-green-500 cursor-pointer flex gap-2 "
                variants={itemVariants}
                href="https://www.instagram.com/reliancecreative"
              >
                Instagram
                <AiOutlineInstagram className="mt-1" />
              </motion.a>
              <motion.a
                className="hover:text-green-500 cursor-pointer flex gap-2"
                variants={itemVariants}
                href="https://www.tiktok.com/@reliancedigitalcreative"
              >
                TikTok <FaTiktok className="mt-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}{' '}
      </AnimatePresence>
    </nav>
  )
}
