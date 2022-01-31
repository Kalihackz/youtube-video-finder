import React from 'react';
import './SearchBar.scss';

const SearchBar = ( props ) => {
    return (
            <div className="main-container">
                <section className="main-container__left"></section>
                <section className="main-container__center">
                    <div className="search-bar">
                        <button className="search-btn" disabled={props.disableButton}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="search" width="30px"/>
                        </button>
                        <input type="text" className="input-text" placeholder="Search songs . . ." onChange={props.change} value={props.searchValue}/>
                    </div>
                </section>
                <section className="main-container__right"></section>
            </div>
    );
}

export default SearchBar;