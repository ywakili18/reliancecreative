import Link from 'next/link'
import WorkImage from '../../components/work-components/WorkImage'
import Head from 'next/head'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
const munchiez = () => {
  return (
    <div className="mt-40">
      <div className="lg:ml-14 mb-10 ml-2">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            <span className="text-white hover:text-gray-400">Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/work">
            {' '}
            <span className="text-white hover:text-gray-400">Work</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Munchiez</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Head>
        <title>
          Work - Munchiez | Reliance Digital Creative | Web Design, Development,
          SEO services | Branding Located in the San Francisco Bay Area |
          Silicon Valley.
        </title>
        <meta
          name="description"
          content="Reliance Digital Creative: Work - Munchiez, a web design project for a start up based company based out of the SF Bay Area. Reliance Digital Creative offers Web Design, SEO, Web Development, Branding, and Content writing services for your business."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className=" flex flex-col text-white">
        {/* main text container */}
        <div className="flex justify-around flex-col md:flex-row">
          {/* header */}
          <div className="lg:w-1/2 p-2 flex flex-col  lg:items-start justify-between md:justify-start gap-10 md:mt-10">
            <h1 className=" font-bold text-3xl lg:text-5xl">
              Munchiez,{' '}
              <span className="font-light">
                start up food delivery service.
              </span>
            </h1>
            {/* details - project type*/}
            <div className="flex flex-col w-full">
              <h2 className=" font-bold text-xl lg:text-3xl md:mt-10">
                Project Type
              </h2>
              <ul className="font-thin lg:text-xl mt-2">
                <li className=" list-none">Web Design</li>
                <li className=" list-none">Content Writing</li>
                <li className=" list-none">Webflow Development</li>
                <li className=" list-none">Responsive UI/UX Design</li>
                <li className=" list-none">Logo Branding</li>
              </ul>
            </div>
            <div className="flex flex-col w-full">
              <h2 className=" font-bold text-xl lg:text-3xl md:mt-10">
                Project Details
              </h2>
              <p className="font-thin lg:text-xl mt-2">
                Munchiez is a SF Bay Area based start up, they are redefining
                how food delivery is ran seamlessly for its drivers and
                customers. Reliance Digital Creative partnered with Munchiez to
                design, develop, content create, and logo design.
              </p>
            </div>
            <div className="">
              {' '}
              <Link href="/work">
                <a
                  className=" border-white border
         hover:text-black hover:bg-white p-2 
         transition-all lg:w-1/6  text-center mb-5"
                >
                  Back to Portfolio
                </a>
              </Link>
            </div>
          </div>

          <WorkImage
            alt="screen shot of munchiez app"
            image="/longMunchiez.webp"
          />
        </div>
      </div>
    </div>
  )
}

export default munchiez
