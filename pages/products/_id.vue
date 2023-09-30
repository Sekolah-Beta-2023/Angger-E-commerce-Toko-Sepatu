<!-- pages/products/_id.vue -->
<template>
  <section id="detail-products" class="bg-slate-200">
    <div class="container w-[80%] h-full relative pt-[120px]">
      <div v-if="isAlreadyProduct">
        <div class="toast toast-top toast-middle">
          <div class="alert alert-info">
            <span
              >Product {{ detailProduct.title }} sudah ada dikeranjang.</span
            >
          </div>
        </div>
      </div>
      <div v-if="showError" class="error-message">
        Mohon isi semua detail pesanan.
      </div>
      <!-- Tampilkan breadcrumbs di sini -->
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
          <li>detail product</li>
        </ul>
      </div>

      <!-- Tampilkan konten produk di sini -->
      <div class="flex w-full bg-white mt-2 gap-5 p-5">
        <div class="w-[45%]">
          <div
            class="grid h-[400px] overflow-hidden card rounded-box place-items-center"
          >
            <img
              :src="detailProduct.image"
              :alt="detailProduct.title"
              class="w-[300px] h-[300px] object-cover"
            />
          </div>
        </div>

        <div class="w-[55%]">
          <div
            class="grid justify-start card rounded-box place-items-start font-light text-slate-950"
          >
            <h2 class="text-xl mb-1">{{ detailProduct.title }}</h2>
            <div class="mb-3 flex">
              <span class="me-3 decoration-btnColor">{{
                detailProduct.rating.rate
              }}</span>
              <p>
                <DisplayRating :rating="Math.ceil(detailProduct.rating.rate)" />
              </p>
            </div>
            <div
              class="p-4 mb-2 flex gap-3 justify-start items-center bg-slate-200 w-full"
            >
              <span class="line-through italic text-slate-600"
                >$ {{ detailProduct.price }}</span
              >
              <span class="text-2xl font-bold text-red-600">
                {{
                  detailProduct.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })
                }}
              </span>

              <span class="bg-red-600 text-white p-1 text-xs"
                >{{ diskonPersentasi }} % OFF</span
              >
            </div>
            <form @submit.prevent>
              <ul class="mt-4 grid grid-cols-[100px_minmax(100px,_1fr)] gap-3">
                <li>Warna</li>
                <div>
                  <button
                    v-for="item in pilihanWarna"
                    :key="item"
                    class="border border-btnColor btn-sm hover:border-btnColor me-3 px-6 rounded-none"
                    :class="{ 'bg-btnColor': selectedWarna === item }"
                    @click="selectWarna(item)"
                  >
                    {{ item }}
                  </button>
                </div>

                <li>Size</li>
                <div>
                  <button
                    v-for="size in sizesShoes"
                    :key="size"
                    class="border border-btnColor btn-sm hover:border-btnColor mb-2 me-3 px-6 rounded-none"
                    :class="{ 'bg-btnColor': selectedSize === size }"
                    @click="selectSize(size)"
                  >
                    {{ size }}
                  </button>
                </div>
                <div></div>
                <li>
                  <!-- You can open the modal using ID.showModal() method -->
                  <button
                    class="outline-none border-0 hover:underline hover:text-btnColor"
                    onclick="my_modal_4.showModal()"
                  >
                    Panduan Ukuran
                  </button>
                  <dialog id="my_modal_4" class="modal">
                    <div class="modal-box w-11/12 max-w-5xl bg-white">
                      <h3 class="font-bold text-lg">Ukuran</h3>
                      <p class="py-4">
                        <span class="block">Panduan Ukuran</span>Panduan Ukuran
                        Ukuran produk ini disediakan oleh Penjual dan diperoleh
                        dari pengukuran produk secara manual. Mungkin terdapat
                        selisih 1-2 cm
                      </p>
                      <div
                        class="overflow-x-auto w-full flex justify-center items-center"
                      >
                        <table class="table">
                          <!-- head -->
                          <thead>
                            <tr class="text-lg">
                              <th>EU</th>
                              <th>Panjang Kaki (cm)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- row 1 -->
                            <tr>
                              <th>36</th>
                              <td>23</td>
                            </tr>
                            <!-- row 2 -->
                            <tr class="bg-slate-100">
                              <th>37</th>
                              <td>23.5</td>
                            </tr>
                            <!-- row 3 -->
                            <tr>
                              <th>38</th>
                              <td>24</td>
                            </tr>
                            <tr class="bg-slate-100">
                              <th>39</th>
                              <td>24.5</td>
                            </tr>
                            <tr>
                              <th>40</th>
                              <td>25</td>
                            </tr>
                            <tr class="bg-slate-100">
                              <th>41</th>
                              <td>25.5</td>
                            </tr>
                            <tr>
                              <th>42</th>
                              <td>26</td>
                            </tr>
                            <tr class="bg-slate-100">
                              <th>43</th>
                              <td>26.5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-action">
                        <form method="dialog">
                          <!-- if there is a button, it will close the modal -->
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </li>
                <li>Kuantitas</li>
                <div class="inline-flex items-center me-3">
                  <button
                    class="text-black px-2 py-1 border hover:bg-slate-200 cursor-pointer"
                    @click="decrementQuantity"
                  >
                    -
                  </button>
                  <span class="border border-x-0 px-4 py-1">
                    {{ quantity }}</span
                  >
                  <button
                    class="text-black px-2 py-1 border hover:bg-slate-200 cursor-pointer"
                    @click="incrementQuantity"
                  >
                    +
                  </button>
                  <span class="ms-4 border-0 text-sm">Tersisa 4.444 buah</span>
                </div>
              </ul>
              <div class="flex gap-4">
                <button
                  class="border-2 border-btnColor outline-none bg-yellow-300 py-2 px-8 mt-5 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-btnColor"
                  @click="addToKeranjang($route.params.id)"
                >
                  Masukkan Keranjang
                </button>

                <nuxt-link to="/keranjang">
                  <button
                    class="border-2 border-transparent outline-none bg-btnColor py-2 px-8 mt-5 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
                  >
                    Buy Now
                  </button>
                </nuxt-link>
              </div>

              <!-- You can open the modal using ID.showModal() method -->
            </form>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full mt-5">
        <div class="font-light text-slate-950 bg-white p-5 place-items-center">
          <h3 class="text-3xl mb-4 font-normal">Spesifikasi Product</h3>
          <ul
            class="list-spesifikasi-product grid grid-cols-[150px_minmax(300px,_1fr)] gap-2"
          >
            <li>Name</li>
            <h4>{{ detailProduct.title }}</h4>
            <li>Merk</li>
            <h4>Dobujack</h4>
            <li>Category</li>
            <h4>{{ detailProduct.category }}</h4>
            <li>Tinggi Sepatu</li>
            <h4>Rendah</h4>
            <li>Stok</li>
            <h4>3400</h4>
            <li>Dikirim Dari</li>
            <h4>KAB. BOGOR</h4>
          </ul>
        </div>
        <div
          class="font-light mt-4 p-5 text-slate-950 bg-white place-items-center mb-5"
        >
          <h3 class="text-3xl mb-4 font-normal">Deskripsi Product</h3>
          <p>{{ detailProduct.description }}</p>
        </div>
      </div>

      <!--  -->
      <div
        v-if="productsCategory.length > 0"
        class="bg-white text-slate-900 p-5"
      >
        <h2 class="text-3xl">Produk Terkait</h2>
        <div
          class="list-card flex justify-between items-center flex-wrap cursor-pointer"
        >
          <CardProduct
            v-for="product in productsCategory"
            :key="product.id"
            :product="product"
            class="card p-3 w-[250px] hover:bg-secondary"
          />
        </div>
      </div>

      <notifications
        group="notifKeranjangSuccess"
        class="wrapper-notification mt-[17rem] me-[34rem]"
      >
        <template slot="body">
          <div
            class="notification flex justify-center items-center gap-3 flex-col text-white"
          >
            <div class="notification-icon">
              <i class="fas fa-check bg-green-600"></i>
            </div>
            <p class="notification-text">
              Product berhasil ditambahkan ke keranjang.
            </p>
          </div>
        </template>
      </notifications>

      <notifications
        group="notifKeranjangError"
        class="wrapper-notification-error mt-[17rem] me-[36rem]"
      >
        <template slot="body">
          <div
            class="notification flex justify-center gap-3 items-center flex-col text-white"
          >
            <div class="notification-icon">
              <i class="fas fa-times bg-red-600"></i>
            </div>
            <p class="notification-text">Gagal menambahkan ke keranjang.</p>
            <p class="notification-text font-normal">
              pastikan Anda sudah memilih
              <span class="font-semibold bg-red-600">
                warna dan Size Sepatu
              </span>
            </p>
          </div>
        </template>
      </notifications>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import CardProduct from '../../components/CardProduct.vue'
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      detailProduct: {
        title: '',
        price: '',
        description: '',
        category: '',
        rating: { rate: 0, count: 0 },
      },
      productsCategory: [],

      pilihanWarna: ['Grey', 'Black', 'White'],
      selectedWarna: '',

      sizesShoes: ['36', '37', '38', '39', '40', '41', '42', '43'], // Daftar ukuran sepatu
      selectedSize: null,
      quantity: 1,
      showError: false, // Menampilkan pesan kesalahan jika true
      diskonPersentasi: 50, // misal diskon 5 persen
    }
  },
  computed: {
    isAlreadyProduct() {
      return this.$store.state.index.isAlreadyInCart
    },
  },
  created() {
    this.getDetailProduct()
  },
  methods: {
    decrementQuantity() {
      this.quantity--
    },
    incrementQuantity() {
      this.quantity++
    },
    async getDetailProduct() {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products/' + this.$route.params.id
        )
        this.detailProduct = response.data
        this.getProductsCategory()
      } catch (error) {
        console.log(error.message)
      }
    },
    async getProductsCategory() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${this.detailProduct.category}`
        )
        this.productsCategory = response.data
      } catch (error) {
        console.log(error.message)
      }
    },
    hitungHargaAkhir(hargaAwal) {
      const nilaiDollar = hargaAwal // Misalnya, 50 Dollar
      // Nilai tukar Dollar ke Rupiah
      const kursDollarKeRupiah = 15000 // Ini adalah nilai tukar kurs mata uang aktual
      // Menghitung nilai dalam Rupiah
      const nilaiRupiah = nilaiDollar * kursDollarKeRupiah
      const diskon = (this.diskonPersentasi * 100) / nilaiRupiah
      const hargaAkhir = nilaiRupiah - diskon
      return hargaAkhir.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      })
    },
    selectSize(size) {
      this.selectedSize = size
      console.log(this.selectedSize)
    },
    selectWarna(warna) {
      this.selectedWarna = warna
      console.log(this.selectedWarna)
    },
    addToKeranjang(id) {
      if (
        this.selectedWarna === '' ||
        this.selectedSize === null ||
        this.quantity === 0
      ) {
        this.$notify({
          group: 'notifKeranjangError',
          width: '800px',
        })

        return
      }
      this.showError = false

      const deskripsiPemesanan = {
        warna: this.selectedWarna,
        size: this.selectedSize,
        quantity: this.quantity,
        checked: false,
      }
      const product = { ...this.detailProduct, deskripsiPemesanan }
      this.$store.commit('index/ADD_KERANJANG', product)
      this.$notify({
        group: 'notifKeranjangSuccess',
        width: '800px',
      })
      this.selectedSize = null
      this.selectedWarna = ''
      this.quantity = 1
    },
  },
}
</script>
<style scoped>
.wrapper-notification-error {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
}
.wrapper-notification {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 2px;
}
/* Mengubah gaya teks pada elemen <p> dalam slot */
.notification {
  padding: 28px 5px !important;
  font-size: 16px;
}
.notification p {
  text-align: center;
  width: 100%;
}

.notification-icon i {
  display: inline-block;
  height: 43px;
  width: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.7rem;
}

.list-spesifikasi-product li {
  color: rgba(0, 0, 0, 0.7);
}
</style>
