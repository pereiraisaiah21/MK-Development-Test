import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'

// Inicio carrinho
const initialState = {
    items: [], // Array itens do carrinho
}

/**
 * Reducer para gerenciar o estado do carrinho de compras.
 * @param {Object} state - Estado atual do carrinho.
 * @param {Object} action - Ação despachada para atualizar o estado.
 * @returns {Object} Novo estado atualizado do carrinho.
 */
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Adicionar item para o cart
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        // Remove item do cart
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        // Retorno default
        default:
            return state;
    }
}

export default cartReducer
