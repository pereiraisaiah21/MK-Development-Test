/**
 * Redux Actions para adicionar e remover itens do carrinho
 * 
 * Descrição: Este arquivo contém as ações para adicionar e remover itens do carrinho.
 * 
 * @fileoverview
 * @packageDocumentation
 */

/**
 * Constante para representar a ação de adicionar um item ao carrinho.
 * 
 * @constant
 * @type {string}
 */
export const ADD_TO_CART = 'ADD_TO_CART'

/**
 * Constante para representar a ação de remover um item do carrinho.
 * 
 * @constant
 * @type {string}
 */
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

/**
 * Ação para adicionar um item ao carrinho.
 * 
 * @param {Object} item - O item a ser adicionado ao carrinho.
 * @returns {Object} A ação para adicionar um item ao carrinho.
 */
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
})

/**
 * Ação para remover um item do carrinho.
 * 
 * @param {string} itemId - O ID do item a ser removido do carrinho.
 * @returns {Object} A ação para remover um item do carrinho.
 */
export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
})

/**
 * Constante para representar a ação de atualizar a quantidade de um item no carrinho.
 * 
 * @constant
 * @type {string}
 */
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';

/**
 * Ação para atualizar a quantidade de um item no carrinho.
 * 
 * @param {string} itemId - O ID do item a ser atualizado.
 * @param {number} newQuantity - A nova quantidade do item.
 * @returns {Object} A ação para atualizar a quantidade de um item no carrinho.
 */
export const updateCartItemQuantity = (itemId, newQuantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { itemId, newQuantity },
});