import React, { useEffect } from 'react'
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as IconMenu } from '../../assets/images/icon-menu.svg';
import { ReactComponent as CloseICon } from '../../assets/images/icon-menu-close.svg';
import { useState } from 'react';
function Header() {
  
  const [menuState,setMenuState] = useState('');
  const [overlayState,setOverlayState] = useState('');
  useEffect(()=>{
    if(window.innerWidth <= 1044)
    {
      setMenuState('hidden');
    }
  },[window.innerWidth])

  const menuHandler = ()=>{
    
    const state = menuState === '' ? 'hidden' : '';
    setMenuState(state);
    setOverlayState(state==='hidden' ? '' : 'overlay');
  }

  return (
    <div className='header'>
        <div className='logo-container'>
            <Logo/>
        </div>
        <IconMenu onClick={()=>menuHandler()} className='icon-menu '/>
        
        <div>
        <ul className={`menu ${menuState}`}>
            <CloseICon onClick={()=>menuHandler()} className='close'/>
            <li className='menu-element'><a href='#'>home</a></li>
            <li className='menu-element'><a href='#'>new</a></li>
            <li className='menu-element'><a href='#'>popular</a></li>
            <li className='menu-element'><a href='#'>trending</a></li>
            <li className='menu-element'><a href='#'>categories</a></li>
        </ul>
        </div>
        <div className={`${overlayState}`}></div>
    </div>
  )
}

export default Header;