import axios from 'axios'

export const modules = {
  dataKeranjang: {
    namespaced: true,
    state: {
      listDataBelanja: [
        {
          id: 1,
        },
      ],
    },
    mutations: {
      ADD_KERANJANG(state, product) {
        state.listDataBelanja.push(product)
      },
      REMOVE_KERANJANG(state, productId) {
        state.listDataBelanja = state.listDataBelanja.filter(
          (item) => item.id !== productId
        )
      },
    },
    actions: {
      async setListDataBelanja({ commit }, productId) {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${productId}`
          )
          const product = await response.data
          console.log('keranjang', product)

          // CARA memanggil mutation harus mengginakan commit
          commit('ADD_KERANJANG', product)
        } catch (error) {
          console.log(error.message)
        }
      },
      async removeListDataKeranjang({ commit }, productId) {
        try {
          const response = await axios.delete(
            `https://fakestoreapi.com/products/${productId}`
          )
          const productIdDeleted = await response.data.id
          console.log('id keranjang deleted', productIdDeleted)
          commit('REMOVE_KERANJANG', productIdDeleted)
        } catch (error) {
          console.log(error.message)
        }
      },
    },
  },
}
