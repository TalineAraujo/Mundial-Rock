import React from "react";
import './header.css';
import logo from "../assets/logoheader.png";

const Header = () => {
    return(
        <header className="header">
            <nav className="nav">

                <ul className="lista-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/informacoes">Informações</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/loja">Loja Oficial</a></li>
                    <li><a href="/cadastro">Cadastre-se</a></li>
                    <li><a href="/login">Login</a></li>   
                </ul>

            </nav>

            <img src={logo} alt="Logo Mundial Rock" className="header-logo"/>

        
        </header>
    );
};

export default Header;