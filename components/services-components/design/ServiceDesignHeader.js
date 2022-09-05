import React from 'react'
import Image from 'next/image'
const ServiceDesignHeader = () => {
  return (
    <section className="mt-40 scroll" id="design">
      <header className="text-3xl sm:text-4xl md:text-5xl text-white text-center">
        <h3 className="text-gray-400 font-thin text-center mb-2  text-xl md:text-4xl">
          Web Design &amp; Development
        </h3>
        <h2 className="font-extralight text-emerald-500 mb-10">
          Drive your brand forward with{' '}
          <span className="font-bold text-white">
            thoughtful, creative design.
          </span>
        </h2>
      </header>
      <div className="sm:w-5/6 m-auto">
        <Image
          alt="people working"
          layout="responsive"
          height={'50%'}
          width={'100%'}
          objectFit="cover"
          src="/people.jpg"
          priority
        ></Image>
      </div>
    </section>
  )
}

export default ServiceDesignHeader
