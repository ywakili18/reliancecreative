import Image from 'next/image'
const ServiceDesignFacts = () => {
  const designServices = [
    { name: 'Responsive Design' },
    { name: 'Moodboards' },
    { name: 'Site Architecture' },
    { name: 'Wireframing' },
    { name: 'User Interface/User Experience' },
    { name: 'Accessibility' },
    { name: 'Webflow Development' },
    { name: 'Custom Web Development' }
  ]
  return (
    <section className="text-white p-5 lg:flex lg:gap-40 lg:ml-20 mt-20">
      <aside className="flex flex-col lg:gap-7 ml-16 sm:ml-0">
        {designServices.map((service) => (
          <p
            key={service.name}
            className="text-xl md:text-3xl lg:text-4xl transition-all hover:text-emerald-500"
          >
            - {service.name}
          </p>
        ))}
      </aside>
      <aside className="w-full lg:w-1/2 mt-10">
        <Image
          alt="Computer with design tools on screen."
          src="/services.jpg"
          layout="responsive"
          height={'100%'}
          width={'100%'}
          objectFit="contain"
          priority
        />
      </aside>
    </section>
  )
}

export default ServiceDesignFacts
