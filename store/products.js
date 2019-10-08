import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { config } from "../config/woocommerce-rest-api";

const api = new WooCommerceRestApi(config);

export const state = () => ({
    list: [],
    product: {}
})

export const actions = {
    async get({ commit }) {
        await api.get('products', { per_page: 20 })
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.data)
                }
            })
    },
    async show({ commit }, params) {
        await api.get(`products/${params.product_id}`)
            .then((res) => {
                if (res.status === 200) {
                    commit('setProduct', res.data)
                }
            })
    },
    async set({ commit }, car) {
        await commit('set', car)
    }
}

export const mutations = {
    set(state, products) {
        state.list = products
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, { product }) {
        state.list.splice(state.list.indexOf(product), 1)
    },
    setProduct(state, product) { state.product = product }
}