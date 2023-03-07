<template>
  <div class="cart">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <ShoppingCart v-for="item in cartItems" :key="item.id" :item="item" @removeItem="removeFromCart" />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total:</td>
          <td>{{ cartTotal }} €</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import ShoppingCart from 'components/ShoppingCart.vue'
import { useShoppingCart } from 'store/shoppingCart.js'
import { computed } from 'vue'

export default {
  name: 'CartItemComponent',

  components: {
    ShoppingCart
  },

  setup() {
    const shoppingCart = useShoppingCart()

    const cartItems = computed(() => shoppingCart.cartItems)
    const cartTotal = computed(() => shoppingCart.cartTotal)

    function removeFromCart(id) {
      shoppingCart.removeFromCart(id)
    }

    return { cartItems, cartTotal, removeFromCart }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

tfoot td {
  font-weight: bold;
  text-align: right;
}
</style>
