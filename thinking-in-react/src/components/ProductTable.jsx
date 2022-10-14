// import React from 'react'
// import { transformData as dataTransform } from '../dataTransformation';
// import ProductCategoryRow from './ProductCategoryRow'
// import ProductRow from './ProductRow'

// export default function ProductTable({stockData}) {
//   dataTransform(stockData)
//   function transformData(array){
//     const productCategories = [];
//     array.forEach(element => {
//       if(!productCategories.includes(element.category)){
//         productCategories.push(element.category)
//       }
//     })
//     return productCategories
//   }

//   function constructCategory(category, array){
//     const categoryItems = array.filter(el => el.category === category)
//     return (
//       <>
//         <ProductCategoryRow category={category}/>
//         {categoryItems.map((item) => <ProductRow item={item}/>)}
//       </>
//     )
//   }

//   return (
//     <div>
//         <h2>Product Table</h2>
//         {transformData(stockData).map(category => constructCategory(category, stockData))}
//     </div>
//   )
// }
