import React from 'react'
import CartIcon from "../../../assets/Cart.png"


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
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <img src="/public/images/Logo.png" alt="Logo" />
                    </div>
                    <div className="header__cart">
                        <img src={CartIcon} />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
