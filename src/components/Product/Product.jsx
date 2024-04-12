import React from 'react'
import BiShoppingBag from "../../assets/ShoppingBag.png"

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
    isCart
}) => {

    const unit =
    {
        "id": 1,
        "name": "iPhone X 128 GB",
        "brand": "Apple",
        "description": "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes",
        "price": 2000.1
    }

    return (
        <div className={`product ${isCart ? "product__cart" : ""}`}>
            <div className="product__image">
                <img src="https://placeholder.co/200" alt="" srcset="" />
            </div>
            <div className="product__info">
                <div className="product__name">
                    {unit.brand} {unit.name}
                </div>

                {
                    !isCart
                        ?
                        <>
                            <div className="product__price">
                                {unit.price}
                            </div>
                            <div className="product__description">
                                {unit.description}
                            </div>
                        </>
                        :
                        null
                }
            </div>
            {
                !isCart
                    ?
                    <button className="product__buy">
                        <img src={BiShoppingBag} />
                        Comprar
                    </button>
                    :
                    <div className="product__quantity">
                        <div className="product__adder">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                        <span className="product__price">
                            R$ 200,00
                        </span>
                    </div>

            }
        </div>
    )
}

export default Product
