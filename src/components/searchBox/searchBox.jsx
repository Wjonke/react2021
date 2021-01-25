import React from 'react'
import './searchBox.css'


//by passing down these two things from props we can make them dynamic

export const SearchBox = ({placeholder, onChange}) => {
    return (
        <div>
            <input
                className="search"
                type='search'
                placeholder={placeholder}
                onChange={onChange}
            /> 
        </div>
    )
}
