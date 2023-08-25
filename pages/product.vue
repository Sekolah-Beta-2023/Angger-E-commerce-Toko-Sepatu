<template>
  <section id="Product">
    <div class="wrapper-product">
      <div class="banner-product">
        <div class="deskripsi-banner-product">
          <h3>Top Branch Collection</h3>
          <p>
            Discover style and comfort with every step, Our shoe store offers
            the best selection. From casual to formal, we have it all, Superior
            quality, unmatched style, oh wow!
          </p>
          <a href="#Product" class="style-active-button">Shop No</a>
        </div>
      </div>
      <div class="wrapper-card">
        <div class="box-card flex-between">
          <div class="card-product-promo">
            <div class="flex-between">
              <h3>HOT DEALS</h3>
              <a href="#product">More</a>
            </div>
            <img :src="productPromo.src" :alt="productPromo.alt" />
            <h3>{{ productPromo.name }}</h3>
            <div class="card-product-rating">
              <RatingUser @rating-selected="handleRatingSelected" />

              <!-- Tampilkan nilai rating yang dipilih -->
              <p>Selected Rating: {{ selectedRating }}</p>
            </div>
            <div class="harga-product flex-between">
              <span>{{ productPromo.diskon }}</span>
              <span class="harga-awal">{{ productPromo.harga }}</span>
            </div>
          </div>
          <div class="card-product">
            <div class="title-product flex-between">
              <h2>Product</h2>
              <a href="#newArrival">More</a>
            </div>
            <div class="list-card flex-between">
              <div v-for="(item, index) in product" :key="index" class="card">
                <img :src="item.src" :alt="item.alt" />
                <h3>{{ item.name }}</h3>
                <p>
                  {{ item.description }}
                </p>
                <RatingUser @rating-selected="handleRatingSelected" />

                <!-- Tampilkan nilai rating yang dipilih -->
                <p>Selected Rating: {{ selectedRating }}</p>
                <div class="harga-product flex-between">
                  <span>{{ item.diskon }}</span>
                  <span class="harga-awal">{{ item.harga }}</span>
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
      selectedRating: 0,
    }
  },
  methods: {
    handleRatingSelected(rating) {
      this.selectedRating = rating
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary-color: #112852;
  --secondary-color: #efefef;
  --third-color: #fff;
  --btn-color: rgb(238, 178, 12);
  --font-paragraf: rgba(0, 0, 0, 0.7);
  /* rgb btn = rgb(255,203,60) */
}
html {
  scroll-behavior: smooth;
  background-color: var(--secondary-color);
  font-family: 'Lexend', sans-serif;
}
a {
  text-decoration: none;
}
#About,
#Product,
#newArrival {
  background-color: var(--secondary-color);
}
.navbar-container {
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: var(--primary-color);
}

.size-container,
.wrapper-home,
.wrapper-about,
.wrapper-product,
.wrapper-newArrival,
.wrapper-contact,
.wrapper-reviews,
.wrapper-profile,
.wrapper-footer {
  width: 90%;
  margin: 0 auto;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.style-button {
  border: 2px solid var(--btn-color);
  outline: none;
  background-color: transparent;
  padding: 10px 35px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
}
.style-active-button {
  border: 2px solid transparent;
  outline: none;
  background-color: var(--btn-color);
  padding: 10px 35px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
}

.style-button:hover {
  background-color: var(--btn-color);
  border: 2px solid transparent;
}
.style-active-button:hover {
  background-color: transparent;
  border: 2px solid var(--btn-color);
}
/* product start */
.wrapper-product {
  padding-top: 120px;
}

.banner-product {
  width: 100%;
  height: 400px;
  background-image: url('../assets/background/banner-product.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.banner-product::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.wrapper-card {
  margin-top: 20px;
}
.title-product a {
  color: var(--btn-color);
}
.title-product {
  margin-bottom: 10px;
}
.deskripsi-banner-product {
  z-index: 9;
  position: absolute;
  padding: 90px 5px 5px 60px;
  color: white;
}
.deskripsi-banner-product > h3 {
  color: var(--btn-color);
  font-size: 3rem;
  margin-bottom: 10px;
}
.deskripsi-banner-product > p {
  width: 50%;
  font-size: 18px;
  margin-bottom: 40px;
  font-weight: 300;
}
.deskripsi-banner-product > a {
  text-decoration: none;
  color: black;
}
.deskripsi-banner-product > a:hover {
  color: white;
}

.card-product-promo {
  width: 25%;
  background-color: white;
  padding: 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.card-product-promo > .flex-between {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
}
.card-product-promo > .harga-product {
  border: none;
}
.card-product-promo > img {
  width: 260px;
}
.card-product-promo > .flex-between > h3 {
  font-weight: 500;
}
.card-product-promo > .flex-between > a,
.title-product > a,
.title-product-newArrival > a {
  transition: 0.3s;
  color: red;
}

.card-product-promo > .flex-between > a:hover,
.title-product > a:hover,
.title-product-newArrival > a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.card-product-promo > h3 {
  font-weight: 400;
  padding-top: 10px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  margin-block: 6px;
}
.card-product-rating {
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
}
.card-product-rating > .active-rating {
  color: var(--btn-color);
}
.harga-product > span {
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
}
.harga-product > .harga-awal {
  text-decoration: line-through;
  font-style: italic;
  color: rgba(0, 0, 0, 0.5);
}
.card-product {
  border-radius: 5px;
  padding: 20px;
  width: 75%;
  background-color: white;
  flex-wrap: wrap;
}
.card-product > .title-product {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.card-product > .title-product > h2 {
  font-weight: 400;
}
.list-card > .card {
  padding: 20px;
  width: 270px;
}
.list-card > .card > img {
  width: 180px;
  height: 150px;
}
.list-card > .card h3 {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  margin-block: 8px;
}

.card > p {
  margin-bottom: 10px;
  color: var(--font-paragraf);
  font-weight: 400;
}
.card > .harga-product {
  margin-bottom: 5px;
}
.card:hover {
  background-color: var(--secondary-color);
}
/* product end */
</style>
