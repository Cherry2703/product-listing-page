import React from 'react'


import './index.css'

const NavLinks = ({each}) => {
    

    
  return (
    <li className='each-navlink-btn'>
        <button>{each.name}</button>
    </li>
  )
}

export default NavLinks