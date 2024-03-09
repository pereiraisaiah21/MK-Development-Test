import React from 'react'
import { PiMagnifyingGlassLight } from "react-icons/pi"

/**
 * Componente Footer
 * 
 * Descrição: Este componente  é responsável por renderizar o cabeçalho.
 * 
 * @component
 * @example
 * // Exemplo de uso
 * <Header />
 * 
 * @returns {JSX.Element} O componente renderizado.
 */
const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__content">
                    <div className="Header__logo">
                        <img src="/public/images/Logo.png" alt="Logo" />
                    </div>
                    <nav className="Header__nav">
                        <ul className="Header__nav-list">
                            <li className="Header__nav-item"><a href="/">Home</a></li>
                            <li className="Header__nav-item"><a href="/produtos">Produtos</a></li>
                            <li className="Header__nav-item"><a href="/carrinho">Carrinho</a></li>
                            <li className="Header__nav-item"><a href="/contato">Contato</a></li>
                        </ul>
                    </nav>
                    <div className="Header__search">
                        <input type="text" className="Header__search-input" placeholder="Buscar" />
                        <button className="Header__search-button">
                            <PiMagnifyingGlassLight />
                        </button>
                    </div>
                    <div className="Header__community">
                        <button className="Header__community-button">Junte-se à Comunidade</button>
                    </div>
                    <div className="Header__currency">
                        <select className="Header__currency-select">
                            <option value="dolar">Dólar</option>
                            <option value="real">Real</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
