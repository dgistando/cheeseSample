import {SELECT_CHEESE} from '../actions/index'

//local state, not global
export default function(state = null, action){
    switch(action.type){
        case SELECT_CHEESE:
            return action.payload;
        default:
    }
    return state
}