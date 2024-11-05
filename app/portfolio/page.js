import React from 'react'
import Feed from './components/Feed'
import ScrollPlaceholder from '../components/ScrollPlaceholder'

function Portfolio() {
    return (
        <main className="mt-4 flex flex-col gap-4">
            <ScrollPlaceholder />
            <h2 className="text-center mb-4">Portfolio <span className="text-indigo-800">applicativi web</span></h2>

            <Feed />
        </main>
    )
}

export default Portfolio
