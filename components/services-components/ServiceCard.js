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
  altText,
  id
}) => {
  return (
    <div className=" p-5 md:p-10 mt-5 text-white" id={id}>
      <h2 className="text-xl font-bold sm:text-4xl  p-2 space">{header}</h2>
      <motion.div
        className="w-full m-auto shadow-lg bg-emerald-200 h-auto "
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={image}
          alt={altText}
          width={200}
          height={150}
          layout="responsive"
          priority
        />
      </motion.div>
    </div>
  )
}

export default ServiceCard
