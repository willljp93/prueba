<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from 'components/ProductComponent.vue'
import { useShoppingCart } from 'stores/shoppingCart.js'
import { computed } from 'vue'

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductCard
  },
  setup() {
    const shoppingCart = useShoppingCart()
    const cartTotal = computed(() => shoppingCart.cartTotal)

    return { cartTotal }
  }
}
</script>

<style scoped>
.product-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
