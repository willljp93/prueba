<template>
  <div class="page">
    <h1>Shopping Cart</h1>
    <CartItemComponent />
  </div>
</template>

<script>
import CartItemComponent from 'components/CartItemComponent.vue'

export default {
  name: 'ShoppingCartPage',
  components: {
    CartItemComponent
  }
}
</script>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
