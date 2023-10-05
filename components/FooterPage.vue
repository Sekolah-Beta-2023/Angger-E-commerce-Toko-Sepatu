<template>
  <footer class="bg-primary text-slate-50">
    <div class="py-5 container w-[90%]">
      <div class="footer-content pt-5 flex justify-between gap-8 items-start">
        <div class="footer-logo">
          <h4 class="text-3xl font-bold mb-5">
            ANA<span class="text-btnColor">SHOES</span>
          </h4>
          <p>
            Temukan koleksi terbaru kami sepatu yang stylish dan nyaman. Pilih
            dari seleksi berkualitas tinggi kami, termasuk sepatu kasual, sepatu
            olahraga, dan merek-merek terkenal. Mulai petualangan mode Anda
            sekarang!
          </p>
        </div>
        <div
          class="footer-collection flex justify-center items-center flex-col"
        >
          <h4>Koleksi</h4>
          <ul>
            <li>
              <nuxt-link to="/product"> Kasual </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product"> Olahraga </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product"> Formal </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>085856064117</li>
            <li>AnaShoes_store</li>
            <li>AnaShoes@gmail.com</li>
          </ul>
        </div>
        <div class="footer-payment">
          <h4>METODE PEMBAYARAN</h4>
          <p class="mb-5 font-normal">
            Berikut adalah beberapa metode pembayaran yang tersedia untuk
            pembelian di toko sepatu kami:
          </p>
          <ul class="flex justify-between items-center gap-3 flex-wrap">
            <li>
              <a href="#">
                <img :src="visa" alt="logo visa" />
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="masterCard" alt="logo master card" />
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="ovo" alt="logo ovo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="dana" alt="logo dana" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center pt-3 text-base font-semibold">
        © 2023 AnaShoes, Inc. All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      visa: require('@/assets/payment/visa.png'),
      dana: require('@/assets/payment/dana.png'),
      masterCard: require('@/assets/payment/master card.png'),
      ovo: require('@/assets/payment/ovo.png'),
    }
  },
}
</script>
<style>
/* footer start */

.footer-logo,
.footer-collection,
.footer-contact,
.footer-payment {
  width: 25%;
}
.footer-content {
  align-items: flex-start;
  gap: 30px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
}

.footer-contact > h4,
.footer-collection > h4,
.footer-payment > h4 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  font-weight: 500;
}
.footer-collection > ul > li,
.footer-contact > ul > li,
.footer-payment > ul > li {
  list-style-type: none;
  font-weight: 400;
}
.footer-collection > ul > li > a,
.footer-contact > ul > li {
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: 400;
  transition: 0.3s;
}
.footer-collection > ul > li > a:hover {
  color: orange;
}

.footer-payment > ul > li > a > img {
  width: 50px;
  height: 35px;
}

@media screen and (max-width: 576px) {
  footer .container {
    overflow: hidden;
    width: 100%;
    padding: 20px;
  }
  .footer-content {
    flex-direction: column;
  }
  .footer-logo,
  .footer-collection,
  .footer-contact,
  .footer-payment {
    width: 100%;
  }
  .footer-collection {
    align-items: flex-start;
  }
  .footer-content > .footer-logo > h4,
  .footer-contact > h4,
  .footer-collection > h4 {
    margin-bottom: 10px;
  }

  .footer-payment > ul > li > a > img {
    width: 100px;
    height: 35px;
  }
  .footer-payment ul {
    align-items: flex-start;
  }
}

/* footer end */
</style>
