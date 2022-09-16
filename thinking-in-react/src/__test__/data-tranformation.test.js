import {stockData} from '../data'
import {getCategories} from '../data-transformation'

test('returns product categories from stock data', () => {
  const categories = getCategories(stockData)
  expect(categories).toEqual(["Sporting Goods", "Electronics"])
})