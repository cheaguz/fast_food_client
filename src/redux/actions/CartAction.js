import { CartTypes } from '../types/CartTypes'

export const AddCart = ( product) => ({
    type: CartTypes.addCart,
    payload : {
        product 
    }
}
);

export const removeProduct  = (id) => ({
    type: CartTypes.removeProduct,
    payload : {
        id
    }
})
