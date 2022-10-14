import React from 'react'
import { transformData } from '../dataTransformation';
import CategoryGroup from './CategoryGroup';
export default function ProductTableDumb({stockData}) {

  const transformedData = transformData(stockData)
  const categories = Object.keys(transformedData)

  return (
    <div>
        <h2>Product Table</h2>
      {categories.map(category => <CategoryGroup category={category} categoryData={transformedData[category]}/>)}
    </div>
  )
}
