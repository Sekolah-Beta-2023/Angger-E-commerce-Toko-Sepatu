<template>
  <section id="newArrival">
    <div class="wrapper-newArrival">
      <div class="box-newArrival">
        <div class="menu-newArrival">
          <div class="title-product-newArrival flex-between">
            <h1>NEW OFFER</h1>
            <a href="#newArrival">More</a>
          </div>
          <div
            v-for="(item, index) in productNewArrival"
            :key="index"
            class="product-newArrival flex-between"
          >
            <img :src="item.src" :alt="item.alt" />
            <div class="deskripsi-product-newArrival">
              <h3>{{ item.name }}</h3>
              <div class="card-product-rating">
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="harga-awal">{{ item.harga }}</span>
            </div>
          </div>
        </div>
        <div class="box-card-newArrival">
          <div class="banner-newArrival">
            <div class="content-banner-newArrival flex-center">
              <h3>New Arrival</h3>
              <p>
                Discover the latest style with our newest collection, Our shoe
                store offers the most up-to-date options. From modern designs to
                the latest trends, Elevate your appearance with our curated
                selection of shoes!
              </p>
              <a href="#Product" class="style-active-button">Shop No</a>
            </div>
          </div>
          <div class="card-newArrival flex-between">
            <div v-for="(item, index) in products" :key="index" class="card">
              <img :src="item.src" :alt="item.alt" />
              <h3>{{ item.name }}</h3>
              <p>
                {{ item.description }}
              </p>
              <div class="card-product-rating">
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star active-rating"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="harga-product flex-between">
                <span>${{ item.diskon }}</span>
                <span class="harga-awal">${{ item.harga }}</span>
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
/* newArrival start */
.card:hover {
  background-color: var(--secondary-color);
}
.wrapper-newArrival {
  padding-top: 130px;
}
.box-newArrival {
  display: flex;
  justify-content: space-between;
}
.box-card-newArrival {
  width: 75%;
}
.banner-newArrival {
  width: 100%;
  height: 300px;
  background-image: url('../assets/background/banner-newArrival.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.banner-newArrival::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.content-banner-newArrival {
  height: 100%;
  flex-direction: column;
  z-index: 9;
  position: absolute;
  color: white;
}
.content-banner-newArrival > h3 {
  color: var(--btn-color);
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.content-banner-newArrival > p {
  width: 70%;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 300;
}
.content-banner-newArrival > a {
  text-decoration: none;
  color: black;
}
.content-banner-newArrival > a:hover {
  color: var(--third-color);
}
.box-newArrival > .menu-newArrival {
  background-color: var(--third-color);
  width: 25%;
  padding: 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.product-newArrival {
  margin-top: 10px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 160px;
  padding: 10px;
}
.title-product-newArrival > h1 {
  font-weight: 400;
}
.product-newArrival > img {
  width: 100px;
}
.product-newArrival > .product-newArrival > .deskripsi-product-newArrival {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.deskripsi-product-newArrival > h3 {
  font-weight: 500;
  margin-block: 10px;
}
.deskripsi-product-newArrival > .harga-awal {
  color: red;
  font-weight: bold;
}
.card-newArrival {
  background-color: white;
  flex-wrap: wrap;
}
.card-newArrival > .card {
  margin-right: 5px;
  padding: 10px;
  width: 218px;
}
.card-newArrival > .card:last-of-type {
  margin-right: 0;
}

.card-newArrival > .card > img {
  width: 150px;
}
.card-newArrival > .card > h3 {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
}
.card-newArrival > .card > p {
  font-weight: 400;
}
/* new arrival end */
</style>
