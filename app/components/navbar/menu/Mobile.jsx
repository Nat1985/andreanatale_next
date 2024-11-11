"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import useMainStore from '@/app/zustand/mainStore'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Mobile({ menuList }) {
  // Gestisco apertura e chiusura del menu
  const { isOpen, setBurger } = useMainStore();

  // Gestisco apertura del menu
  const overlayRef = useRef();
  const menuRef = useRef();
  const openMenu = () => setBurger(true)
  useEffect(() => {
    if (isOpen) {
      // Overlay
      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
      });
      // Menu panel
      gsap.from(menuRef.current, {
        x: 200,
        duration: 0.2
      })
      // Menu list
      gsap.from('.field', {
        x: 400,
        stagger: 0.1,
        duration: 0.4
      });
    }
  }, [isOpen])

  // Gestisco chiusura del menu
  const closeMenu = (link) => {
    console.log(link)
    // Overlay
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
    });
    // Menu list
    gsap.to('.field', {
      x: 400,
      stagger: 0.1,
      duration: 0.2
    });
    // Menu panel
    gsap.to(menuRef.current, {
      x: 400,
      duration: 0.2,
      delay: 0.2
    });
    setTimeout(() => {
      setBurger(false)
    }, 800)
  }
  return (
    <div className='md:hidden'>
      <div className='w-8 flex justify-center' onClick={openMenu}><Image src="/icons/dots-menu.svg" width={32} height={32} /></div>
      {
        isOpen &&
        <div className='fixed inset-0 flex'>
          <div ref={overlayRef} className='h-full flex-grow bg-black/80' onClick={() => closeMenu(null)}></div>
          <div ref={menuRef} className='h-full w-[300px] bg-white flex flex-col p-4 justify-center'>
            <div className='fixed top-5 right-4'><img src="icons/arrow-right.svg" alt="close" width={32} height={32} onClick={() => closeMenu(null)} /></div>
            <ul className='text-4xl flex flex-col gap-8 mt-16 p-4'>
              {
                menuList.map((element, index) => (
                  <li key={index} className='field' onClick={() => closeMenu(element.link)}>{element.label}</li>
                ))
              }
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Mobile
