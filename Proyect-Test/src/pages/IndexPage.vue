<template>
  <div class="index-page">
    <div class="hero">
      <h1>Welcome to our store</h1>
      <p>Discover our amazing products and enjoy free shipping on all orders.</p>
    </div>
    <div class="products">
      <h2>Featured products</h2>
      <ProductList :products="featuredProducts" />
    </div>
  </div>
</template>

<script>
import ProductList from 'components/ProductListComponent.vue'
import { products } from 'stores/products.js'

export default {
  name: 'IndexPage',
  components: {
    ProductList
  },
  computed: {
    featuredProducts() {
      return products.slice(0, 3)
    }
  }
}
</script>

<style scoped>
.index-page {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.hero {
  background-color: #f2f2f2;
  padding: 2rem;
  text-align: center;
}

.products {
  padding: 1rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero {
    font-size: 2rem;
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
