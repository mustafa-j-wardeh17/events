import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout