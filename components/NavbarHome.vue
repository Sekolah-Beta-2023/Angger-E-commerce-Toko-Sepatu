<template>
  <header class="navbar-container">
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
  </header>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
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

.overlay {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.navbar-container > .wrapper-header {
  padding-block: 10px;
}
.header-logo > h1 {
  color: white;
}
.header-logo > h1 > span {
  color: var(--btn-color);
}
.header-search {
  border-radius: 20px;
  background-color: white;
  width: 300px;
  position: relative;
  overflow: hidden;
}
.header-search > input {
  padding: 10px 10px;
  outline: none;
  border: none;
  width: 88%;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
}
.header-search i {
  color: white;
  top: 8px;
  right: 11px;
  position: absolute;
  color: rgba(0, 0, 0, 0.7);
}
.header-icon {
  color: white;
  font-size: 20px;
}
.header-icon i:first-child {
  margin-right: 5px;
}
.navbar-container .wrapper-nav-list {
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  padding-block: 10px;
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
</style>
