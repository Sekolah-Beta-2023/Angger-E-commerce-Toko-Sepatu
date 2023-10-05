<template>
  <section id="wish-list">
    <div class="pt-[130px] pb-5 container w-[65%] text-slate-900">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <nuxt-link class="text-primary text-md font-normal" to="/"
              >Beranda</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="text-primary text-md font-normal" to="/products"
              >Products</nuxt-link
            >
          </li>
          <li>wishlist</li>
        </ul>
      </div>

      <div v-if="wishListItems.length > 0">
        <h2 class="text-3xl my-3">Wishlist</h2>
        <div class="flex justify-start items-end flex-wrap bg-white gap-3 p-5">
          <nuxt-link
            v-for="product in wishListItems"
            :key="product.id"
            :to="`/products/${product.id}`"
            class="w-[270px] h-auto p-3 overflow-hidden hover:bg-slate-50 transition cursor-pointer"
          >
            <div
              class="grid h-[200px] overflow-hidden card rounded-box place-items-center"
            >
              <img
                class="bg-transparent w-[180px] min-[180px] object-cover"
                :src="product.image"
                :alt="product.image"
              />
            </div>

            <h3 class="border-t-2 font-semibold border-slate-200 pt-2 pb-1">
              {{ product.title.substring(0, 25) }}
            </h3>
            <p class="mb-2 text-slate-600 font-normal">
              {{ product.description.substring(0, 45) }} . . .
            </p>
            <!-- show nilai rating yang dipilih -->
            <div class="mb-2 flex justify-between items-center">
              <p>
                <DisplayRating :rating="Math.ceil(product.rating.rate)" />
              </p>
              <div class="stat-figure cursor-default">
                <i class="fa fa-heart" style="color: red"></i>
              </div>
            </div>
            <div class="mb-2 flex justify-between items-center">
              <span class="text-base font-bold text-red-600">{{
                hitungHargaAkhir(product.price)
              }}</span>
              <span class="line-through italic text-slate-600"
                >$ {{ product.price }}</span
              >
            </div>
            <button
              class="mt-2 block text-center w-full bg-btnColor rounded-sm py-[5px]"
            >
              <a
                href="#Product"
                class="border-2 text-black border-transparent outline-none text-base cursor-pointer transition font-bold hover:bg-transparent hover:border-btnColor"
                >Buy Now</a
              >
            </button>
          </nuxt-link>
        </div>
      </div>
      <div v-else>
        <div class="hero min-h-[450px]">
          <div class="hero-content text-center">
            <div class="max-w-lg">
              <h1 class="text-5xl font-bold">Wishlist Anda Kosong</h1>
              <p class="py-6">
                Wishlist Anda adalah tempat terbaik untuk menyimpan produk
                impian Anda. Isi daftar keinginan Anda dengan berbagai produk
                terbaru dan terbaik yang kami tawarkan.
              </p>
              <nuxt-link to="/products">
                <button
                  class="border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
                >
                  Belanja Sekarang
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DisplayRating from '../components/DisplayRating.vue'
export default {
  components: {
    DisplayRating,
  },
  data() {
    return {
      diskonPersentasi: 50, // misal diskon 5 persen
    }
  },

  computed: {
    // Mengambil data wishListItem dari state Vuex dalam modul 'index'
    wishListItems() {
      return this.$store.state.index.wishListItems // Ganti 'index' dengan nama modul yang sesuai
    },
  },
  methods: {
    deleteProduct(id) {
      // akses action di store(global state yg dibuat dengan vuex)
      this.$store.dispatch('index/removeWishList', id)
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
  },
}
</script>
<style>
.stat-figure .active {
  color: red;
}
</style>
