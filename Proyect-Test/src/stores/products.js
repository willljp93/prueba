// store/products.js
export const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of product 1',
    image: 'https://via.placeholder.com/200x200?text=Product+1',
    price: 10.99
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of product 2',
    image: 'https://via.placeholder.com/200x200?text=Product+2',
    price: 19.99
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of product 3',
    image: 'https://via.placeholder.com/200x200?text=Product+3',
    price: 7.99
  }
]

export default {
  state: {
    products
  },
  getters: {
    getProductById: state => id => {
      return state.products.find(product => product.id === id)
    }
  }
}
