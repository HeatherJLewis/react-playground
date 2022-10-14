import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow'

export default function CategoryGroup({category, categoryData}) {
  return (
    <>
      <ProductCategoryRow category={category}/>
      {categoryData.map((item) => <ProductRow item={item}/>)}
    </>
  )
}
