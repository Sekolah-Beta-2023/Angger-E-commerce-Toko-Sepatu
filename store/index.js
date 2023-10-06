// cara membuat state global menggunakan vuex
export const modules = {
  index: {
    namespaced: true, // Pastikan Anda menambahkan namespace pada module ini
    // 1. menentukan state/ data yang akan digunakan(data yang dirender berubah-ubah)
    state: {
      wishListItems: [],
      listDataBelanja: [],
      listDataCheckout: [],
      alamatActive: {},
      isAlreadyInCart: false,
      isAlreadyInWishlist: false,
    },
    // 2. membuat mutation yaitu digunakan untuk mengubah data state diatas(diatas) namun yang berjalan syhncronous atau mengabaikan proses asynchronous seperti pemanggilan api
    // parameter state merepresentasikan semua data yg ada di state(agar kita bisa mengakses datanya)
    // mutation baiknya ditulis dengan SNAKE_CASE(uppercase)
    mutations: {
      ADDWISHLIST(state, product) {
        const statusWishlist = state.wishListItems.find(
          (item) => item.id === product.id
        )
        if (statusWishlist) {
          state.isAlreadyInWishlist = true
        } else {
          state.isAlreadyInWishlist = false
          state.wishListItems.push(product)
        }
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
          state.isAlreadyInCart = false
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
        const product = state.listDataBelanja.find(
          (item) => item.id === productId
        )
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
      ADD_ALAMAT(state, alamat) {
        state.alamatActive = alamat
      },
    },

    // 3. membuat action yaitu digunakan untuk mengubah data state, sama seperti mutation tetapi action bisa melakukan proses asnychronous seperti get api, DAN ACTION dapat mengakses hasil dari mutations
    actions: {
      async addWishList({ commit }, productId) {
        try {
          const { data, error } = await this.$supabase
            .from('products')
            .select()
            .eq('id', productId)
          if (data) {
            const product = data[0]
            // CARA memanggil mutation harus mengginakan commit
            commit('ADDWISHLIST', product)
          }
          if (error) {
            throw error
          }
        } catch (error) {}
      },
      async removeWishList({ commit }, productId) {
        try {
          const { data, error } = await this.$supabase
            .from('products')
            .select()
            .eq('id', productId)
            .single()
          if (error) {
            throw error
          }

          if (data) {
            const productIdDeleted = data.id
            commit('REMOVE_WISHLIST', productIdDeleted)
          }
        } catch (error) {}
      },
      async setListDataBelanja({ commit }, productId) {
        try {
          const { data, error } = await this.$supabase
            .from('products')
            .select()
            .eq('id', productId)
          if (data) {
            const product = data

            // CARA memanggil mutation harus mengginakan commit
            commit('ADD_KERANJANG', product)
          }
          if (error) {
            throw error
          }
        } catch (error) {}
      },
      async removeListDataKeranjang({ commit }, productId) {
        try {
          const { data, error } = await this.$supabase
            .from('products')
            .select()
            .eq('id', productId)
            .single()

          if (error) {
            throw error
          }

          if (data) {
            const productIdDeleted = data.id
            commit('REMOVE_KERANJANG', productIdDeleted)
          }
        } catch (error) {}
      },
      async addAlamat({ commit }, alamatId) {
        try {
          const { data, error } = await this.$supabase
            .from('address')
            .select()
            .eq('id', alamatId)
            .single()
          if (data) {
            const provinsi = JSON.parse(data.provinsi)
            const kota = JSON.parse(data.kota)
            const kecamatan = JSON.parse(data.kecamatan)
            const kodePos = JSON.parse(data.kodePos)

            data.provinsi = provinsi.name
            data.kota = kota.name
            data.kecamatan = kecamatan.name
            data.kodePos = kodePos.id
            commit('ADD_ALAMAT', data)
          }
          if (error) {
            throw error
          }
        } catch (error) {}
      },
    },
    // digunakan untuk mengolah state,misal dibawah ini digunakan untuk menghitung data dari state, sama seperti computed:{}
    getters: {},
  },
}
