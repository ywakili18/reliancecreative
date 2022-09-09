import React from 'react'
import { Card } from 'flowbite-react'
import Link from 'next/link'
const WorkCard = () => {
  const projectDetails = [
    {
      image: '/vincent.webp',
      header: 'Vincent Robertson, lawyer',
      description: 'Landing page for laywer based in Los Angeles.',
      href: '/work/vincent',
      alt: 'Screenshot of vincent law website'
    },
    {
      image: '/munchiez.webp',
      header: 'Munchiez',
      description: 'Landing page for food service delivery app.',
      href: '/work/munchiez',
      alt: 'Screenshot of munchiez app'
    },
    {
      image: 'regVush.webp',
      header: 'Vush',
      description: 'E-Commerce platform for footwear.',
      href: '/work/vush',
      alt: 'Screenshot of vush app'
    },
    {
      image: 'thomason.webp',
      header: 'Thomason Real Estate Group',
      description:
        'Real Estate Agency serving the Los Angeles County and California market.',
      href: '/work/thomason',
      alt: 'Screenshot of munchiez app'
    }
  ]
  return (
    <div className=" justify-between gap-32 lg:p-20 flex flex-col w-4/5 m-auto">
      {projectDetails.map((project) => (
        <div key={project.header} className="text-center">
          <Card imgSrc={project.image} imgAlt={project.alt}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.header}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <Link href={project.href}>
              <button className="border border-black m-auto text-black w-1/3 p-1 text-sm sm:text-lg font-medium hover:text-white hover:bg-black transition-all">
                View more
              </button>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default WorkCard
