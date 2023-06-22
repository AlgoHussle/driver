import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const NavBar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src='/logo.svg' width={100} height={18} className='object-contain' alt='car hub logo' />
                </Link>

                <CustomButton 
                    text='Sign In'
                    btnType="button"
                    containerStyles='text-primary'
                />
            </nav>
        </header>
    )
}

export default NavBar