import Image from 'next/image'
const SeoHeader = () => {
  return (
    <section className="mt-40 scroll" id="seo">
      <header className="text-3xl sm:text-4xl md:text-5xl text-white text-center">
        <h3 className="text-gray-400 font-thin text-center mb-2 text-xl md:text-4xl">
          SEO (Search Engine Optimization)
        </h3>
        <h2 className="font-extralight text-emerald-500 mb-10">
          Our sites are all optimized
          <span className="font-bold text-white"> to drive visibility</span>
        </h2>
      </header>
      <div className="sm:w-5/6 m-auto">
        <Image
          alt="painting of woman, abstract art with two bikes."
          layout="responsive"
          height={'50%'}
          width={'100%'}
          objectFit="cover"
          src="/seo.jpg"
          priority
        ></Image>
      </div>
    </section>
  )
}

export default SeoHeader
