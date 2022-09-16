import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { RotatingSquare } from 'react-loader-spinner'
export default function TextReveal() {
  const placeholderText = [
    { type: 'heading1', text: 'Reliance Digital Creative' }
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      animate={'visible'}
      variants={container}
    >
      <div className="flex justify-center items-center h-screen">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />
        })}{' '}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          {' '}
          <RotatingSquare
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
