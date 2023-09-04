<template>
  <footer class="bg-primary text-slate-50">
    <div class="py-5 container w-[90%]">
      <div class="footer-content pt-5 flex justify-between gap-8 items-start">
        <div class="footer-logo">
          <h4 class="text-3xl font-bold mb-5">
            ANA<span class="text-btnColor">SHOES</span>
          </h4>
          <p>
            Discover our latest collection of stylish and comfortable shoes.
            Choose from our high-quality selection, including casual shoes,
            sports shoes, and renowned brands. Start your fashion adventure now!
          </p>
        </div>
        <div
          class="footer-collection flex justify-center items-center flex-col"
        >
          <h4>Collection</h4>
          <ul>
            <li><a href="#Product">Summer</a></li>
            <li><a href="#Product">Converse</a></li>

            <li><a href="#newArrival">Sporty</a></li>

            <li><a href="#newArrival">CLasic</a></li>
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
          <h4>PAYMENT METHODS</h4>
          <p class="mb-5 font-normal">
            Here are some payment methods available for purchases at our shoe
            store:
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

/* footer end */
</style>
