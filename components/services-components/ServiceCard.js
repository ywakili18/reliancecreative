import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'

const ServiceCard = ({
  header,
  first,
  second,
  third,
  fourth,
  buttonText,
  image,
  altText
}) => {
  return (
    <div className="flex md:flex-col flex-col-reverse lg:flex-row gap-40 p-5 md:p-10 mt-5">
      {/* text */}
      <motion.div
        className="text-lg text-left md:text-xl
        lg:text-2xl flex flex-col gap-10 text-black "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-xl font-bold sm:text-4xl  p-2 space">{header}</h2>
        <div className="flex flex-col  gap-5 lg:w-3/4 sm:text-lg text-sm">
          <p>{first}</p>
          <p>{second}</p>
          <p>{third}</p>
          <p>{fourth}</p>
          <Link href="/contact">
            <a className="">
              <Button text={buttonText} />
            </a>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-3/4 sm:w-1/4 lg:ml-10 m-auto shadow-lg bg-emerald-200 h-auto"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={image}
          alt={altText}
          width={1000}
          height={2000}
          layout="responsive"
          priority
        />
      </motion.div>
    </div>
  )
}

export default ServiceCard
