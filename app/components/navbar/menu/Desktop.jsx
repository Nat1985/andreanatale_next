"use client"

import useScrollPosition from '@/app/hooks/useScrollPosition'
import React, { useEffect } from 'react'


function Desktop({ menuList }) {
  const scrollPosition = useScrollPosition();
  useEffect(() => {
    console.log(scrollPosition)
  }, [scrollPosition])
  const handleClick = (link) => {
    console.log(link)
    if(link = "/works") {
      window.scrollTo({
        top: 1170,
        behavior: 'smooth'
      })
    }
    if(link = "/contacts") {
      window.scrollTo({
        top: 4595,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className='hidden md:flex items-center'>
      <ul className='text-2xl flex gap-8'>
        {
          menuList.map((element, index) => (
            <li key={index} className='field cursor-pointer' onClick={() => handleClick(element.link)}>{element.label}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Desktop
