<template>
    <div class="product">
        qwer {{ id }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "product",
    props: ["id"],
    computed: {
    ...mapState({
      currentProduct: state => state.products.product
    })
  },
  async fetch({ store }) {
    await store.dispatch(`products/${this.id}`);
  }
}
</script>