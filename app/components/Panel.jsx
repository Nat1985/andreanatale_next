import React from 'react'

function Panel({ children }) {
    return (
        <div className={`bg-white w-full rounded p-4 flex flex-col justify-center`}>
            { children }
        </div>
    )
}

export default Panel
