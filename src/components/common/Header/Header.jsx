import React, { useState } from 'react'
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
    const [isOpen, setIsOpen] = useState(false)

    const toggleCart = () => {
        setIsOpen(!isOpen)
    }

    const calculateTotal = () => {
        return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    return (
        <motion.header className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className="header__container">
                <div className="header__content">
                    <div className="header__logo">
                        <b>MKS</b> Sistemas
                    </div>
                    <motion.div className="header__cart" whileHover={{ scale: 1.1 }} onClick={toggleCart}>
                        <img src={CartIcon} />
                        <span>{cart.items.length}</span>
                    </motion.div>
                </div>
            </div>

            {isOpen && (
                <motion.div className="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <header className="cart__header">
                        <span>
                            Carrinho<br /> de compras
                        </span>
                        <button onClick={toggleCart}>
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
                                R$ {calculateTotal().toFixed(2).replace(".", ",")}
                            </span>
                        </div>
                        <motion.button className="cart__finish" whileHover={{ scale: 1.1 }}>
                            Finalizar compra
                        </motion.button>
                    </footer>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Header
