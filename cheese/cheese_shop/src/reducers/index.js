import {combineReducers} from 'redux';
import CheeseReducer from './reducer_cheeses'
import activeCheese from './reducer_active_cheese'
import cartReducer from './reducer_cart'

const rootReducer = combineReducers({
    //this is part of the global app state
    //so we can use cheese wherever
    Cheeses : CheeseReducer,
    ActiveCheese : activeCheese,
    inCart : cartReducer
})


export default rootReducer;