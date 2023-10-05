<template>
  <section id="Product" class="bg-white">
    <div class="container w-[90%] pt-[120px] text-slate-900">
      <div
        class="banner-product w-[100%] h-[400px] bg-no-repeat bg-cover bg-center relative rounded-md overflow-hidden after: contents-'' after:absolute after:w-[100%] after:h-[100%] bg-[rgba(0, 0, 0, 0.5)]"
      >
        <div class="z-10 absolute text-slate-50 deskripsi-banner-product">
          <h3 class="text-btnColor text-5xl mb-3">Top Branch Collection</h3>
          <p class="w-[50%] text-lg mb-10 font-normal">
            Discover style and comfort with every step, Our shoe store offers
            the best selection. From casual to formal, we have it all, Superior
            quality, unmatched style, oh wow!
          </p>
          <a
            href="#Product"
            class="border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
            >Shop No</a
          >
        </div>
      </div>
      <div v-if="products.length === 0">
        <div class="w-100 h-80"><LoadingPage /></div>
      </div>
      <div v-else>
        <div class="flex justify-between items-center w-full bg-white">
          <select
            v-model="selectCategoryProducts"
            class="bg-white dropdown-category p-3 border-2 border-btnColor rounded-md"
          >
            <option value="">All category</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Kasual">Kasual</option>
            <option value="Formal">Formal</option>
          </select>

          <div
            class="my-4 border-2 border-btnColor rounded-md w-[50%] flex justify-between items-center bg-white"
          >
            <input
              v-model="searchQueryProducts"
              type="search"
              class="bg-white w-full p-2 outline-none border-0"
              placeholder="Search Product is here..."
              list="title-product"
            />
            <!-- membuat suggestion pada search product -->
            <datalist id="title-product">
              <option
                v-for="item in products"
                :key="item.id"
                :value="item.title"
              ></option>
            </datalist>
            <!-- @click="searchProducts" -->

            <button
              class="w-36 text-lg p-2 text-center bg-btnColor outline-none cursor-pointer transition font-semibold rounded-sm inline-block"
            >
              Search
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div class="mt-1">
          <div class="box-card flex justify-center items-start">
            <div class="card-product w-[25%] bg-slate-50 p-5 mr-5 rounded-md">
              <div class="flex justify-between items-center">
                <h3 class="font-semibold">HOT DEALS</h3>
              </div>
              <div v-for="product in productsHotDeals" :key="product.id">
                <nuxt-link :to="`/products/${product.id}`">
                  <img
                    class="w-[260px] h-auto"
                    :src="product.image"
                    :alt="product.title"
                  />
                  <h3
                    class="font-semibold pt-3 border-t-2 border-slate-300 capitalize my-1"
                  >
                    {{ product.title }}
                  </h3>
                  <div class="text-slate-600 mb-1">
                    <p>
                      <DisplayRating :rating="Math.ceil(product.rating)" />
                    </p>
                  </div>
                  <div class="flex justify-between items-center mb-5">
                    <span class="text-lg font-bold text-red-600">{{
                      product.price
                    }}</span>
                    <span class="line-through italic text-slate-600">{{
                      product.price
                    }}</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
            <div class="rounded-md p-5 w-[75%] bg-slate-50 flex-wrap">
              <div
                class="flex justify-between items-center border-b-2 border-slate-200"
              >
                <h2 class="font-semibold text-xl">Product</h2>
              </div>

              <div>
                <div
                  v-if="combineFilterProducts.length > 0"
                  class="list-card flex justify-between items-center flex-wrap cursor-pointer"
                >
                  <CardProduct
                    v-for="product in combineFilterProducts"
                    :key="product.id"
                    :product="product"
                    class="card p-5 w-[270px] hover:bg-secondary"
                  />
                </div>
                <div v-else class="halaman-error w-full h-80 overflow-hidden">
                  <NotFoundPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NotFoundPage from '../../components/NotFoundPage.vue'
import LoadingPage from '../../components/LoadingPage.vue'
import CardProduct from '../../components/CardProduct.vue'

export default {
  components: {
    NotFoundPage,
    LoadingPage,
    CardProduct,
  },
  data() {
    return {
      products: [],

      selectedRating: 0,
      searchQueryProducts: '', // filtering data
      selectCategoryProducts: '',
      searchResults: [],
      productsHotDeals: [],
    }
  },
  computed: {
    resultQueryProducts() {
      if (!this.searchQueryProducts) {
        return this.products
      } else {
        return this.products.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(this.searchQueryProducts.toLowerCase())
        })
      }
    },
    resultQuerySelected() {
      if (!this.selectCategoryProducts) {
        return this.products
      } else {
        return this.products.filter((item) => {
          return item.category === this.selectCategoryProducts
        })
      }
    },
    // menggabungkan hasil query input dan dropdown
    combineFilterProducts() {
      const setQuerySelected = new Set(this.resultQuerySelected)
      const result = this.resultQueryProducts.filter((item) => {
        return setQuerySelected.has(item)
      })
      return result
    },
  },
  created() {
    this.getProducts()
    this.getProductsHotDeals()
  },
  methods: {
    async getProductsHotDeals() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select('*')
          .range(0, 5)
        if (data) {
          this.productsHotDeals = await data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    handleWishList(item) {},
    async getProducts() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select('*')
        if (data) {
          this.products = data
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    handleRatingSelected(rating) {
      this.selectedRating = rating
    },
  },
}
</script>

<style>
/* product start */
.banner-product {
  background-image: url('../../assets/background/banner-product.jpg');
}
.banner-product::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
}

.deskripsi-banner-product {
  padding: 90px 5px 5px 60px;
}

/* media query mobile */
@media screen and (max-width: 576px) {
  #Product .container {
    width: 100%;
    padding: 20px;
    overflow: hidden;
    padding-top: 150px;
  }
  .banner-product {
    height: 300px;
  }
  .deskripsi-banner-product {
    padding: 20px;
  }
  .deskripsi-banner-product > h3 {
    font-size: 1.7rem;
  }
  .deskripsi-banner-product > p {
    width: 100%;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .dropdown-category option:hover {
    background-color: #fefefe;
  }
  .box-card {
    flex-direction: column;
  }

  .card-product-promo {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .card-product {
    width: 100%;
    margin-bottom: 20px;
  }

  .box-card .rounded-md {
    width: 100%;
  }
  .list-card {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
  .list-card > .card {
    width: 100% !important;
  }
}
/* product end */
</style>
