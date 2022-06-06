import { CartTypes } from '../types/CartTypes'

export const AddCart = ( product) => ({
    type: CartTypes.addCart,
    payload : {
        product 
    }
}
)
