import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({stockData}) {
  return (
    <div>
        <h2>Product Table</h2>
        <ProductCategoryRow/>
        {stockData.map((item) => <ProductRow item={item}/>)}
    </div>
  )
}
