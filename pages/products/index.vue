<template>
    <div class="product">
        qwer
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
  }
}
</script>