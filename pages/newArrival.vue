<template>
  <section id="newArrival" class="bg-secondary">
    <div class="container w-[90%] pt-[130px] pb-8">
      <div class="box-newArrival flex justify-between">
        <div class="menu-newArrival bg-slate-50 w-[25%] p-5 mr-5 rounded-md">
          <div
            class="title-product-newArrival flex justify-between items-center"
          >
            <h1 class="font-semibold">PENAWARAN TERBARU</h1>
          </div>
          <div v-for="product in productsNewOffer" :key="product.id">
            <nuxt-link
              :to="`/products/${product.id}`"
              class="box-card-newArrival mt-3 border-t-2 border-slate-200 w-[100%] h-[160px] p-3 flex justify-between items-center gap-4 hover:bg-secondary transition"
            >
              <div
                class="grid h-[140px] overflow-hidden card rounded-box place-items-center"
              >
                <img
                  class="bg-transparent w-[1800px] h-[100px] object-cover"
                  :src="product.image"
                  :alt="product.image"
                />
              </div>
              <div class="flex items-start flex-col">
                <h3 class="font-normal my-2 text-sm">
                  {{ product.title.substring(0, 25) }}
                </h3>
                <div class="card-product-rating">
                  <p>
                    <DisplayRating :rating="Math.ceil(product.rating)" />
                  </p>
                </div>
                <div class="mb-2 flex justify-between items-start flex-col">
                  <span class="text-sm font-bold text-red-600">{{
                    hitungHargaAkhir(product.price)
                  }}</span>
                  <span class="line-through italic text-slate-600"
                    >Rp. {{ product.price }}</span
                  >
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="box-card-newArrival w-[75%]">
          <div
            class="banner-newArrival w-[100%] h-[300px] bg-no-repeat bg-center relative rounded-md overflow-hidden mb-5"
          >
            <div
              class="content-banner-newArrival h-[100%] flex-col z-10 absolute text-slate-50 flex justify-center items-center"
            >
              <h3 class="text-btnColor text-5xl mt-9 mb-3 font-semibold">
                Koleksi Terbaru
              </h3>
              <p class="w-[70%] text-lg mb-5 text-center font-normal">
                Temukan gaya terbaru dengan koleksi terbaru kami, Toko sepatu
                kami menawarkan opsi yang paling mutakhir. Dari desain modern
                hingga tren terbaru, Tingkatkan penampilan Anda dengan memakai
                sepatu dari produk kami.
              </p>
            </div>
          </div>
          <div
            class="card-newArrival bg-slate-50 flex-wrap flex justify-between items-center gap-2"
          >
            <CardProduct
              v-for="product in productsNewArrival"
              :key="product.id"
              :product="product"
              :user="user"
              class="card p-5 w-[270px] hover:bg-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardProduct from '../components/CardProduct.vue'
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      diskonPersentasi: 50, // misal diskon 5 persen

      productsNewOffer: [],
      productsNewArrival: [],
    }
  },
  created() {
    this.getProducts()
    this.getProductsNewOffer()
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
        console.log('user status', user)
      } catch (error) {
        console.error('error user status', error)
      }
    },
    async getProducts() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select('*')
        if (data) {
          this.productsNewArrival = data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    async getProductsNewOffer() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select('*')
          .range(0, 5)
        if (data) {
          this.productsNewOffer = await data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    }, // hitung diskon
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
.banner-newArrival {
  background-image: url('../assets/background/banner-newArrival.jpg');
}

.banner-newArrival::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.card-newArrival .mr-2:last-of-type {
  margin-right: 0;
}

/* media query mobile */
@media screen and (max-width: 576px) {
  #newArrival .container {
    width: 100%;
    padding: 20px;
    overflow: hidden;
  }
  .box-newArrival > .menu-newArrival {
    order: 1;
    width: 100%;
    padding: 20px;
    margin-right: 20px;
  }
  .box-newArrival {
    padding-top: 120px;
    flex-direction: column;
  }

  .box-card-newArrival {
    width: 100%;
    order: -1;
    margin-bottom: 20px;
  }
  .banner-newArrival {
    height: 350px;
  }

  .content-banner-newArrival > h3 {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }
  .content-banner-newArrival > p {
    widows: 90%;
    font-size: 16px;
  }
  .card-newArrival > .card {
    margin-right: 3px;
    width: 160px;
    margin-bottom: 10px;
  }
}

/* new arrival end */
</style>
