<template>
  <div class="product">
    <div class="image">
      <img :src="product.imageUrl" :alt="product.name">
    </div>
    <div class="info">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">{{ product.price }} €</p>
      <button class="add-to-cart" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { useShoppingCart } from 'stores/shoppingCart.js'

export default {
  name: 'ProductComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const shoppingCart = useShoppingCart()

    const addToCart = () => {
      const item = {
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        quantity: 1
      }
      shoppingCart.addToCart(item)
    }

    return { addToCart }
  }
}
</script>

<style scoped>
.product {
  display: flex;
  margin-bottom: 1rem;
}

.image {
  flex: 1;
  margin-right: 1rem;
}

.image img {
  width: 100%;
  height: auto;
}

.info {
  flex: 2;
}

h2 {
  margin-bottom: 0.5rem;
}

.price {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.add-to-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #0069d9;
}
</style>
