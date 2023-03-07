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
        <CartItem v-for="item in cartItems" :key="item.id" :item="item" @removeItem="removeFromCart" />
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
import CartItem from 'components/CartItem.vue'
import { useShoppingCart } from 'store/shoppingCart.js'
import { computed } from 'vue'

export default {
  name: 'ShoppingCart',

  components: {
    CartItem
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
