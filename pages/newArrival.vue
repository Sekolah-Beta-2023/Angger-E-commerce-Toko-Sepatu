<template>
  <section id="newArrival" class="bg-secondary">
    <div class="container w-[90%] pt-[130px] pb-8">
      <div class="flex justify-between">
        <div class="bg-slate-50 w-[25%] p-5 mr-5 rounded-md">
          <div
            class="title-product-newArrival flex justify-between items-center"
          >
            <h1 class="font-semibold">NEW OFFER</h1>
            <a
              class="text-red-600 font-semibold hover:text-red-900"
              href="#newArrival"
              >More</a
            >
          </div>
          <div
            v-for="(item, index) in productNewArrival"
            :key="index"
            class="mt-3 border-t-2 border-slate-200 w-[100%] h-[160px] p-3 flex justify-between items-center"
          >
            <img class="w-[100px]" :src="item.src" :alt="item.alt" />
            <div class="flex items-start flex-col">
              <h3 class="font-semibold my-3">{{ item.name }}</h3>
              <div class="card-product-rating">
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">${{ item.harga }}</span>
                <span class="text-red-600 font-semibold line-through">{{
                  item.harga
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="box-card-newArrival w-[75%]">
          <div
            class="banner-newArrival w-[100%] h-[300px] bg-no-repeat bg-center relative rounded-md overflow-hidden mb-5"
          >
            <div
              class="h-[100%f flex-col z-10 absolute text-slate-50 flex justify-center items-center"
            >
              <h3 class="text-btnColor text-5xl mt-9 mb-3 font-semibold">
                New Arrival
              </h3>
              <p class="w-[70%] text-lg mb-5 text-center font-normal">
                Discover the latest style with our newest collection, Our shoe
                store offers the most up-to-date options. From modern designs to
                the latest trends, Elevate your appearance with our curated
                selection of shoes!
              </p>
              <a
                href="#Product"
                class="border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
                >Shop No</a
              >
            </div>
          </div>
          <div
            class="card-newArrival bg-slate-50 flex-wrap flex justify-between items-center gap-1"
          >
            <div
              v-for="(item, index) in products"
              :key="index"
              class="w-[215px] h-auto p-3 hover:bg-secondary"
            >
              <img class="w-[150px]" :src="item.src" :alt="item.alt" />
              <h3 class="border-t-2 border-slate-200 pt-3 mb-3 font-bold">
                {{ item.name }}
              </h3>
              <p class="font-semibold text-slate-600 mb-2">
                {{ item.description }}
              </p>
              <div class="card-product-rating">
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="mt-2 flex justify-between items-center">
                <span class="font-semibold">${{ item.harga }}</span>
                <span class="text-red-600 font-semibold line-through"
                  >${{ item.diskon }}</span
                >
              </div>
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
      products: [
        {
          src: require('@/assets/product/converse-one-star-Black.png'),
          alt: 'converse-one-star-Black.png',
          name: 'Converse one star Black<',
          description:
            ' Iconic sneaker product that offers classic and versatile style.',
          harga: 447,
          diskon: 417,
        },
        {
          src: require('@/assets/product/converse-one-star-Denim.png'),
          alt: 'Converse one star Denim',
          name: 'Converse one star Denim',
          description: 'Stylish and trendy sneaker that features a denim upper',
          harga: 449,
          diskon: 600,
        },
        {
          src: require('@/assets/product/converse-one-star-Grey.png'),
          alt: 'Converse one star Grey',
          name: 'Converse one star Grey',
          description:
            'The grey colorway gives the shoes a cool and understated appearance.',
          harga: 455,
          diskon: 339,
        },
        {
          src: require('@/assets/product/converse-run-star-Blue.png'),
          alt: 'Converse run star Blue',
          name: 'Converse run star Blue',
          description:
            'Blue colorway adds a bold and playful touch to your outfit.',
          harga: 566,
          diskon: 449,
        },
        {
          src: require('@/assets/product/Converse-run-star-hike-Mustard.png'),
          alt: 'Converse run star hike',
          name: 'Converse run star hike',
          description:
            ' Sneaker that combines the best of sporty and outdoor-inspired design.',
          harga: 700,
          diskon: 449,
        },
        {
          src: require('@/assets/product/converse-one-star-Orange.png'),
          alt: 'Converse one star Orange',
          name: 'Converse one star Orange',
          description: ' Color to your footwear collection.The bright orange.',
          harga: 400,
          diskon: 331,
        },
        {
          src: require('@/assets/product/converse-one-star-Red.png'),
          alt: 'Converse one star Red',
          name: 'Converse one star Red',
          description:
            ' Red colorway instantly commands attention and infuses your outfit',
          harga: 199,
          diskon: 244,
        },
        {
          src: require('@/assets/product/converse-run-star-Black.png'),
          alt: 'Converse run star Black',
          name: 'Converse run star Black',
          description:
            'Black colorway exudes a sense of sophistication and pairs well.',
          harga: 299,
          diskon: 399,
        },
      ],
      productNewArrival: [
        {
          src: require('@/assets/product/converse-one-star-Sage.png'),
          alt: 'converse-one-star-Sage',
          name: 'One Star Sage',
          harga: 227,
        },
        {
          src: require('@/assets/product/Nike-jordan-air.png'),
          alt: 'Nike Air Low',
          name: 'Nike Air Low',
          harga: 331,
        },
        {
          src: require('@/assets/product/converse-one-star-low.png'),
          alt: 'converse-one-star-low',
          name: 'One Star Low',
          harga: 166,
        },
        {
          src: require('@/assets/product/Converse-one-star-high.png'),
          alt: 'Converse-one-star-high',
          name: 'One Start High',
          harga: 232,
        },
        {
          src: require('@/assets/product/Nike-jordan-high.png'),
          alt: 'Nike-jordan-high.png',
          name: 'Nike Jordan High',
          harga: 487,
        },
      ],
    }
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

/* new arrival end */
</style>
