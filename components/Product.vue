<template>
    <figure class="product">
        <img v-for="image in images" :key="image.id" :src="image.src" :alt="image.alt">
        <figcaption>
            <h2 @click="machWas">{{ name }}</h2>
            <h3>{{ price }}</h3>
            <div v-html="description"></div>
            <nuxt-link :to="{ name: 'products', params: {productId: id } }">see more from {{ id }}</nuxt-link>
        </figcaption>
    </figure>
</template>

<script>
export default {
    name: 'product',
    props: ['id', 'name', 'description', 'price', 'categories', 'images']
}
</script>
