import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row border-t'>
            <Link href={'/'}>
                <Image
                    src={'/assets/images/logo.svg'}
                    height={38}
                    width={128}
                    alt='logo'
                />
            </Link>
            <p>2024 Evently. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer