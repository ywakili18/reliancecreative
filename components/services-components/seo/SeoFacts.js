import Image from 'next/image'
const SeoFacts = () => {
  const designServices = [
    { name: 'Keyword Research' },
    { name: 'Authoritative Content' },
    { name: 'Site Optimization' },
    { name: 'Link Building' },
    { name: 'Proper Metadata' }
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
          alt="Person holding tablet using google search"
          src="/google.jpg"
          layout="responsive"
          height={'100%'}
          width={'100%'}
          objectFit="contain"
        />
      </aside>
    </section>
  )
}

export default SeoFacts
