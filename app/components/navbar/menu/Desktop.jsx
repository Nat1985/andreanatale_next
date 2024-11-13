"use client"

import useScrollPosition from '@/app/hooks/useScrollPosition'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function Desktop({ menuList }) {
  const router = useRouter();
  const handleClick = (link) => {
    if(link === "/works") {
      window.scrollTo({
        top: 1170,
        behavior: 'smooth'
      })
    };
    if(link === "/contact") {
      window.scrollTo({
        top: 4595,
        behavior: 'smooth'
      })
    };
    if(link === "/blog") {
      router.push("/blog")
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
