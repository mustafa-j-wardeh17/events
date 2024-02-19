import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
import NavItems from './NavItems'

const MobileNavItems = () => {
    return (
        <nav className='md:hidden flex-col'>
            <Sheet>
                <SheetTrigger
                    className='align-middle'
                >
                    <Image
                        src={'/assets/icons/menu.svg'}
                        alt='menu'
                        height={24}
                        width={24}
                        className='cursor-pointer'
                    />

                </SheetTrigger>
                <SheetContent className='flex flex-col bg-white gap-6 md:hidden'>
                    <Image
                        src={'/assets/images/logo.svg'}
                        width={128}
                        height={38}
                        alt='logo'
                    />
                    <Separator className='border border-gray-50' />
                    <NavItems/>
                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNavItems