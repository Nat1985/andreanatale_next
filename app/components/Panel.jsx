import React from 'react'

function Panel({ children, isBlack }) {
    return (
        <div className={`bg-white ${isBlack && 'bg-black text-white'} w-full rounded lg:rounded-none p-4 py-16 md:px-[100px] lg:px-[200px] xl:px-[300px] flex flex-col justify-center md:items-center text-center`}>
            { children }
        </div>
    )
}

export default Panel
