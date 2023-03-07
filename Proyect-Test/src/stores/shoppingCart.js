import { defineStore } from 'pinia'

export const useShoppingCart = defineStore({
  id: 'shoppingCart',
  state: () => ({
    cartItems: []
  }),
  getters: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    }
  },
  actions: {
    addToCart(item) {
      const existingItemIndex = this.cartItems.findIndex((i) => i.id === item.id)
      if (existingItemIndex === -1) {
        this.cartItems.push(item)
      } else {
        this.cartItems[existingItemIndex].quantity += item.quantity
      }
    },
    removeFromCart(id) {
      const itemIndex = this.cartItems.findIndex((i) => i.id === id)
      if (itemIndex !== -1) {
        this.cartItems.splice(itemIndex, 1)
      }
    }
  }
})
