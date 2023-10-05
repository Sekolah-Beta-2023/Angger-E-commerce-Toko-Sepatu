<template>
  <section id="About" class="bg-secondary">
    <h2 class="text-4xl pt-[150px] font-medium text-center text-slate-950">
      About ANA<span class="text-btnColor">SHOES</span>
    </h2>
    <div class="flex container w-[90%] mb-16 mt-5 text-slate-900 bg-white">
      <div class="about-image w-[40%] rounded-md mr-5">
        <img :src="imageAbout" alt="image-about" class="w-[100%] h-[100%]" />
      </div>
      <article class="w-[55%]">
        <p
          class="p-5 indent-8 text-lg text-slate-500 font-normal first-letter:text-btnColor first-letter:uppercase first-letter:text-5xl"
        >
          AnaShoes diperkenalkan pada tahun 2022 oleh Angger Nur Amin, pemilik
          pabrik sepatu vulkanisir yang terletak di Jawa Timur. AnaShoes
          menawarkan berbagai jenis dan model yang cocok untuk berbagai
          aktivitas. Setiap pasang AnaShoes melalui proses yang panjang dan
          rinci, dimulai dari pemilihan bahan, proses produksi, hingga
          pemeriksaan kualitas yang ketat. Ini dilakukan untuk memastikan bahwa
          kualitas AnaShoes tetap terjaga dengan baik. Dengan sumber daya yang
          melimpah, AnaShoes mampu memproduksi sepatu dalam jumlah besar dan
          kualitas tertinggi, memungkinkan orang dari berbagai latar belakang
          untuk membeli alas kaki berkualitas tinggi dengan harga yang
          terjangkau.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      imageAbout: require('../assets/background/image-about.jpg'),
    }
  },
}
</script>
<style>
/* media query mobile */
@media screen and (max-width: 576px) {
  #About .container {
    width: 100%;
    padding: 20px;
    overflow: hidden;
    flex-direction: column;
    margin-block: 15px;
  }

  .about-image {
    width: 100%;
  }
  #About .container article {
    width: 100%;
  }
  #About .container article {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
