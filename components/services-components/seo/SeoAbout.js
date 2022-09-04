import Button from '../../Button'
import Link from 'next/link'
const SeoAbout = () => {
  return (
    <section className="p-5 text-white mt-10 lg:ml-20">
      <p className="text-xl sm:text-4xl font-bold mb-5 ">
        Building a strong online presence to boost your search rankings.
      </p>
      <div className="text-sm sm:text-xl flex flex-col gap-5 sm:gap-7 lg:w-3/5">
        <p>
          SEO (Search Engine Optimization) is a long term marketing tactic used
          to connect your brand to people from all over the world, all through a
          search engine.{' '}
        </p>
        <p className="mb-5">
          Every website we build is implemented with best SEO practices to boost
          your visiblity and gain exposure.
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

export default SeoAbout
