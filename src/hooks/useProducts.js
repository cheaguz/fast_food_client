import { useState, useEffect } from 'react';
import {API} from '../api/axios'

export const useProducts = () => {
    const [product,setProducts] = useState([])

    useEffect(()=>{
        const getProducts = () =>{
            API.get('/menu')
            .then(res => {
                setProducts(res.data.body)
            })
            .catch(err => {
                console.log(err)
            })
        }
        getProducts()
    },[])



    return [product]
}

