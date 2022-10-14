function transformData(stockData) {
  const categories = {};
  stockData.forEach(({ category, priced, stocked, name }) => {
    console.log(category);
    if (!categories.hasOwnProperty(category)) {
      categories[category] = [];
    }
    categories[category].push({ priced, stocked, name });
  });
  console.log("HERE", categories);
  return categories;
}

export { transformData };

// ^This works and creates a data structure like this:
// const data = {
//     SportingGoods :[
//         'firstItem', 'secondItem', 'thirdItem'
//     ],
//     Electronics :[
//         'firstItem', 'secondItem', 'thirdItem'
//     ],
// }
// where each item is an object

// class Item {
//   constructor(priced, stocked, name) {
//     (this.priced = priced), (this.stocked = stocked), (this.name = name);
//   }
// }

// function transformData(stockData) {
//   const categories = [];
//   stockData.forEach(({ category }) => {
//     const hasCategory = categories.some((el) => el.category === category);
//     console.log("BOOLEAN", hasCategory, category);
//     if (!hasCategory) {
//       categories.push({ category: category });
//     }
//   });
//   const indexOfCategory = categories.findIndex(category)
//   console.log("HERE", categories);
//   return categories;
// }

// export { transformData };

// const data = [
//   {
//     category: "SportingGoods",
//     data: ["firstItem", "secondItem", "thirdItem"],
//   },
//   {
//     category: "Electronics",
//     data: ["firstItem", "secondItem", "thirdItem"],
//   },
// ];
