import React from 'react'

const HomeFaq = () => {
  const details = [
    {
      question: 'What is Reliance Digital Creative?',
      answer:
        '- We are a full service web solutions company from the San Francisco Bay Area, California.'
    },
    {
      question: 'What services does Reliance Digital Creative offer?',
      answer:
        '- Reliance Digital Creative will build, redesign, or optimize your website for your business. For tradtional sites, we build it with webflow, shopify, or if your business needs a custom web app - we can handle that as well.',
      answer2:
        '- Custom web apps are typically built with HTML, CSS, JavaScript, React, Next.js, and more depending on the needs and fit of the web app.',
      answer3:
        '- In addition to our web services, we can optimize your site for SEO (Search Engine Optimization), accessibility, and branding services such as content writing or logo creation. '
    },
    {
      question: 'What industries does Reliance Digital Creative work with?',
      answer:
        '- We work with all industries - we are not specific and have experience working with many different businesses.',
      answer2:
        '- Examples are: Real Estate Agencies, Auto Brokers, Manufacturing, Hospitality, Barbers/Salons, Landscaping, Roofing, Restaurants, Lawyers, and more.'
    },
    {
      question:
        'What is the typical process of working with Reliance Digital Creative?',
      answer:
        '- We believe in being authentic, transparent, and delivering quality from the start of the project.',
      answer2:
        '- We work on a per project basis. We work as efficient as possible in delivering the best results for you. After a free consultation and agreeing to the project - we work on discovering your brand, business, vision, and you.',
      answer3:
        '- After the discovery phase, starts the designing stage where we bring your idea before developing the website or brand. Finally, we bring the idea to life and deliver the best website for you.'
    }
  ]
  return (
    <div className="mt-10 mb-10 sm:w-3/4 m-auto p-10 sm:p-0">
      <h2 className="text-center sm:text-left text-2xl sm:text-5xl space mb-10">
        Frequently Asked Questions
      </h2>
      {details.map((detail) => (
        <div
          key={detail.question}
          className="flex flex-col gap-2 mt-2 text-sm sm:text-lg"
        >
          <p className="font-bold">{detail.question}</p>
          <p>{detail.answer}</p>
          <p>{detail.answer2}</p>
          <p>{detail.answer3}</p>
        </div>
      ))}
    </div>
  )
}

export default HomeFaq
