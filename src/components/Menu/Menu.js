import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from './ButtonLink/ButtonLink';

function Menu() { 
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo do site"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;