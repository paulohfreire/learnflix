import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/Button';
//import Button from './ButtonLink/ButtonLink';

function Menu() { 
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="logo do site"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;