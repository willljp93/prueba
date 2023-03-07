<template>
  <div class="product-detail-page">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price }} €</p>
      <p>{{ product.description }}</p>
      <div class="actions">
        <button @click="addToCart">Add to cart</button>
        <router-link to="/">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useShoppingCart } from 'store/shoppingCart.js'
import { computed } from 'vue'
import { products } from 'stores/products.js'

export default {
  name: 'ProductDetailPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const shoppingCart = useShoppingCart()
    const product = computed(() => products.find(p => p.id === props.id))

    const addToCart = () => {
      shoppingCart.addToCart(product.value)
    }

    return { product, addToCart }
  }
}
</script>

<style scoped>
.product-detail-page {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.product-image {
  text-align: center;
}

.product-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.product-info {
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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

@media (max-width: 768px) {
  .product-info {
    font-size: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .price {
    font-size: 1rem;
  }
}
</style>
