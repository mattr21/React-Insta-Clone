import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className="searchBar">
            <div className="left">
                <i class="fab fa-instagram fa-2x"></i>
                <p className="instagramWord">Instagram</p>
            </div>
            <input className="searchInput" type="text" placeholder="Search"/>
            <div className="right">
                <i class="far fa-compass fa-lg"></i>
                <i class="far fa-heart fa-lg"></i>
                <i class="far fa-user fa-lg"></i>
            </div>
        </div>
    );
}

export default SearchBar;