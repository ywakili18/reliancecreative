import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
const WorkImage = ({ alt, image }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  return (
    <div>
      {!loading ? (
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
          />{' '}
          :
        </motion.div>
      ) : (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </div>
  )
}

export default WorkImage
