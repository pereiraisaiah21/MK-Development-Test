import React from 'react'

/**
 * Página Genérica
 * 
 * Descrição: Este componente representa um exemplo padrão de documentação para páginas.
 * Pode ser utilizado como modelo para criar outras páginas.
 * 
 * @component
 * @example
 * // Exemplo de uso em uma rota usando React Router
 * <Route path="/minha-pagina" component={MinhaPagina} />
 *
 * @param {string} pageTitle - O título da página.
 * @param {string} pageDescription - Uma breve descrição da página.
 * @param {object} history - Objeto de histórico de navegação (React Router).
 * @param {object} match - Objeto de correspondência de rota (React Router).
 * @param {object} location - Objeto de localização (React Router).
 * 
 * @returns {JSX.Element} O conteúdo da página renderizado.
 */
const PaginaGenerica = ({
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

export default PaginaGenerica
