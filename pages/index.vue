<template>
  <div class="container">
    <product v-for="product in products" :key="product.id" v-bind="product" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Product from '~/components/Product.vue'

export default {
  components: {
    Product
  },
  computed: {
    ...mapState({
      products: state => state.products.list,
      currentProduct: state => state.products.product
    })
  },
  async fetch({store}) {
    await store.dispatch("products/get")
  }
}
</script>
