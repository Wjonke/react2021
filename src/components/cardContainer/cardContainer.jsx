import React from 'react'
import {Card} from '../card/card'
import './cardContainer.css'

export const CardContainer = props =>  (
    <div className='card-container'>
        {
            
            props.users.map((user) => ( <Card key={user.id} user={user}/> )) 
        }
    </div>
       
    )  





