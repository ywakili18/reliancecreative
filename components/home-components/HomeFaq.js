import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
const details = [
  {
    id: 0,
    question:
      'What is Reliance Digital Creative and how long have you been in business for?',
    answer:
      '• We are a full service web solutions company from the San Francisco Bay Area, California.',
    answer2:
      '• Reliance Digital Creative has been building digital experiences for over 10+ years.'
  },
  {
    id: 1,
    question: 'What services does Reliance Digital Creative offer?',
    answer:
      '• Reliance Digital Creative will build, redesign, or optimize your website for your business. For traditional sites, we build and host  with webflow, shopify, or if your business needs a custom web app - we can handle that as well.',
    answer2:
      '• Custom web apps are typically built with HTML, CSS, JavaScript, React, Next.js, and more depending on the needs and fit of the web app.',
    answer3:
      '• In addition to our web services, we can optimize your site for SEO (Search Engine Optimization), accessibility, and branding services such as content writing or logo creation. '
  },
  {
    id: 2,
    question: 'What industries does Reliance Digital Creative work with?',
    answer:
      '• We work with all industries and brands. We have collaborated with many different businesses small, medium, and large.',
    answer2:
      '• Examples are: Real Estate Agencies, Auto Brokers, Manufacturing, Hospitality, Barbers/Salons, Landscaping, Roofing, Restaurants, Lawyers, and more.'
  },
  {
    id: 3,
    question:
      ' What is the typical process of working with Reliance Digital Creative?',
    answer:
      '• We believe in being authentic, transparent, and delivering quality from the start of the project.',
    answer2:
      '• We work on a per project basis. We work as efficient as possible in delivering the best results for you. After a free consultation and agreeing to the project - we work on discovering your brand, business, vision, and needs for the business.',
    answer3:
      '• After the discovery phase, starts the designing stage where we bring your idea before developing the website or brand. Finally, we bring the idea to life and deliver the best website for you.'
  }
]
const HomeFaq = () => {
  const [show, setShow] = useState(null)

  const handleClick = (i) => {
    if (show === i) {
      return setShow(null)
    }
    setShow(i)
  }
  return (
    <div className="mt-10 mb-10 sm:w-3/4 m-auto p-10 sm:p-0">
      <h2 className="text-center sm:text-left text-2xl sm:text-5xl space mb-10">
        Frequently Asked Questions
      </h2>
      {details.map((detail, item) => (
        <div
          key={detail.id}
          className="flex flex-col gap-2 mt-2 text-sm sm:text-lg"
          onClick={() => handleClick(item)}
        >
          <p className="font-bold flex flex-col gap-3 sm:flex-row shadow bg-gray-100 rounded justify-between p-5 cursor-pointer">
            {detail.question}{' '}
            {show === item ? (
              <AiFillCloseCircle className="text-3xl text-red-500" />
            ) : (
              <BsFillArrowRightCircleFill className="text-2xl text-emerald-500" />
            )}
          </p>
          {show === item ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5
                }
              }}
              exit={{ opacity: 0 }}
              className="text-sm flex flex-col gap-2 sm:text-lg bg-emerald-100 p-5 font-light"
            >
              <p>{detail.answer}</p>
              <p>{detail.answer2}</p>
              <p>{detail.answer3}</p>
            </motion.div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}

export default HomeFaq
