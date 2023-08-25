<template>
  <nav class="navbar navbar-expand-lg navbar-container">
    <div class="container-fluid wrapper-header">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <div class="header-logo">
            <h1>ANA<span>SHOES</span></h1>
          </div>

          <div class="header-icon">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <i class="fa-regular fa-heart"></i>
            <i class="fas fa-shopping-cart"> </i>
            <button class="btn btn-login me-2 ms-3" type="button">Login</button>
            <button class="btn btn-register me-2" type="button">
              Register
            </button>
          </div>
        </div>
        <div
          class="collapse navbar-collapse wrapper-nav-list"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/product">Product</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/newArrival">New Arrival</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/reviews">Reviews</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- <header class="navbar-container">
    <div class="wrapper-header size-container d-flex flex-between">
      <div class="header-logo">
        <h1>ANA<span>SHOES</span></h1>
      </div>
     
      <div class="header-icon">
        <i class="fa-regular fa-heart"></i>
        <i class="fas fa-shopping-cart"> </i>
        <button class="btn btn-outline-success me-2 ms-3" type="button">
          Login
        </button>
        <button class="btn btn-sm btn-outline-secondary" type="button">
          Register
        </button>
      </div>
      <div class="burger-menu">
        <i id="menu-hamburger" class="fa-solid fa-bars"></i>
      </div>
    </div>
    <nav class="wrapper-nav-list size-container">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/product">Product</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/newArrival">New Arrival</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/reviews">Reviews</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header> -->
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800&display=swap');

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
.btn-register {
  border: 2px solid var(--btn-color);
  outline: none;
  background-color: transparent;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  color: white;
}
.btn-login {
  border: 2px solid transparent;
  outline: none;
  background-color: var(--btn-color);
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
}

.btn-register:hover {
  background-color: var(--btn-color);
  border: 2px solid transparent;
}
.btn-login:hover {
  background-color: transparent;
  border: 2px solid var(--btn-color);
}

.navbar-container {
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: var(--primary-color);
}

.wrapper-header {
  width: 90% !important;
  padding: 0 !important;
}
.wrapper-header .row {
  width: 100% !important;
}

.header-logo > h1 {
  color: white;
}
.header-logo > h1 > span {
  color: var(--btn-color);
}

.header-icon {
  color: white;
  font-size: 20px;
}
.header-icon i:first-child {
  margin-right: 5px;
}
.wrapper-nav-list {
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  padding-block: 5px;
}

.wrapper-nav-list > ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.wrapper-nav-list > ul > li {
  list-style-type: none;
  margin-right: 40px;
}

.wrapper-nav-list > ul > li > a {
  color: white;
  text-decoration: none;
  position: relative;
}
.wrapper-nav-list > ul > li > a::after {
  opacity: 0;
  content: '';
  background-color: white;
  height: 4px;
  width: 50%;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 0%;
  transform: translateX(-50%);
}
.wrapper-nav-list > ul > li:hover > a::after {
  opacity: 1;
}
/* navbar end */
/* media query mobile */
@media screen and (max-width: 576px) {
  .size-container,
  .wrapper-home,
  .wrapper-about,
  .wrapper-product,
  .wrapper-newArrival,
  .wrapper-contact,
  .wrapper-reviews,
  .wrapper-profile,
  .wrapper-footer {
    width: 100%;
    overflow: hidden;
    padding: 20px;
  }
  /* navbar start */
  .wrapper-header {
    flex-wrap: wrap;
  }
  .burger-menu {
    position: absolute;
    color: white;
    display: block;
    top: 20px;
    right: 25px;
    font-size: 20px;
  }
  .header-search {
    margin-block: 10px;
    width: 250px;
  }
  .header-icon > i {
    font-size: 20px;
  }
  /* lakukan penambahan tanpa menambahkan spasi,yang artinya akan menambahkan kelas persis sejajar didalam element tersebut(tidak menambahkan kelas pada elemen didalmnya */
  .navbar-container .wrapper-nav-list.toggle-nav-active {
    display: block;
  }
  .navbar-container .wrapper-nav-list {
    display: none;
    padding: 0;
    transition: 9s;
  }
  .wrapper-nav-list > ul {
    position: absolute;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    height: 100vh;
    background-color: var(--primary-color);
    padding: 20px;
  }
  .wrapper-nav-list > ul > li {
    margin-right: 0px;
    margin-top: 20px;
    font-size: 22px;
    width: 100%;
    padding: 10px;
  }

  .wrapper-nav-list > ul > li:nth-child(1) {
    margin-top: 0px;
  }
  .header-logo {
    width: 100%;
  }
  .wrapper-nav-list > ul > li > a::after {
    top: 30px;
    right: 0%;
    transform: translateX(-50%);
  }
  /* navbar end */
}
</style>
