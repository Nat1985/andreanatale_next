import React from 'react'

function PostSection({ data, isEven }) {
    console.log('data: ', data)
    return (
        <div className={`${isEven ? 'bg-rose-200' : 'bg-rose-100'} w-full px-8 md:px-32 lg:px-64`}>
            Post section
        </div>
    )
}

export default PostSection
