import { CartTypes } from '../types/CartTypes';


export const CartReducer = (state = [] , action )=>{
    switch(action.type) {
        case CartTypes.addCart :
            return [...state,action.payload];

            case CartTypes.removeProduct :
                return state.filter(p => p.product.id !== action.payload.id)
        default:
            return state;
            
    }
};