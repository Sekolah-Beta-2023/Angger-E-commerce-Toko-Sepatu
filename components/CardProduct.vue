<template>
  <nuxt-link :to="`/products/${product.id}`">
    <div
      class="grid h-[200px] overflow-hidden card rounded-box place-items-center"
    >
      <img
        class="bg-transparent w-[180px] h-[150px] object-cover"
        :src="product.image"
        :alt="product.image"
      />
    </div>

    <h3
      class="inline-block border-t-2 font-semibold border-slate-200 pt-2 pb-1 h-[60px] overflow-hidden"
    >
      {{ product.title.toString().substring(0, 30) }}
    </h3>
    <p class="mb-2 text-slate-600 font-normal">
      {{ product.description.toString().substring(0, 35) }} . . .
    </p>
    <!-- show nilai rating yang dipilih -->
    <div class="mb-2 flex justify-between items-center">
      <p>
        <DisplayRating :rating="Math.ceil(product.rating)" />
      </p>
      <div v-if="!user">
        <div class="stat-figure text-primary">
          <i class="fa fa-heart" :class="{ active: iconWishList }"></i>
        </div>
      </div>
      <div v-else>
        <div
          class="stat-figure text-primary"
          @click.prevent.stop="addWishList(product.id)"
        >
          <i class="fa fa-heart" :class="{ active: iconWishList }"></i>
        </div>
      </div>
    </div>
    <div class="mb-2 flex justify-between items-center">
      <span class="text-base font-bold text-red-600">
        Rp
        {{ product.price }}
      </span>
      <span class="line-through italic text-slate-600"
        >Rp {{ product.price }}</span
      >
    </div>
    <button
      class="mt-2 block text-center w-full bg-btnColor rounded-sm py-[5px]"
    >
      <nuxt-link
        :to="`/products/${product.id}`"
        class="border-2 text-black border-transparent outline-none text-base cursor-pointer transition font-bold hover:bg-transparent hover:border-btnColor"
        >Belanja Sekarang</nuxt-link
      >
    </button>
    <notifications group="notifReview" class="mt-32 me-14" />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      diskonPersentasi: 50, // misal diskon 5 persen
      iconWishList: false,
      user: null,
    }
  },
  created() {
    this.cekUser()
  },

  methods: {
    async cekUser() {
      // lewat local storange agar tidak melakukan request terus menerus
      try {
        const {
          data: { user },
        } = await this.$supabase.auth.getUser()
        this.user = user
        console.log('user', user)
      } catch (error) {
        console.error(error)
      }
    },
    // mengakses action diglobal state vuex menggunakan dispatch
    addWishList(id) {
      this.iconWishList = !this.iconWishList
      if (this.iconWishList) {
        // proses pemanggilan action ('nama_file/nama_method', parameter)
        this.$store.dispatch('index/addWishList', id)
        this.$notify({
          group: 'notifReview',
          type: 'success',
          text: 'Berhasil menambahkan ke wishlist.',
        })
      } else {
        this.$store.dispatch('index/removeWishList', id)
        this.$notify({
          group: 'notifReview',
          type: 'error',
          text: 'Menghapus wishlist.',
        })
      }
    },
    // hitung diskon
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
.stat-figure i {
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
}
.stat-figure .active {
  color: red;
}
</style>
