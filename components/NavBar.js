import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { useState } from 'react'
const navigation = [
  { name: 'Home', href: '/', number: '01' },
  { name: 'Services', href: '/services', number: '02' },
  { name: 'Contact', href: '/contact', number: '03' },
  { name: 'About', href: '/about', number: '04' }
]

export default function NavBar() {
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
  return (
    <nav className="top-0  p-10 fixed w-full z-10">
      {/* icon and ham menu container */}
      <div className="text-4xl flex justify-between ">
        <Link href="/">
          <a>
            {' '}
            <Image
              src="/logo1.png"
              alt="reliance digital creative"
              width={100}
              height={100}
            />
          </a>
        </Link>

        <div className="sm:mt-5 mt-7 hover:text-emerald-500 transition-all">
          {open ? (
            <AiOutlineClose onClick={onClick} className="cursor-pointer" />
          ) : (
            <AiOutlineMenu onClick={onClick} className="cursor-pointer" />
          )}
        </div>
      </div>
      {/* full sized menu */}
      <AnimatePresence>
        {' '}
        {open ? (
          // links container
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center text-2xl font-bold justify-around sm:p-10 "
            initial={{ height: 0 }}
            animate={{
              height: '80vh'
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { delay: 0.5, duration: 0.3 }
            }}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="flex flex-col gap-20 sm:gap-24 mt-auto mb-auto"
            >
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.a
                    onClick={onClick}
                    variants={itemVariants}
                    className="hover-underline-animation cursor-pointer"
                  >
                    <p className="text-sm">{link.number}</p>
                    {link.name}
                  </motion.a>
                </Link>
              ))}
            </motion.div>
            {/* contact container */}
            <motion.div
              className="flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <p className="flex text-3xl sm:text-5xl gap-5 ">
                <motion.a
                  className="hover:text-green-500 cursor-pointer"
                  variants={itemVariants}
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <AiOutlineFacebook />
                </motion.a>

                <motion.a
                  className="hover:text-green-500 cursor-pointer"
                  variants={itemVariants}
                  href="https://www.instagram.com/reliancedm"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="hover:text-green-500 cursor-pointer"
                  variants={itemVariants}
                >
                  <AiOutlineLinkedin />
                </motion.a>
              </p>{' '}
              <Link href="mailto:reliancedigitalcreative@gmail.com">
                <motion.a
                  className="hover:text-red-500 text-lg sm:text-2xl sm:mt-10 mt-2"
                  variants={itemVariants}
                >
                  reliancedigitalcreative@gmail.com
                </motion.a>
              </Link>
              <Link href="tel:5108707804">
                <motion.a className="sm:mt-10" variants={itemVariants}>
                  <Button text={5108707804} />
                </motion.a>
              </Link>
            </motion.div>{' '}
          </motion.div>
        ) : null}{' '}
      </AnimatePresence>
    </nav>
  )
}
