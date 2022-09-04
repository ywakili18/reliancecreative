import Button from '../../Button'
import Link from 'next/link'
const BrandAbout = () => {
  return (
    <section className="p-5 text-white mt-10 lg:ml-20">
      <p className="text-xl sm:text-4xl font-bold mb-5 ">
        Content that aligns with your brand, the core of our design strategy.
      </p>
      <div className="text-sm sm:text-xl flex flex-col gap-5 sm:gap-7 lg:w-3/5">
        <p>
          Building a digital presence with the content that communicates your
          brand and vision to your clients is a key focus in each project.
        </p>
        <p className="mb-5">
          We assist your brand by creating impactful content creation - from
          text, images, videos, brand, logo, and to your vision statement.
          During our process in working with you, we analyze your site to ensure
          your brand communicates effectively with your target audience and thus
          grow your business.
        </p>
        <Link href="/contact">
          <a className="">
            <Button text=" Let's talk" />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default BrandAbout
