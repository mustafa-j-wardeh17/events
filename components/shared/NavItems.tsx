'use client'
import { headerLinks } from '@/Constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathName = usePathname()
    return (
        <ul className='md:flex-beteen flex w-full flex-col items-start gap-5 md:flex-row'>
            {
                headerLinks.map((link, index) => {
                    let isActive = pathName === link.route
                    return (
                        <li 
                        className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}
                        key={index}
                        >
                            <Link href={link.route}>
                                {link.label}
                            </Link>
                        </li>
                        )
                })
            }
        </ul>
    )
}

export default NavItems