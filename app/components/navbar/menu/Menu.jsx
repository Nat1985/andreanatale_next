import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Menu() {
  const menuList = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Blog',
      link: '/blog'
    },
    {
      label: 'Works',
      link: '/works'
    },
    {
      label: 'Videogames',
      link: '/videogames'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
  ]
  return (
    <div>
      <Mobile menuList={menuList}/>
      <Desktop menuList={menuList} />
    </div>
  )
}

export default Menu
