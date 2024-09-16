// import React , {useState} from 'react'
import './Searchbar.css'
import SearchButton from '../assets/searchButton.svg'

function Searchbar({search}){

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        search(inputValue);
    };

    return(
        <>
            <div className="search">
                <span className='options'>
                    <input 
                        type="text" 
                        onChange={handleInputChange} 
                        id="search" 
                        placeholder='Enter Keywords to Generate Images
                    '/>
                    <img 
                        src={SearchButton} 
                        alt="" 
                        id="searchButton" 
                    />
                </span>
            </div>
        </>
    )
}

export default Searchbar;