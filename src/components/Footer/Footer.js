import React from 'react';
import { FooterBase } from './styles';

function Footer() {
    return (
        <FooterBase> 
            <a href="https://github.com/paulohfreire">
                <img src="https://fontmeme.com/permalink/200728/3fbd71b6591fc35cf6cfd4e7b36f1a3e.png" alt="PauloDev" border="0" />
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
