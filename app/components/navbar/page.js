import React from 'react'
import Logo from './Logo'
import Menu from './menu/Menu'

function Navbar() {
    return (
        <div className='fixed h-[80px] p-4 w-full flex justify-between z-10'>
            <Logo />
            <Menu />
        </div>
    )
}

export default Navbar
