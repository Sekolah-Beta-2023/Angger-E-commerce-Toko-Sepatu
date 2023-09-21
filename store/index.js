import axios from 'axios'
// cara membuat state global menggunakan vuex
export const modules = {
  index: {
    namespaced: true, // Pastikan Anda menambahkan namespace pada module ini
    // 1. menentukan state/ data yang akan digunakan(data yang dirender berubah-ubah)
    state: {
      wishListItems: [],
      listDataBelanja: [],
      listDataCheckout: [],

      isAlreadyInCart: false,
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
      ADD_KERANJANG(state, product) {
        const existingProduct = state.listDataBelanja.find(
          (item) => item.id === product.id
        )

        if (existingProduct) {
          state.isAlreadyInCart = true
        } else {
          state.listDataBelanja.push(product)
        }
      },
      REMOVE_KERANJANG(state, productId) {
        state.listDataBelanja = state.listDataBelanja.filter(
          (item) => item.id !== productId
        )
        // hapus juga data yang ada dikeranjang
        state.listDataCheckout = state.listDataCheckout.filter(
          (item) => item.id !== productId
        )
      },
      // kita distracturing object, karena argumen yang dikirim berupa object
      UPDATE_QUANTITY(state, { productId, quantity }) {
        // product akan mengembalikan satu data object
        const product = state.listDataBelanja.find(
          (item) => item.id === productId
        )

        if (product) {
          // dan jika object ada kita akan merubah state listDataBelanja secara langsung tidak perlu return , karena mutation mempunyai akses ntuk merubah secara langsung statenya
          product.deskripsiPemesanan.quantity = quantity
        }
      },
      CHECK_PRODUCT(state, productId) {
        console.log('price data belanja', state.listDataBelanja)
        const product = state.listDataBelanja.find(
          (item) => item.id === productId
        )
        console.log('price spesifik data belanja', product.price)
        if (product) {
          product.deskripsiPemesanan.checked =
            !product.deskripsiPemesanan.checked // Toggle the checked status
          if (product.deskripsiPemesanan.checked) {
            state.listDataCheckout.push(product)

            state.listDataCheckout.forEach((item) => {
              if (!product.id === item.id) {
                state.listDataCheckout.push(product)
              }
            })
          } else {
            state.listDataCheckout = state.listDataCheckout.filter(
              (product) => product.id !== productId
            )
          }
        } else {
          state.listDataCheckout = state.listDataCheckout.filter(
            (product) => product.id !== productId
          )
        }
      },
      CHECK_ALL_PRODUCT(state, checklist) {
        if (checklist) {
          state.listDataBelanja.forEach((item) => {
            item.deskripsiPemesanan.checked = checklist // Mengatur status semua produk sesuai "cek all"
          })
          state.listDataCheckout = [...state.listDataBelanja]
        } else {
          state.listDataCheckout = []
        }

        // Menggunakan mutation untuk mengubah status checked di semua produk
        state.listDataBelanja.forEach((product) => {
          product.deskripsiPemesanan.checked = checklist
        })
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
    // digunakan untuk mengolah state,misal dibawah ini digunakan untuk menghitung data dari state, sama seperti computed:{}
    getters: {},
  },
}
