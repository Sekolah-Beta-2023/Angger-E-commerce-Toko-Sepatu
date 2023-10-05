<template>
  <section id="About" class="bg-secondary">
    <h2 class="text-4xl pt-[150px] uppercase text-center font-normal">About</h2>
    <div class="flex container w-[90%] mb-16 mt-5 text-slate-900 bg-white">
      <div class="about-image w-[40%] rounded-md mr-5">
        <img :src="imageAbout" alt="image-about" class="w-[100%] h-[100%]" />
      </div>
      <article class="w-[55%]">
        <p
          class="p-5 indent-8 text-lg text-slate-500 font-normal first-letter:text-btnColor first-letter:uppercase first-letter:text-5xl"
        >
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
