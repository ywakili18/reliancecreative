import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const WorkImage = ({ alt, image }) => {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={image}
        alt={alt}
        width={700}
        height={2000}
        objectFit="contain"
      />
    </motion.div>
  )
}

export default WorkImage
