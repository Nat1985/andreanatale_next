"use client"

import useScrollPosition from '@/app/hooks/useScrollPosition'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


function Desktop({ menuList }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (link) => {
    if (link === "/works") {
      if (pathname !== "/") router.push("/");
      setTimeout(() => {
        window.scrollTo({
          top: 1170,
          behavior: 'smooth'
        })
      }, 100)
    };
    if (link === "/contact") {
      if (pathname !== "/") router.push("/");
      setTimeout(() => {
        window.scrollTo({
          top: 4595,
          behavior: 'smooth'
        })
      }, 100)
    };
    if (link === "/blog") {
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
