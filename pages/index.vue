<template>
  <main>
    <section id="Home">
      <div class="wrapper-home">
        <div class="home-content">
          <h1>Perfect Product To Now And Forefer</h1>
          <p>
            Discover our latest collection of stylish and comfortable shoes.
            Choose from our high-quality selection, including casual shoes,
            sports shoes, and renowned brands. Start your fashion adventure now!
          </p>
          <div class="home-content-btn">
            <button class="style-active-button">Shop Now</button>
            <button class="style-button">Know More</button>
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
        <div class="home-image flex-center">
          <img :src="imageHome" alt="Home profile" />
        </div>
      </div>
    </section>
    <about />
  </main>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      imageHome: require('@/assets/background/image-home.png'),
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
/* home start */
#Home {
  background-color: var(--secondary-color);
  height: 100vh;
}
.wrapper-home {
  display: flex;
  height: 100%;
}
.home-content {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
}
.home-content > h1 {
  font-size: 3.4rem;
  text-transform: capitalize;
  margin-bottom: 20px;
  font-weight: 500;
}
.home-content > p {
  width: 80%;
  font-size: 18px;
  margin-bottom: 30px;
  color: var(--font-paragraf);
  font-weight: 500;
}

.home-content-sosmed {
  position: relative;
  margin-top: 60px;
  margin-bottom: 50px;
  display: flex;
}
.home-content-sosmed .sosmed {
  display: flex;
  align-items: end;
  justify-content: center;
}

.home-content-sosmed .btn-sosmed {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-shadow: 0 5px 15px -5px #aaa;
  padding: 10px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.home-content-sosmed a {
  text-decoration: none;
  margin-right: 15px;
}

.home-content-sosmed .btn-sosmed::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  background: linear-gradient(#00c6ff, #0072ff);
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}

.sosmed > a > i {
  color: var(--primary-color);
}

.home-content-sosmed .btn-sosmed:hover i {
  color: #fff;
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
}

.home-content-sosmed .btn-sosmed:hover::before {
  animation: animate 0.7s 1;
  -webkit-animation: animate 0.7s 1;
  left: -10%;
  top: -10%;
}
.home-image {
  width: 42%;
}
.home-content-btn {
  display: flex;
}

.home-content-btn > .style-active-button {
  margin-right: 20px;
}

.home-image {
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.home-image > img {
  margin-top: 140px;
  width: 100%;
  height: 100%;
}
/* home end */
</style>
