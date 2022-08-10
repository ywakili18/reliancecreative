import React from 'react'
import Link from 'next/link'
import Button from '../Button'
const HomeFooter = () => {
  return (
    <div className="text-center bg-emerald-100 p-10">
      <p>Have questions?</p>
      <a href="tel:5108707804">
        <Button text="Call us for a free consultation today!" />
      </a>
    </div>
  )
}

export default HomeFooter
