import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
const WorkImage = ({ alt, image }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
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
        <CirclesWithBar
          height="500"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      )}
    </div>
  )
}

export default WorkImage
