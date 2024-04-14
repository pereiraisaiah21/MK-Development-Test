import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../actions/cartActions'

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
            // Verifica se o item já está no carrinho
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                // Se o item já estiver no carrinho, atualiza a quantidade
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
                    totalPrice: updatedItems[existingItemIndex].totalPrice + action.payload.totalPrice
                };
                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                // Se o item não estiver no carrinho, adiciona-o
                return {
                    ...state,
                    items: [...state.items, action.payload],
                };
            }

        case REMOVE_FROM_CART:
            // Remove o item do carrinho
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case UPDATE_CART_ITEM_QUANTITY:
            // Atualiza a quantidade de um item no carrinho
            const updatedItems = state.items.map(item =>
                item.id === action.payload.itemId
                    ? { ...item, quantity: action.payload.newQuantity, totalPrice: item.price * action.payload.newQuantity }
                    : item
            );
            return {
                ...state,
                items: updatedItems,
            };

        // Retorno default
        default:
            return state;
    }
}

export default cartReducer
