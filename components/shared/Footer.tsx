import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
        <Image
        src="/assets/Mecon logo.svg"
        alt='logo'
        width={48}
        height={48}
        />
        </Link>

        <p >Gatepass. All Rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer