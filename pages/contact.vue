<template>
  <section id="Contact">
    <div class="wrapper-contact">
      <div class="flex-between">
        <div class="form-contact">
          <h2>Contact Us</h2>
          <form action="">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Your name ..." />
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="example@gmail.com" />
            <label for="message">Message</label>
            <textarea
              name="message"
              cols="20"
              rows="10"
              placeholder="Input message here ..."
            ></textarea>
            <button type="submit" class="style-active-button">Send</button>
          </form>
        </div>
        <div class="image-contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.33876429695!2d112.54938001799935!3d-7.978467193550372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62822063dc2fb%3A0x78879446481a4da2!2sMalang%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1684366694438!5m2!1sid!2sid"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="info-contact">
        <div class="card-info-contact flex-center">
          <div class="card">
            <div class="icon-info-contact">
              <i class="fa-solid fa-phone"></i>
              <h4>Call Us</h4>
            </div>
            <p>
              Contact us for any inquiries or assistance at.
              <span>Phone: 085856064117</span>
            </p>
          </div>
          <div class="card">
            <div class="icon-info-contact">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <h4>Location</h4>
            </div>
            <p>We are located at: Jalan Raya Elang No. 456 Malang Indonesia</p>
          </div>
          <div class="card">
            <div class="icon-info-contact">
              <i class="fa-solid fa-clock"></i>
              <h4>Hours</h4>
            </div>
            <p>
              Monday to Friday: 9:00 AM - 8:00 PM Saturday: 10:00 AM - 6:00 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
/* contact start */
#Contact {
  background-color: var(--secondary-color);
}
.wrapper-contact {
  padding-top: 130px;
  padding-bottom: 20px;
}
.wrapper-contact > .flex-between {
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
}
.form-contact {
  border-radius: 5px;
  width: 40%;
  background-color: var(--third-color);
  padding: 20px;
}
.form-contact > h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}
.form-contact > form > label {
  font-size: 1.2rem;
  display: block;
}
form > input::placeholder,
form > textarea::placeholder {
  font-size: 15px;
  font-style: italic;
}
form > input {
  font-size: 18px;
  background-color: inherit;
  outline: 0;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  height: 35px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
form > textarea {
  font-size: 20px;
  margin-top: 10px;
  width: 100%;
  height: 100px;
  border: none;
  outline: 0;
  background-color: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
}
form > button {
  font-size: 20px;
  text-align: center;
  width: 100%;
  font-weight: 600;
}
.image-contact {
  width: 58%;
  height: 100%;
}
.image-contact > iframe {
  width: 100%;
}

.image-contact > img {
  width: 100%;
}
.icon-info-contact {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}
.icon-info-contact i {
  color: red;
  font-weight: bold;
}
.icon-info-contact > h4 {
  color: var(--primary-color);
  font-size: 1.2rem;
}

.info-contact {
  width: 100%;
  margin-top: 20px;
}
.card-info-contact {
  gap: 20px;
}
.card-info-contact > .card {
  padding: 20px;
  width: 300px;
  height: 125px;
  border-radius: 5px;
}
.card-info-contact > .card:nth-child(1) {
  background-color: rgba(255, 0, 0, 0.3);
}
.card-info-contact > .card:nth-child(1) > p > span {
  font-weight: bold;
}

.card-info-contact > .card:nth-child(2) {
  background-color: rgba(0, 255, 0, 0.3);
}
.card-info-contact > .card:nth-child(3) {
  background-color: rgba(0, 0, 255, 0.3);
}
/* contact end */
</style>
