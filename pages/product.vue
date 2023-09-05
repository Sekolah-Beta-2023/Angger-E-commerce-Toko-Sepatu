<template>
  <section id="Product">
    <div class="container w-[90%] pt-[120px]">
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
      <div class="mt-5">
        <div class="box-card flex justify-between items-center">
          <div class="card-product w-[25%] bg-slate-50 p-5 mr-5 rounded-md">
            <div class="flex justify-between items-center">
              <h3 class="font-semibold">HOT DEALS</h3>
              <a href="#product" class="transition text-red-600">More</a>
            </div>
            <img
              class="w-[260px]"
              :src="productPromo.src"
              :alt="productPromo.alt"
            />
            <h3
              class="font-semibold pt-3 border-t-2 border-slate-300 capitalize my-1"
            >
              {{ productPromo.name }}
            </h3>
            <div class="text-slate-600 mb-3">
              <RatingUser @rating-selected="handleRatingSelected" />

              <!-- Tampilkan nilai rating yang dipilih -->
              <p>Selected Rating: {{ selectedRating }}</p>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-red-600">{{
                productPromo.diskon
              }}</span>
              <span class="line-through italic text-slate-600">{{
                productPromo.harga
              }}</span>
            </div>
          </div>
          <div class="rounded-md p-5 w-[75%] bg-slate-50 flex-wrap">
            <div
              class="flex justify-between items-center border-b-2 border-slate-200"
            >
              <h2 class="font-semibold text-xl">Product</h2>
              <a href="#newArrival" class="transition text-red-600">More</a>
            </div>
            <div class="list-card flex justify-between items-center">
              <div
                v-for="(item, index) in product"
                :key="index"
                class="card p-5 w-[270px] hover:bg-secondary"
              >
                <img
                  class="w-[180px] h-[150px]"
                  :src="item.src"
                  :alt="item.alt"
                />
                <h3 class="border-t-2 font-semibold border-slate-200 pt-3 my-2">
                  {{ item.name }}
                </h3>
                <p class="mb-3 text-slate-600 font-normal">
                  {{ item.description }}
                </p>
                <RatingUser @rating-selected="handleRatingSelected" />

                <!-- Tampilkan nilai rating yang dipilih -->
                <p>Selected Rating: {{ selectedRating }}</p>
                <div class="mb-2 flex justify-between items-center">
                  <span class="text-lg font-bold text-red-600">{{
                    item.diskon
                  }}</span>
                  <span class="line-through italic text-slate-600">{{
                    item.harga
                  }}</span>
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
import axios from 'axios'
export default {
  data() {
    return {
      productPromo: {
        src: require('@/assets/Product/Nike-blazer-mid.png'),
        alt: 'Nike-blazer-mid.png',
        name: 'Nike Blazer Mid',
        harga: '$452',
        diskon: '$321',
      },
      product: [
        {
          src: require('@/assets/Product/converse-chuck-70.png'),
          alt: 'converse-chuck-70.png',
          name: 'Converse Chuck 70',
          description:
            ' Introducing the Converse-Fssbbcona, the perfect combination of style and performance.',
          harga: '$444',
          diskon: '$345',
        },
        {
          src: require('@/assets/Product/CONVERSE-FFSSBCONA-CONA03500C-Mustard.png'),
          alt: 'CONVERSE-FFSSBCONA-CONA03500C-Mustard.png',
          name: 'Converse Pro Leather',
          description:
            '   product from Converse that has gained popularity for its unique features and classic style.',
          harga: '$420',
          diskon: '$400',
        },
        {
          src: require('@/assets/Product/Nike-Jordan.png'),
          alt: 'Nike-Jordan.png',
          name: 'Nike Jordan Air',
          description:
            ' The perfect combination of style and performance. Designed with innovation is good.',
          harga: '$430',
          diskon: '$500',
        },
      ],
      products: [],
      selectedRating: 0,
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get(
          'https://www.blibli.com/backend/search/products?searchTerm=sepatu'
        )
        this.products = response.data
        console.log(this.products)
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

<style scoped>
/* product start */
.banner-product {
  background-image: url('../assets/background/banner-product.jpg');
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
