<template>
  <section id="About">
    <h2>About</h2>
    <div class="wrapper-about">
      <div class="about-image">
        <img :src="imageAbout" alt="image-about" />
      </div>
      <article class="about-content">
        <p>
          AnaShoes was introduced in 2023 by Angger Nur Amin, the owner of a
          vulcanized shoe factory located in East Java. AnaShoes offers a wide
          range of types and models suitable for various activities. Each pair
          of AnaShoes goes through a long and detailed process, starting from
          material selection, production processes, to rigorous quality
          inspections. This is done to ensure that the quality of AnaShoes is
          well-maintained. With abundant resources, AnaShoes is capable of
          producing shoes in large quantities and of the highest quality,
          allowing people from all walks of life to afford high-quality footwear
          at an affordable price.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageAbout: require('../assets/background/image-about.jpg'),
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
/* about start */
#About h2 {
  font-size: 2.8rem;
  padding-top: 120px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
}
.wrapper-about {
  background-color: var(--secondary-color);
  display: flex;
}
.about-image {
  width: 40%;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 20px;
}
.about-image > img {
  width: 100%;
  height: 100%;
}

.about-content {
  width: 55%;
  background-color: white;
}
.about-content > p {
  padding: 20px;
  text-indent: 30px;
  font-size: 20px;
  line-height: 28px;
  color: var(--font-paragraf);
  font-weight: 400;
}
.about-content > p::first-letter {
  color: var(--btn-color);
  text-transform: uppercase;
  font-size: 5rem;
}
/* about end */
</style>
