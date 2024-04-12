import React from 'react'

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
        <div className="pagina">
            <h1 className="pagina__title">{pageTitle}</h1>
            <p className="pagina__description">{pageDescription}</p>
            {/* Conteúdo da página */}
        </div>
    )
}

export default Home
