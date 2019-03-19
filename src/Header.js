import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png";
        return (
            <header >
            <img src = {logoUrl} alt = "Logo" style={{width: '10vw'}} />
            Header
            </header>
    );
}
} 

export default Header;