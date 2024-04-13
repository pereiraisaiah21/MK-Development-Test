import { combineReducers } from 'redux'
import cartReducer from './cartReducer'

// Juntando reducers
const rootReducer = combineReducers({
    cart: cartReducer, // Define o reducer do carrinho com a chave 'cart'
})

export default rootReducer
