import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import { stockData } from '../data'

export default function ProductTableContainer() {
  return (
    <div>
      <h1>Product Table Container</h1>
      <SearchBar/>
      <ProductTable stockData={stockData}/>
    </div>
  )
}
