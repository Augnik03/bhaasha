import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'><span className='text-2xl text-red-500 bold'>भा</span><span className='text-xl text-yellow-400 font-semibold'>sha</span></h1></a>
            <div className='gap-4 flex items-center '>
                
                <a href="/" className='flex items-center text-sm gap-2 specialBtn px-3 py-2 rounded-full text-yellow-400'>
                    <p className='text-lg'>New</p>
                    <i className="text-xl fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
