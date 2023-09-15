<template>
  <nuxt-link :to="`/products/${product.id}`">
    <div class="flex justify-center items-center p-5">
      <img
        class="bg-transparent w-[180px] h-[150px]"
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
      <div
        class="stat-figure text-primary"
        @click.prevent.stop="handleWishList(product)"
      >
        <i class="fa fa-heart" :class="{ active: iconWishList }"></i>
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
    }
  },

  methods: {
    handleWishList(prodak) {
      console.log(prodak.title)
      // Toggle status saat ikon diklik
      this.iconWishList = !this.iconWishList
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
