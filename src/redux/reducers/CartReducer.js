import { CartTypes } from '../types/CartTypes';


export const CartReducer = (state = [] , action )=>{
    switch(action.type) {
        case CartTypes.addCart :
            console.log(action.payload)
            return [...state,action.payload];

        default:
            return state;
            
    }
};