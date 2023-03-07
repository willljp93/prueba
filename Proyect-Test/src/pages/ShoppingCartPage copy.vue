<template>
  <div class="shopping-cart-page">
    <h1>Shopping Cart</h1>
    <div class="cart-items">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
    <div class="cart-summary">
      <p>Total price: {{ totalPrice }} €</p>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
import { useShoppingCart } from 'store/shoppingCart.js'
import CartItem from 'components/CartItem.vue'

export default {
  name: 'ShoppingCartPage',
  components: {
    CartItem
  },
  setup() {
    const shoppingCart = useShoppingCart()

    const cartItems = shoppingCart.getItems()
    const totalPrice = shoppingCart.getTotalPrice()

    const checkout = () => {
      alert('Thank you for your purchase!')
      shoppingCart.clearCart()
    }

    return { cartItems, totalPrice, checkout }
  }
}
</script>

<style scoped>
.shopping-cart-page {
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cart-items {
  display: grid;
  gap: 1rem;
}

.cart-summary {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  font-size: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #1abc9c;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #16a085;
}
</style>
