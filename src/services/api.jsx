import config from "../config/config";

/**
 * Função para buscar produtos da API.
 * Esta função utiliza as configurações fornecidas no objeto 'config' para construir a URL da requisição.
 * @returns {Promise} Uma Promise contendo os dados da resposta da API.
 */
export const fetchProducts = async () => {
    try {
        // Constrói a URL da requisição utilizando as configurações fornecidas no objeto 'config'.
        const url = `${config.apiUrl}/products?page=1&rows=${config.defaultPageSize}&sortBy=${config.defaultSortBy}&orderBy=${config.defaultOrderBy}`
        
        // Realiza a requisição para a URL construída.
        const response = await fetch(url);

        // Verifica se a resposta da requisição foi bem-sucedida.
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos')
        }

        return response.json()
    } catch (error) {
        console.error('Erro ao buscar produtos:', error)
        return {}
    }
}
