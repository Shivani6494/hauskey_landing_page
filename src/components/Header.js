import React from 'react'
import '../App.css'
import HauskeyLogo from '../assests/HauskeyLogo/Hauskey.png';
export default function Header() {
    return (
        <div className='header'>
            <span className='header-title'>
                <img src={HauskeyLogo} height='70px' width='100px'/>
            </span>
        </div>
    )
}
