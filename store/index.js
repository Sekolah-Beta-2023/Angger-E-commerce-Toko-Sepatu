import axios from 'axios'
// cara membuat state global menggunakan vuex
export const modules = {
  index: {
    namespaced: true, // Pastikan Anda menambahkan namespace pada module ini
    // 1. menentukan state/ data yang akan digunakan(data yang dirender berubah-ubah)
    state: {
      wishListItems: [],
    },
    // 2. membuat mutation yaitu digunakan untuk mengubah data state diatas(diatas) namun yang berjalan syhncronous atau mengabaikan proses asynchronous seperti pemanggilan api
    // parameter state merepresentasikan semua data yg ada di state(agar kita bisa mengakses datanya)
    // mutation baiknya ditulis dengan SNAKE_CASE(uppercase)
    mutations: {
      ADDWISHLIST(state, product) {
        state.wishListItems.push(product)
      },
      REMOVE_WISHLIST(state, productId) {
        state.wishListItems = state.wishListItems.filter(
          (item) => item.id !== productId
        )
      },
    },
    // 3. membuat action yaitu digunakan untuk mengubah data state, sama seperti mutation tetapi action bisa melakukan proses asnychronous seperti get api, DAN ACTION dapat mengakses hasil dari mutations
    actions: {
      async addWishList({ commit }, productId) {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${productId}`
          )
          const product = await response.data
          console.log('store', product)

          // CARA memanggil mutation harus mengginakan commit
          commit('ADDWISHLIST', product)
        } catch (error) {
          console.log(error.message)
        }
      },
      async removeWishList({ commit }, productId) {
        try {
          const response = await axios.delete(
            `https://fakestoreapi.com/products/${productId}`
          )
          const productIdDeleted = await response.data.id
          console.log('id deleted', productIdDeleted)
          commit('REMOVE_WISHLIST', productIdDeleted)
        } catch (error) {
          console.log(error.message)
        }
      },
    },
  },
}
