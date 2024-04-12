import React from 'react'
import Product from '../../components/Product/Product'

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
const Home = ({
    pageTitle,
    pageDescription,
    history,
    match,
    location
}) => {
    return (
        <div className="home">
            <Product />
        </div>
    )
}

export default Home
