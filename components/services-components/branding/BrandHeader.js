import Image from 'next/image'
const BrandHeader = () => {
  return (
    <section className="mt-40 scroll" id="branding">
      <header className="text-3xl sm:text-4xl md:text-5xl text-white text-center">
        <h3 className="text-gray-400 font-thin text-center mb-2 text-xl md:text-4xl">
          Branding &amp; Content Strategy
        </h3>
        <h2 className="font-extralight text-emerald-500 mb-10">
          Bring your idea
          <span className="font-bold text-white"> to the forefront.</span>
        </h2>
      </header>
      <div className="sm:w-5/6 m-auto">
        <Image
          alt="Person writing on paper with marker, iphone in middle of paper."
          layout="responsive"
          height={'50%'}
          width={'100%'}
          objectFit="cover"
          src="/branding.jpg"
          priority
        ></Image>
      </div>
    </section>
  )
}

export default BrandHeader
