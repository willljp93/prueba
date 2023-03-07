<template>
  <form class="checkout-form" @submit.prevent="submitOrder">
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
      <label for="city">City:</label>
      <input type="text" id="city" v-model="city" required>
    </div>
    <div class="form-group">
      <label for="zipcode">Zip code:</label>
      <input type="text" id="zipcode" v-model="zipcode" required>
    </div>
    <button type="submit">Submit order</button>
  </form>
</template>

<script>
import { useShoppingCart } from 'store/shoppingCart.js'
import { ref } from 'vue'

export default {
  name: 'CheckoutForm',
  setup() {
    const shoppingCart = useShoppingCart()
    const name = ref('')
    const email = ref('')
    const address = ref('')
    const city = ref('')
    const zipcode = ref('')

    const submitOrder = () => {
      const order = {
        name: name.value,
        email: email.value,
        address: address.value,
        city: city.value,
        zipcode: zipcode.value,
        items: shoppingCart.cartItems
      }
      console.log('Order:', order)
      shoppingCart.clearCart()
    }

    return { name, email, address, city, zipcode, submitOrder }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
