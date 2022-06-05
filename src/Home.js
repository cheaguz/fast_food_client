import React from 'react'
import   {NavBar }  from './components/navbar/NavBar';
import { ProductCard } from './components/products/ProductCard';

export const Home = () => {
  return (
    <div>
        <NavBar />
        <ProductCard />
    </div>
  )
}

