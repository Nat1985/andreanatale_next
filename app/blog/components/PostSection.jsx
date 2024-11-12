import React from 'react'

function PostSection({ isEven }) {
    return (
        <div className={`${isEven ? 'bg-cyan-100' : 'bg-cyan-200'}`}>
            Post section
        </div>
    )
}

export default PostSection
