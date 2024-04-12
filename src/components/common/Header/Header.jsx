import React from 'react'
import CartIcon from "../../../assets/Cart.png"
import Product from '../../Product/Product'


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
            <div className="header__container">
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


            <div className="cart">
                <header className="cart__header">
                    <span>
                        Carrinho<br /> de compras
                    </span>
                    <button>
                        X
                    </button>
                </header>
                <section className="cart__products">

                    <Product isCart={true} />

                </section>
                <footer className="cart__footer">
                    <div className="cart__total">
                        <span>
                            Total:
                        </span>
                        <span>
                            R$ 0,00
                        </span>
                    </div>
                    <button className="cart__finish">
                        Finalizar compra
                    </button>
                </footer>
            </div>
        </header>
    )
}

export default Header
