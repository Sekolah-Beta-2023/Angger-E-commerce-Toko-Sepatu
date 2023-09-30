<template>
  <section id="wish-list">
    <div class="pt-[130px] pb-5 container w-[75%] text-slate-900">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <nuxt-link class="text-primary text-md font-normal" to="/"
              >Beranda</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="text-primary text-md font-normal" to="/products"
              >products</nuxt-link
            >
          </li>
          <li>Keranjang Belanja</li>
        </ul>
      </div>
      <div v-if="dataKeranjang.length > 0">
        <div class="overflow-x-auto bg-white min-h-screen">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Produk</th>
                <th>Harga Satuan</th>
                <th>Kuantitas</th>
                <th>Total harga</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->

              <tr v-for="product in dataKeranjang" :key="product.id">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      class="checkbox"
                      :checked="product.deskripsiPemesanan.checked"
                      @click="toggleProductCheckout(product.id)"
                    />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img :src="product.image" :alt="product.title" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{{ product.title }}</div>
                      <div class="text-sm opacity-50">
                        {{ product.category }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {{
                    product.price.toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    })
                  }}
                </td>
                <td>
                  <div class="inline-flex items-center me-3">
                    <button
                      class="text-black px-2 py-1 border hover:bg-slate-200 cursor-pointer"
                      @click="decrementQuantity(product)"
                    >
                      -
                    </button>
                    <span class="border border-x-0 px-4 py-1">
                      {{ product.deskripsiPemesanan.quantity }}</span
                    >
                    <button
                      class="text-black px-2 py-1 border hover:bg-slate-200 cursor-pointer"
                      @click="incrementQuantity(product)"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  {{
                    (
                      product.deskripsiPemesanan.quantity * product.price
                    ).toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    })
                  }}
                </td>
                <th>
                  <button
                    class="btn btn-error btn-xs"
                    @click="deleteProduct(product.id)"
                  >
                    Hapus
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="wrapper-checkout fixed bottom-0 left-0 right-0 bg-white">
          <div class="overflow-x-auto w-[75%] m-auto">
            <table class="table border-slate-400">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th class="text-slate-800 text-base font-normal">
                    Gunakan / Masukkan kode
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      class="bg-white w-full h-[45px] rounded-md border text-xl p-5"
                    />
                  </td>
                </tr>
                <!-- row 1 -->
                <tr>
                  <td class="w-">
                    <label class="flex justify-center items-center gap-2">
                      <input
                        type="checkbox"
                        class="checkbox border-red-600"
                        :checked="ceklist"
                        @click="allCeklist"
                      />
                      <span>Pilih semua</span>
                    </label>
                  </td>
                  <td class="text-red-600">Checklist product untuk checkout</td>
                  <td>Total Produk ({{ dataProductCheckout.length }}):</td>
                  <td>
                    Rp.
                    <span class="text-red-600 text-2xl">
                      {{
                        totalHargaCheckout.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })
                      }}
                    </span>
                  </td>
                  <td class="border-0">
                    <!-- Open the modal using ID.showModal() method -->
                    <dialog id="my_modal_1" class="modal">
                      <div class="modal-box bg-white">
                        <h3 class="font-bold text-2xl">Masukkan Alamat</h3>
                        <p class="py-1 border-b-2 pb-2">
                          Untuk membuat pesanan, silakan tambahkan alamat
                          pengiriman
                        </p>
                        <div class="relative">
                          <form @submit.prevent="checkoutProducts">
                            <div class="flex items-center flex-col gap-2">
                              <div
                                class="mt-4 flex justify-between items-center w-full gap-4"
                              >
                                <input
                                  id="userName"
                                  name="userName"
                                  type="text"
                                  placeholder="Nama Lengkap"
                                  class="input input-bordered input-sm w-[50%] bg-white rounded-sm"
                                  required
                                />
                                <input
                                  id="userName"
                                  name="userName"
                                  type="tel"
                                  placeholder="No. Telepon"
                                  class="input input-bordered input-sm w-[50%] bg-white rounded-sm"
                                  required
                                />
                              </div>

                              <div
                                class="flex justify-between items-center w-full gap-4"
                              >
                                <select
                                  id="provinsi"
                                  v-model="selectProvinsi"
                                  name="provinsi"
                                  required
                                  class="bg-white w-[50%] p-2 border-2"
                                >
                                  <option value="" disabled selected>
                                    Provinsi
                                  </option>
                                  <option value="02">Jawa Timur</option>
                                </select>

                                <select
                                  id="kota"
                                  name="kota"
                                  required
                                  class="bg-white w-[50%] p-2 border-2"
                                >
                                  <option value="" disabled selected>
                                    Kota / Kabupaten
                                  </option>
                                  <option value="Malang">Malang</option>
                                </select>
                              </div>

                              <div
                                class="flex justify-between items-center w-full gap-4"
                              >
                                <select
                                  id="kecamatan"
                                  name="kecamatan"
                                  required
                                  class="bg-white w-[50%] p-2 border-2"
                                >
                                  <option value="" disabled selected>
                                    Kecamatan
                                  </option>
                                  <option value="Sukun">Sukun</option>
                                </select>

                                <select
                                  id="kodepos"
                                  name="kodepos"
                                  required
                                  class="bg-white w-[50%] p-2 border-2"
                                >
                                  <option value="" disabled selected>
                                    Kode Pos
                                  </option>
                                  <option value="66514">66514</option>
                                </select>
                              </div>
                              <div class="form-control w-full mb-14">
                                <textarea
                                  name=""
                                  placeholder="Nama Jalan, Gedung, No.Rumah"
                                  cols="30"
                                  rows="10"
                                  required
                                ></textarea>
                              </div>
                            </div>
                            <button
                              class="text-white font-semibold hovert:text-white py-3 px-7 bg-btnColor hover:btn-warning rounded-md absolute right-0 bottom-0"
                            >
                              Ok
                            </button>
                          </form>
                          <form method="dialog">
                            <button
                              class="text-white font-semibold hovert:text-white py-3 px-6 rounded-md hover:bg-slate-600 bg-slate-500 absolute right-20 bottom-0"
                            >
                              Batal
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    <button
                      class="btn btn-warning w-full"
                      :class="{ disabled: !isCheckoutEnabled }"
                      :disabled="!isCheckoutEnabled"
                      onclick="my_modal_1.showModal()"
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="hero min-h-[450px]">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold">Keranjang Belanja Kosong</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <nuxt-link to="/products">
                <button class="btn btn-warning">Shop Now</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      quantity: 1,
      ceklist: false,
      totalHarga: '',
      selectProvinsi: '',
      selectKota: '',
      selectKecamatan: '',
      selectKodePos: '',
      showErrorSelect: false,
      messageErrorSelect: {
        messageKota: null,
        messageKecamatan: null,
        messageKodePos: null,
      },
    }
  },
  computed: {
    dataKeranjang() {
      return this.$store.state.index.listDataBelanja
    },
    dataProductCheckout() {
      return this.$store.state.index.listDataCheckout
    },
    totalHargaCheckout() {
      return this.dataProductCheckout.reduce((total, item) => {
        const subtotal = item.price * item.deskripsiPemesanan.quantity
        return total + subtotal
      }, 0)
    },
    isCheckoutEnabled() {
      // Periksa apakah semua item dalam dataProductCheckout telah diperiksa (checked)
      return this.dataProductCheckout.some(
        (item) => item.deskripsiPemesanan.checked
      )
    },
  },
  mounted() {
    this.initializeCeklist()
  },
  methods: {
    initializeCeklist() {
      // Periksa apakah ada item dalam dataKeranjang yang memiliki checked = true
      if (this.dataKeranjang.every((item) => item.deskripsiPemesanan.checked)) {
        this.ceklist = true
      }
    },
    checkoutProducts() {
      this.$router.push('/checkout')
    },
    toggleProductCheckout(id) {
      this.$store.commit('index/CHECK_PRODUCT', id)
      const check = this.dataKeranjang.every(
        (item) => item.deskripsiPemesanan.checked
      )
      if (check) {
        this.ceklist = true
      } else {
        this.ceklist = false
      }
    },
    decrementQuantity(product) {
      if (product.deskripsiPemesanan.quantity > 1) {
        const newQuantity = product.deskripsiPemesanan.quantity - 1

        this.$store.commit('index/UPDATE_QUANTITY', {
          productId: product.id,
          quantity: newQuantity,
        })
      }
    },
    incrementQuantity(product) {
      const newQuantity = product.deskripsiPemesanan.quantity + 1
      this.$store.commit('index/UPDATE_QUANTITY', {
        productId: product.id,
        quantity: newQuantity,
      })
    },
    deleteProduct(id) {
      this.$store.commit('index/REMOVE_KERANJANG', id)
    },
    allCeklist() {
      if (this.dataKeranjang.every((item) => item.deskripsiPemesanan.checked)) {
        this.ceklist = false // Mengubah status "cek all" menjadi false saat dicentang
      } else {
        this.ceklist = true // Mengubah status "cek all" menjadi true saat tidak dicentang
      }
      this.$store.commit('index/CHECK_ALL_PRODUCT', this.ceklist)
    },
  },
}
</script>
