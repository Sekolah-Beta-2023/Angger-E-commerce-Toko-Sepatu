<template>
  <footer>
    <div class="wrapper-footer">
      <div class="footer-content flex-between">
        <div class="footer-logo">
          <h4>Ana <span>Shoes</span></h4>
          <p>
            Discover our latest collection of stylish and comfortable shoes.
            Choose from our high-quality selection, including casual shoes,
            sports shoes, and renowned brands. Start your fashion adventure now!
          </p>
        </div>
        <div class="footer-collection">
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
          <p>
            Here are some payment methods available for purchases at our shoe
            store:
          </p>
          <ul class="flex-between">
            <li>
              <a href="#">
                <img src="assets/" alt="logo visa" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="asets/payment/master card.png"
                  alt="logo master card"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="asets/payment/ovo.png" alt="logo ovo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="asets/payment/dana.png" alt="logo dana" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>© 2023 AnaShoes, Inc. All Rights Reserved</p>
    </div>
  </footer>
</template>

<style>
/* footer start */
footer {
  background-color: var(--primary-color);
  color: white;
}
.wrapper-footer {
  padding-block: 20px;
}
.wrapper-footer > p {
  padding-top: 20px;
  text-align: center;
}
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

.footer-content > .footer-logo > h4,
.footer-contact > h4,
.footer-collection > h4 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  font-weight: 500;
}
.footer-collection > ul > li,
.footer-contact > ul > li,
.footer-payment > ul > li {
  list-style-type: none;
  font-weight: 300;
}
.footer-collection > ul > li > a,
.footer-contact > ul > li {
  color: var(--third-color);
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: 300;
  transition: 0.3s;
}
.footer-collection > ul > li > a:hover {
  color: var(--btn-color);
}

.footer-payment > h4 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.footer-logo > p {
  font-weight: 300;
}
.footer-payment > p {
  margin-bottom: 20px;
  font-weight: 300;
}
.footer-payment > ul {
  gap: 10px;
}
.footer-payment > .flex-between {
  flex-wrap: wrap;
}
.footer-payment > ul > li > a > img {
  width: 50px;
  height: 35px;
}
/* footer end */
</style>
