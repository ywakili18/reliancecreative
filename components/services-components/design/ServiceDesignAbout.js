import Button from '../../Button'
import Link from 'next/link'
const ServiceDesignAbout = () => {
  return (
    <section className="p-5 text-white mt-10 lg:ml-20">
      <p className="text-xl sm:text-4xl font-bold mb-5 ">
        We create high-end, stunning and engaging websites for your brand.
      </p>
      <div className="text-sm sm:text-xl flex flex-col gap-5 sm:gap-7 lg:w-3/5">
        <p>
          Your business will get a unique and responsive web presence that will
          bring your brand vision to the forefront.{' '}
        </p>
        <p className="mb-5">
          Build an attractive, client-friendly and nimble website that drives
          engagement and growth.
        </p>
      </div>
      <Link href="/contact">
        <a className="">
          <Button text=" Let's talk" />
        </a>
      </Link>
    </section>
  )
}

export default ServiceDesignAbout
