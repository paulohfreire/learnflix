import React from 'react';
import { FooterBase } from './styles';

function Footer() {
    return (
        <FooterBase> 
            <a href="https://github.com/paulohfreire">
                <img src="https://fontmeme.com/permalink/200804/784e9ae3079c620a7183724e96a0de76.png" alt="Logo Learnflix" border="0" />
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
