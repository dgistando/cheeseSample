import {SEARCH_CHEESE} from '../actions/index'

export default function(state = [], action){
    
    switch(action.type){
        case SEARCH_CHEESE:
            //console.log("Ations search ", action.payload)
            return [action.payload.data.Search];
        default:
    }
    return state;
}