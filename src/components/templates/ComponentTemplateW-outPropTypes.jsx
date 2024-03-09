import React from 'react'

/**
 * Componente Comp
 * 
 * Descrição: Este componente representa um exemplo padrão de documentação.
 * Pode ser utilizado como modelo para criar outros componentes.
 * 
 * @component
 * @example
 * // Exemplo de uso
 * <Comp title="Meu Componente" description="Uma descrição do componente" />
 *
 * @param {string} title - O título do componente.
 * @param {string} description - Uma breve descrição do componente.
 * @param {number} [count=0] - Um número opcional associado ao componente.
 * 
 * @returns {JSX.Element} O componente renderizado.
 */
const Comp = ({
    title,
    description,
    count = 0
}) => {
    return (
        <div className="comp">
            <h2 className="comp__title">{title}</h2>
            <p className="comp__description">{description}</p>
            <p className="comp__count">Contagem: {count}</p>
        </div>
    )
}

export default Comp
