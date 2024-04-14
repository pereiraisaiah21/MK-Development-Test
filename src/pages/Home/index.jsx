import React from 'react'
import { useQuery } from 'react-query'

import Product from '../../components/Product/Product'
import { fetchProducts } from '../../services/api'

/**
 * Página Home
 * 
 * Descrição: Este componente representa uma página importando seus componentes.
 * 
 * @component
 * @example
 * // Exemplo de uso em uma rota usando React Router
 * <Route path="/minha-pagina" component={MinhaPagina} />
 *
 * @returns {JSX.Element} O conteúdo da página renderizado.
 */
const Home = () => {

    const { data, isLoading, isError } = useQuery('products', fetchProducts)

    if (isLoading) {
        return (
            <div className="home">
                <div className="home__skeletons">
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                    <div className="home__skeleton"></div>
                </div>
            </div>
        )
    }

    if (isError) {
        return <div>Ocorreu um erro ao buscar os produtos.</div>
    }

    return (
        <div className="home">
            <div className="home__products">
                {
                    data.products.map(product => (
                        <Product key={product.id} product={product} isCart={false} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
