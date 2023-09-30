<template>
  <main>
    <section id="Home" class="h-screen bg-secondary">
      <div class="flex h-[100%] container w-[90%] text-slate-900">
        <div class="home-content flex justify-end items-start flex-col w-[50%]">
          <h1 class="text-5xl capitalize mb-5 font-medium">
            Perfect Product To Now And Forefer
          </h1>
          <p class="w-[80%] text-lg mb-8 text-slate-500 font-medium">
            Discover our latest collection of stylish and comfortable shoes.
            Choose from our high-quality selection, including casual shoes,
            sports shoes, and renowned brands. Start your fashion adventure now!
          </p>
          <div class="home-content-btn">
            <button
              class="me-2 border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
            >
              Shop Now
            </button>
            <button
              class="border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
            >
              Know More
            </button>
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
        <div class="image-content w-[40%] h-[100%] overflow-hidden">
          <img
            class="w-[100%] H-[100%] mt-[100px]"
            :src="imageHome"
            alt="Home profile"
          />
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
      user: null
    }
  },
  async created() {
    try {
      const {
        data: { user },
      } = await this.$supabase.auth.getUser()
      this.user = user
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
<style>
@media screen and (max-width: 576px) {
  #home {
    height: min-content;
  }
  section .container {
    padding-top: 500px;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    padding: 0px;
    flex-direction: column;
  }
  .home-content {
    padding-top: 200px;
    color: white;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-image: url('@/assets/background/image-home.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .home-content::before {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .home-content p {
    width: 100%;
    text-align: center;
    color: white;
    padding: 20px;
    margin-bottom: 0;
  }
  .home-content-btn,
  .home-content-sosmed {
    margin-left: 30px;
  }
  .home-content-sosmed {
    margin-top: 15px;
  }
  .image-content {
    display: none;
  }
}
</style>
