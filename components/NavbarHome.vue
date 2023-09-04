<template>
  <header class="fixed z-50 lg:w-[100%] bg-primary text-slate-50">
    <div class="container py-3 lg:w-[90%] flex justify-between items-center">
      <div class="">
        <h1 class="text-slate-50 text-3xl font-bold">
          ANA<span class="text-btnColor">SHOES</span>
        </h1>
      </div>

      <div class="header-icon">
        <i class="fa-regular fa-heart"></i>
        <i class="fas fa-shopping-cart"> </i>
        <button
          class="ms-2 border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
          type="button"
        >
          <nuxt-link to="/login">Login</nuxt-link>
        </button>
        <button
          class="ms-2 border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
          type="button"
        >
          Register
        </button>
      </div>
      <div class="burger-menu lg:hidden">
        <i id="menu-hamburger" class="fa-solid fa-bars"></i>
      </div>
    </div>
    <nav
      class="wrapper-nav-list container lg:w-[90%] border-t-[1px] border-r-gray-50 py-3"
    >
      <ul class="flex justify-start items-center">
        <li class="mr-4">
          <nuxt-link
            to="/"
            class="relative after:absolute after:block after:content-'' after:bg-white after:h-[3px] after:w-1/2 after:opacity-0 after:transition-opacity after:group-hover:opacity-100 after:left-1/2 after:translate-x-[-50%]"
            >Home</nuxt-link
          >
        </li>
        <li class="mr-4">
          <nuxt-link
            class="relative after:absolute after:block after:content-'' after:bg-white after:h-[3px] after:w-1/2 after:opacity-0 after:transition-opacity after:group-hover:opacity-100 after:left-1/2 after:translate-x-[-50%]"
            to="/about"
            >About</nuxt-link
          >
        </li>
        <li class="mr-4">
          <nuxt-link
            class="relative after:absolute after:block after:content-'' after:bg-white after:h-[3px] after:w-1/2 after:opacity-0 after:transition-opacity after:group-hover:opacity-100 after:left-1/2 after:translate-x-[-50%]"
            to="/product"
            >Product</nuxt-link
          >
        </li>
        <li class="mr-4">
          <nuxt-link
            class="relative after:absolute after:block after:content-'' after:bg-white after:h-[3px] after:w-1/2 after:opacity-0 after:transition-opacity after:group-hover:opacity-100 after:left-1/2 after:translate-x-[-50%]"
            to="/newArrival"
            >New Arrival</nuxt-link
          >
        </li>
        <li class="mr-4">
          <nuxt-link
            class="relative after:absolute after:block after:content-'' after:bg-white after:h-[3px] after:w-1/2 after:opacity-0 after:transition-opacity after:group-hover:opacity-100 after:left-1/2 after:translate-x-[-50%]"
            to="/reviews"
            >Reviews</nuxt-link
          >
        </li>
        <li class="mr-4">
          <nuxt-link
            class="relative after:absolute after:block after:content-'' after:bg-white after:h-[3px] after:w-1/2 after:opacity-0 after:transition-opacity after:group-hover:opacity-100 after:left-1/2 after:translate-x-[-50%]"
            to="/contact"
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>
