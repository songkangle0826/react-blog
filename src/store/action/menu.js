import * as ActionTypes from '../action-types';

let menu = {
    getMenuList(menu = []){
        console.log(menu,'wwww');
        return {
            type: ActionTypes.MENUTOREDUX,
            menu: menu
        }
    }
}


export default menu;
