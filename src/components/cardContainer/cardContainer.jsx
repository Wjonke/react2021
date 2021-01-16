import React from 'react'
import './cardContainer.css'

export const CardContainer = (props) => {
    console.log(props.users);
    if (props.users.length > 1){
        return (
            <div 
            className='.card-container' 
            // style={{border:'1px solid black'}}
            >

                {props.users.map((user) => (
                        <h1 key={user.id}>{user.name}</h1>
                ))}

            </div>
        )

    } else {
        
        return (
            <div>
     <h1>NO LIST</h1>
            </div> 
        ) 
    }
   
}


