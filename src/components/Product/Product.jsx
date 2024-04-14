import React, { useEffect, useState } from 'react'
import BiShoppingBag from "../../assets/ShoppingBag.png"
import { motion } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

/**
 * Componente product
 * 
 * Descrição: Este componente  é responsável por renderizar um único produto.
 * 
 * @component
 * @example
 * // Exemplo de uso
 * <Product />
 * 
 * @returns {JSX.Element} O componente renderizado.
 */
const Product = ({
    product,
    isCart
}) => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [alreadyAdded, setAlreadyAdded] = useState(false)

    // Not duplicate products in cart
    useEffect(() => {
        const alreadyInCart = cart.items.find(item => item.id === product.id)
        if (alreadyInCart) {
            setQuantity(alreadyInCart.quantity)
            setAlreadyAdded(true)
        }
    }, [cart.items, product.id])

    // Add to cart
    const handleAddToCart = () => {
        // Verifica se o produto já foi adicionado ao carrinho
        const alreadyInCart = cart.items.find(item => item.id === product.id)
        if (!alreadyInCart) {
            const price = parseFloat(product.price)
            const totalPrice = price * quantity
            dispatch(addToCart({ ...product, quantity, totalPrice }))
            setAlreadyAdded(true)
        }
    }

    // Remove from cart
   
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id))
        setAlreadyAdded(false)
    }


    // Handle quantity decrement
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
            dispatch(removeFromCart(product.id))
            dispatch(addToCart({ ...product, quantity: quantity - 1 }))
        }
    }

    // Handle quantity increment
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
        dispatch(removeFromCart(product.id))
        dispatch(addToCart({ ...product, quantity: quantity + 1 }))
    }

    // Just test
    useEffect(() => {
        console.log('Itens no carrinho:', cart.items)
    }, [cart.items])

    // Format price in product component
    let formattedPrice = "";
    if (typeof product?.price === 'string') {
        formattedPrice = parseFloat(product.price).toFixed(2).replace(".", ",")
        if (formattedPrice.endsWith(",00")) {
            formattedPrice = formattedPrice.replace(",00", "")
        }
    }

    return (
        <motion.div className={`product ${isCart ? "product__cart" : ""}`} whileHover={{ scale: 1.1 }}>
            <div className="product__image">
                <img src={product?.photo} alt="" srcset="" />
            </div>
            <div className="product__info">
                <div className="product__name">
                    {product?.name}
                </div>
                {
                    !isCart
                        ?
                        <>
                            <div className="product__price">
                                R$ {formattedPrice}
                            </div>
                            <div className="product__description">
                                {product?.description}
                            </div>
                        </>
                        :
                        null
                }
            </div>
            {
                !isCart
                    ?
                    <motion.button className="product__buy" onClick={handleAddToCart} whileHover={{ scale: 1.0 }}>
                        <img src={BiShoppingBag} />
                        Comprar
                    </motion.button>
                    :
                    <div className="product__quantity">
                        <div className="product__adder">
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <span className="product__price">
                            R$ {(product?.price * quantity).toFixed(2).replace(".", ",")}
                        </span>
                        <button className="product__remove" onClick={handleRemoveFromCart}>x</button>
                    </div>
            }
        </motion.div>
    )
}

export default Product
