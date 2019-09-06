import React from 'react';
import searchIcon from '../assets/images/search-icon.svg'

export function Search() {
    return (
        <div className="search-box">
            <input className="search-input" 
                type="text" 
                name="search"
                id="search"
                placeholder="Search movies or characters"
            />
            <img src={searchIcon} alt="search icon"/> 
        </div>
    )
}
