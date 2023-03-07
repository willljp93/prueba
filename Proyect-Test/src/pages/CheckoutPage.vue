<template>
  <div class="checkout-page">
    <div class="cart-items">
      <h2>Cart items</h2>
      <div v-if="cartItems.length === 0">Your cart is empty.</div>
      <div v-else>
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>Price: {{ item.price }} €</p>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
          <div class="item-total">
            <p>{{ item.price * item.quantity }} €</p>
          </div>
        </div>
        <div class="cart-total">
          <p>Total: {{ cartTotal }} €</p>
        </div>
      </div>
    </div>
    <div class="checkout-form">
      <h2>Checkout form</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="address" required>
        </div>
        <div class="form-group">
          <button type="submit">Submit order</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useShoppingCart } from 'store/shoppingCart.js'
import { ref } from 'vue'

export default {
  name: 'CheckoutPage',
  setup() {
    const shoppingCart = useShoppingCart()
    const cartItems = ref(shoppingCart.cartItems)
    const cartTotal = ref(shoppingCart.cartTotal)
    const name = ref('')
    const email = ref('')
    const address = ref('')

    const submitForm = () => {
      const order = {
        name: name.value,
        email: email.value,
        address: address.value,
        items: cartItems.value,
        total: cartTotal.value
      }
      console.log('Order submitted:', order)
      shoppingCart.clearCart()
      name.value = ''
      email.value = ''
      address.value = ''
    }

    return { cartItems, cartTotal, name, email, address, submitForm }
  }
}
</script>

<style scoped>
.checkout-page {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.cart-items {
  background-color: #f2f2f2;
  padding: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.item-info {
  flex: 1;
}

.item-total {
  margin-left: 1rem;
  text-align: right;
}

.cart-total {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.checkout-form {
  padding: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}

button[type="submit"] {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #1abc9c;
  color: white;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #16a085;
}
</style>
