import Button from '../../Button'
import Link from 'next/link'
const ServiceDesignProcess = () => {
  return (
    <section className="p-5 text-white flex flex-col gap-5 mt-28 lg:mt-48 lg:ml-20">
      <h3 className=" font-bold text-3xl md:text-6xl">Our Process</h3>
      <p className="text-sm md:text-xl lg:text-xl">
        We push brands digitally with 10+ years experience in UI/UX web design,
        web development, and site optimization. Our design-driven, strategy-led
        approach will allow a seamless experience working with us.
      </p>
      <p className="text-sm md:text-xl lg:text-xl">
        After a free consultation, we begin with a discovery phase, learning
        about business, market, goals, vision, and most importantly you. We then
        execute our design and development stage of the website project,
        building mood boards, wireframes, and site archetecture. Every website
        is built with a mobile first and accessible approach, meaning it will
        work well on all devices and for all users.
      </p>
      <div>
        <Link href="/work">
          <Button text="View our work" />
        </Link>
      </div>
    </section>
  )
}

export default ServiceDesignProcess
