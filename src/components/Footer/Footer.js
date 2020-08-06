import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
    return (
        <FooterBase> 
            <a href="https://github.com/paulohfreire">
                <img className="Logo" src={Logo} alt="Logo Learnflix" border="0" />
            </a>
            <p>
            Criado durante a
            {' '}
            <a href="https://www.alura.com.br/">
          Imersão React da Alura
            </a>
            </p>

        </FooterBase>
    );
}

export default Footer;
