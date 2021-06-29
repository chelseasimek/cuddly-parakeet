import React from 'react';
import './Header.css';
import Input from '../Input';

export default function Header() {
    return (
        <div id='Header'>
            <div className="banner--full"></div>
            <img src></img>
            <h1>Can my cat eat that?</h1>
            <p>Search and filter common house plants and see what's save for Sprinkles to nibble on.</p>
            <Input placeholder="Spider plant, fiddle leaf fig, etc..."/>
            <img className='img right'></img>
        </div>
    )
}