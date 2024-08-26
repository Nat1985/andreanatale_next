import React from 'react'

function Card({ children }) {
    return (
        <div className='w-full border border-pink-500 flex flex-col gap-2 rounded p-2 my-3 bg-white cursor-pointer'>
            {children}
        </div>
    )
}

export default Card
