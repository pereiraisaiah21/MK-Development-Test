/**
 * Configuração da aplicação.
 * Este objeto contém várias configurações importantes para a aplicação incluindo os parametros padrões.
 */
const config = {
    /**
     * URL base da API utilizada na aplicação.
     * Todos os endpoints da API serão acessados a partir desta URL.
     */
    apiUrl: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',

    /**
     * Número padrão de itens por página para a paginação.
     * Este valor será utilizado como padrão ao exibir listas de itens paginadas.
     */
    defaultPageSize: 8,

    /**
     * Campo padrão usado para ordenação.
     * Este campo será utilizado como padrão ao ordenar listas de itens.
     */
    defaultSortBy: 'id',

    /**
     * Ordem padrão para a ordenação (ascendente ou descendente).
     * Este valor determina se a ordenação será feita em ordem crescente ou decrescente.
     */
    defaultOrderBy: 'DESC'
}

export default config
