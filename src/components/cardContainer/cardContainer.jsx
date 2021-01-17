import React from 'react'
import './cardContainer.css'

export const CardContainer = (props) => {
    return (
        props.children.length > 1 ? 
            <div className='card-container'>{props.children}</div> : 
            <div><h1>NO LIST TO SHOW</h1></div> 
    )  
}




