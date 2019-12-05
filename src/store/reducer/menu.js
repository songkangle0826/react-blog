import * as ActionTypes from '../action-types';


let menu = (state={
    menu:[],
},action)=>{
    switch(action.type){
        case ActionTypes.MENUTOREDUX:
            state = { ...state,menu:action.menu  }
            break;
        default:
            break;
    }
    return state;
}

export default menu;