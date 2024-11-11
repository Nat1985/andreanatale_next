import React from 'react'


function Desktop({ menuList }) {
  return (
    <div className='hidden md:flex'>
      <ul className='text-3xl flex gap-8'>
        {
          menuList.map((element, index) => (
            <li key={index} className='field'>{element.label}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Desktop
