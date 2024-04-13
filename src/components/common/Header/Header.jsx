import React from 'react'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import CartIcon from "../../../assets/Cart.png"
import Product from '../../Product/Product'

/**
 * Componente Header
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

    const cart = useSelector(state => state.cart)

    return (
        <motion.header className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className="header__container">
                <div className="header__content">
                    <div className="header__logo">
                        MKS sistemas
                    </div>
                    <motion.div className="header__cart" whileHover={{ scale: 1.1 }}>
                        <img src={CartIcon} />
                        <span>0</span>
                    </motion.div>
                </div>
            </div>


            <motion.div className="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <header className="cart__header">
                    <span>
                        Carrinho<br /> de compras
                    </span>
                    <button>
                        X
                    </button>
                </header>
                <section className="cart__products">
                    {cart.items.map(item => (
                        <Product key={item.id} product={item} isCart={true} />
                    ))}
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
                    <motion.button className="cart__finish" whileHover={{ scale: 1.1 }}>
                        Finalizar compra
                    </motion.button>
                </footer>
            </motion.div>
        </motion.header>
    )
}

export default Header
