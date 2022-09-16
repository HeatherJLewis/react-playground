const getCategories = (stockData) => {
  const categories = stockData.map((element) => element.category)
  return categories.filter((category, index) => categories.indexOf(category) === index)
}

export {getCategories}


//removing duplicates (with a nice diagram of filter method): https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/#filter