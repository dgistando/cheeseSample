import {GET_CART} from '../actions/index'

export default function(state=[], action){
    if(action.type === GET_CART){
        //console.log('you triend to get cart', action.payload.data.GetCart.items)
        return action.payload.data.GetCart.items //something like that
    }
    return state;
}