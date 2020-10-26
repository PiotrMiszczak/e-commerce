import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom'


function Header(){
    return(
        <header className="header">
     <Link className="link" to="/"><h1>My Shop</h1></Link>
      < Navigation/>
    </header>
    )
}

export default Header;