import Link from 'next/link'
const ThankYou = () => {
  return (
    <div className="mt-60  text-white flex flex-col gap-10 h-screen lg:p-40 text-3xl md:text-6xl">
      <p className="mt-10 font-bold">
        {' '}
        Thank you for your message. We will respond back to you as soon as
        possible.
      </p>
      <p className="font-thin text-gray-300">- Reliance Digital Creative</p>
      <Link href="/">
        <a className="text-rose-500 hover:text-rose-800">Return Home</a>
      </Link>
    </div>
  )
}

export default ThankYou
