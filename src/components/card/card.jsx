import React from 'react'
import './card.css'

export const Card = (props) => {
    return (
        <div className='cardStyle'>
            <img alt='user' src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}/>
            <h2>{props.user.name}</h2>
            <p>ID: {props.user.id}</p>
            <p>Email: {props.user.email}</p>
            <p>UserName: {props.user.username}</p>
        </div>
    )
}
