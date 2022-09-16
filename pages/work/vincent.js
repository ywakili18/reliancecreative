import Link from 'next/link'
import WorkImage from '../../components/work-components/WorkImage'
import Head from 'next/head'
import { ColorRing } from 'react-loader-spinner'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'

const vincent = () => {
  return (
    <div className="mt-40">
      <div className="lg:ml-14 mb-10 ml-2">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Link href="/">
            <Breadcrumb.Item icon={HiHome}>
              <span className="text-white hover:text-gray-400 cursor-pointer">
                Home
              </span>
            </Breadcrumb.Item>
          </Link>
          <Link href="/work">
            <Breadcrumb.Item>
              {' '}
              <span className="text-white hover:text-gray-400 cursor-pointer">
                Work
              </span>
            </Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item>Vincent Robertson Law</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Head>
        <title>
          Work - Vincent Robertson | Reliance Digital Creative | Web Design,
          Development, SEO services | Branding Located in the San Francisco Bay
          Area | Silicon Valley.
        </title>
        <meta
          name="description"
          content="Reliance Digital Creative: Work - Vincent Robertson, a web design project for a lawyer based company based out of Los Angeles County. Reliance Digital Creative offers Web Design, SEO, Web Development, Branding, and Content writing services for your business."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className=" flex flex-col text-white">
        {/* main text container */}
        <div className="flex justify-around flex-col md:flex-row">
          {/* header */}
          <div className="lg:w-1/2 p-2 flex flex-col  lg:items-start justify-between md:justify-start gap-10 md:mt-10">
            <h1 className=" font-bold text-3xl lg:text-5xl ">
              Vincent Robertson{' '}
              <span className="font-light">Business law.</span>
            </h1>
            {/* details - project type*/}
            <div className="flex flex-col w-full">
              <h2 className=" font-bold text-xl lg:text-3xl md:mt-10">
                Project Type
              </h2>
              <ul className="font-thin lg:text-xl mt-2">
                <li className=" list-none">UI/UX Design</li>
                <li className=" list-none">Content Writing</li>
                <li className=" list-none">Custom Web Development</li>
                <li className=" list-none">Logo Design</li>
                <li className=" list-none">SEO optimization</li>
              </ul>
            </div>
            <div className="flex flex-col w-full">
              <h2 className=" font-bold text-xl lg:text-3xl md:mt-10">
                Project Details
              </h2>
              <p className="font-thin lg:text-xl mt-2">
                Vincent Robertson, a lawyer based out of the LA area, practicing
                business and entertainment law.
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

          <WorkImage alt="screen shot of munchiez app" image="/vincentk.webp" />
        </div>
      </div>
    </div>
  )
}

export default vincent
