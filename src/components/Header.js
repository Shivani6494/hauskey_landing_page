import React from 'react'
import '../App.css'
import HauskeyLogo from '../assests/HauskeyLogo/Hauskey.png';
export default function Header() {
    return (
        <div className='header'>
            <span className='header-title'>
                <img src={HauskeyLogo} className='header-logo'/>
            </span>
        </div>
    )
}
