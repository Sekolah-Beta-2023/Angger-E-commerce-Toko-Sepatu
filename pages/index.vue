<template>
  <main>
    <section id="Home" class="h-screen">
      <div
        class="flex h-[100%] container w-[90%] text-slate-900 justify-between"
      >
        <div class="home-content flex justify-end items-start flex-col w-[50%]">
          <h1 class="text-5xl capitalize font-medium mb-2">
            Produk Sempurna Untuk
          </h1>
          <h1 class="text-5xl capitalize font-medium mb-9">
            Sekarang
            <span class="text-btnColor font-bold text-3xl">dan</span>
            Selamanya.
          </h1>
          <p class="w-[80%] text-lg mb-10 text-slate-600 font-medium">
            Temukan koleksi terbaru kami sepatu yang stylish dan nyaman. Pilih
            dari seleksi berkualitas tinggi kami, termasuk sepatu kasual, sepatu
            olahraga, dan merek-merek terkenal.
          </p>
          <div class="home-content-btn">
            <button
              class="me-2 border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
            >
              Belanja Sekarang
            </button>
            <button
              class="border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
            >
              Ketahui Lebih Lanjut
            </button>
          </div>
          <div class="home-content-sosmed">
            <div class="sosmed">
              <a
                href="https://www.instagram.com/anggernramn_/"
                target="_blank"
                class="btn-sosmed"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/angger_amin?t=CABG0fRgK4KUmpdh-KRitg&s=08"
                target="_blank"
                class="btn-sosmed"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://t.me/AnggerNurAmin"
                target="_blank"
                class="btn-sosmed"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="image-content w-[50%] h-[100%] pt-[100px] overflow-hidden flex justify-end flex-col items-end"
        >
          <img
            class="w-[580px] h-[100%] object-cover"
            :src="imageHome"
            alt="Home profile"
          />
        </div>
      </div>
    </section>
    <div class="w-[90%] container bg-white mx-auto mb-5">
      <section id="Headline ">
        <div
          class="flex w-[90%] mx-auto py-[70px] text-slate-900 justify-between items-center"
        >
          <div class="w-[50%] flex justify-start items-stretch gap-4">
            <div class="flex flex-col gap-3">
              <img :src="image1" :alt="image1" class="w-[250px]" />
              <img :src="image2" :alt="image2" class="w-[250px]" />
            </div>
            <img :src="image3" :alt="image3" class="w-[230px]" />
          </div>
          <div class="content w-[50%]">
            <h2 class="text-black text-5xl font-semibold">
              Kami menyediakan sepatu berkualitas tinggi.
            </h2>
            <p class="text-base my-9 text-slate-800">
              Kami dengan bangga menyediakan beragam pilihan sepatu berkualitas
              tinggi untuk memenuhi kebutuhan gaya dan kenyamanan Anda. Dengan
              fokus pada kualitas dan desain.
            </p>
            <nuxt-link to="/about"
              ><button
                class="me-2 border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base text-black cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor hover:text-slate-950"
              >
                Jelajahi Lebih Banyak
              </button></nuxt-link
            >
          </div>
        </div>
      </section>
      <section id="Categories ">
        <div class="w-[90%] mx-auto py-[70px] text-slate-950">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-semibold text-slate-950">Kategori</h2>
            <nuxt-link
              to="/products"
              class="border-b-2 pb-1 hover:text-red-600 transition"
              >Semua product <i class="fas fa-arrow-right ms-1"></i>
            </nuxt-link>
          </div>
          <div class="flex justify-between items-stretch gap-5">
            <div v-for="product in productCategoriesKasual" :key="product.id">
              <nuxt-link
                :to="`/products/${product.id}`"
                class="w-[300px] h-[150px] overflow-hidden"
              >
                <img
                  :src="product.image"
                  alt="product.image"
                  class="w-[1800px] h-[220px] object-cover"
                />
                <h3 class="bg-slate-600 text-white text-center py-3">
                  {{ product.category }}
                </h3>
              </nuxt-link>
            </div>
            <div v-for="product in productCategoriesOlahraga" :key="product.id">
              <nuxt-link
                :to="`/products/${product.id}`"
                class="w-[300px] h-[150px] overflow-hidden bg-green-600 rounded-md"
              >
                <img
                  :src="product.image"
                  alt="product.image"
                  class="w-[1800px] h-[220px] object-cover"
                />
                <h3 class="bg-slate-600 text-white text-center py-3">
                  {{ product.category }}
                </h3>
              </nuxt-link>
            </div>
            <div v-for="product in productCategoriesFormal" :key="product.id">
              <nuxt-link
                :to="`/products/${product.id}`"
                class="w-[300px] h-[150px] overflow-hidden bg-green-600 rounded-md"
              >
                <img
                  :src="product.image"
                  alt="product.image"
                  class="w-[1800px] h-[220px] object-cover"
                />
                <h3 class="bg-slate-600 text-white text-center py-3">
                  {{ product.category }}
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section id="TrendingNow">
        <div class="w-[90%] mx-auto py-[70px] text-slate-950">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-semibold text-slate-950">Sedang Tren</h2>
            <nuxt-link
              to="/products"
              class="border-b-2 pb-1 hover:text-red-600 transition"
              >Semua product <i class="fas fa-arrow-right ms-1"></i>
            </nuxt-link>
          </div>
          <div class="flex justify-between items-stretch gap-5">
            <div v-for="product in trendingNow" :key="product.id">
              <nuxt-link
                :to="`/products/${product.id}`"
                class="w-[300px] h-[150px] overflow-hidden rounded-md"
              >
                <img
                  :src="product.image"
                  alt="product.image"
                  class="w-[1800px] h-[250px] object-cover"
                />
                <h3 class="bg-slate-600 text-white text-center py-3">
                  {{ product.title }}
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section id="NewArrival">
        <div class="w-[90%] mx-auto py-[70px] text-slate-900">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-semibold text-slate-950">
              Koleksi Terbaru
            </h2>
            <nuxt-link
              to="/newArrival"
              class="border-b-2 pb-1 hover:text-red-600 transition"
              >Semua product <i class="fas fa-arrow-right ms-1"></i>
            </nuxt-link>
          </div>
          <div class="flex justify-between items-stretch gap-7">
            <div v-for="product in newArrival" :key="product.id">
              <nuxt-link
                :to="`/products/${product.id}`"
                class="w-[300px] h-[150px] overflow-hidden bg-green-600 rounded-md"
              >
                <img
                  :src="product.image"
                  alt="product.image"
                  class="w-[1800px] h-[220px] object-cover"
                />
                <h3 class="bg-slate-600 text-white text-center py-3">
                  {{ product.title }}
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section id="GetMembeship">
        <div
          class="card-member-product w-[100%] h-[400px] text-white flex justify-center items-center flex-col gap-4"
        >
          <h2 class="text-4xl font-semibold">Dapatkan Diskon untuk Member</h2>
          <p>Dapatkan diskon eksklusif dengan Member kami. Segera bergabung!</p>
          <nuxt-link to="/contact">
            <button
              class="me-2 border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base text-black cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor hover:text-white"
            >
              Bergabung Sekarang
            </button></nuxt-link
          >
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      imageHome: require('@/assets/background/image-home.avif'),
      image1: require('../assets/background/banner-newArrival.jpg'),
      image2: require('../assets/background/banner-product.jpg'),
      image3: require('../assets/background/shoes-about.jpeg'),

      user: null,
      productCategoriesOlahraga: [],
      productCategoriesKasual: [],
      productCategoriesFormal: [],

      trendingNow: [],
      newArrival: [],
    }
  },
  created() {
    this.cekUser()
    this.getProductsNewArrival()
    this.getProductsCategoryOlahraga()
    this.getProductsCategoryKasual()
    this.getProductsCategoryFormal()
    this.getProductsTrending()
  },
  methods: {
    async cekUser() {
      try {
        const {
          data: { user },
        } = await this.$supabase.auth.getUser()
        this.user = user
      } catch (error) {}
    },
    async getProductsTrending() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select('*')
          .range(3, 4)

        if (data) {
          this.trendingNow = data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    async getProductsCategoryOlahraga() {
      const category = 'Olahraga'
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .eq('category', category)
          .range(0, 0)

        if (data) {
          this.productCategoriesOlahraga = data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    async getProductsCategoryKasual() {
      const category = 'Kasual'
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .eq('category', category)
          .range(0, 0)

        if (data) {
          this.productCategoriesKasual = data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    async getProductsCategoryFormal() {
      const category = 'Formal'
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .eq('category', category)
          .range(0, 0)

        if (data) {
          this.productCategoriesFormal = data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    async getProductsNewArrival() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select('*')
          .range(0, 2)
        if (data) {
          this.newArrival = await data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
  },
}
</script>
<style>
.card-member-product {
  position: relative;
  z-index: 1;
  background-image: url('../assets/background/bg-discount.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.card-member-product::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
@media screen and (max-width: 576px) {
  #home {
    height: min-content;
  }
  section .container {
    padding-top: 500px;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    padding: 0px;
    flex-direction: column;
  }
  .home-content {
    padding-top: 200px;
    color: white;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-image: url('@/assets/background/image-home.avif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .home-content::before {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .home-content p {
    width: 100%;
    text-align: center;
    color: white;
    padding: 20px;
    margin-bottom: 0;
  }
  .home-content-btn,
  .home-content-sosmed {
    margin-left: 30px;
  }
  .home-content-sosmed {
    margin-top: 15px;
  }
  .image-content {
    display: none;
  }
}
</style>
