import React from 'react'
import '../App.css'

export default function Card(props) {
    return (
       
                <div className={props.className} >
                    <div className="small-div">
                        
                        <img className="section-image" src={props.img} width={props.width}  alt=''/>
                    </div>
        
                    <div className="big-div">
                        <span className='div-title'>
                            {props.title}
                        </span>
                        <br/>
                        <span>
                            {props.description}
                        </span>
                    </div>
                </div>
    )
}
