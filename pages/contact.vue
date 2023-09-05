<template>
  <section id="Contact" class="bg-secondary">
    <div class="pt-[130px] pb-5 container w-[90%]">
      <div class="flex justify-between items-start flex-wrap w-[100%]">
        <div class="form-contact rounded-md w-[40%] bg-slate-50 p-5">
          <h2 class="text-center text-3xl mb-5">Contact Us</h2>
          <form action="">
            <label class="text-xl block" for="name">Name</label>
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
            <button
              type="submit"
              class="w-[100%] border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
            >
              Send
            </button>
          </form>
        </div>
        <div class="image-contact w-[50%] h-[100%]">
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
      <div class="info-contact w-[100%] mt-5">
        <div
          class="card-info-contact gap-5 flex justify-center items-center flex-wrap"
        >
          <!-- 1 -->
          <div class="card p-5 w-[300px] h-[125px] rounded-md">
            <div class="flex justify-start items-center gap-3 mb-2">
              <i class="fa-solid fa-phone text-red-600 font-bold"></i>
              <h4 class="text-primary text-xl">Call Us</h4>
            </div>
            <p>
              Contact us assistance at.
              <span class="block text-base font-semibold"
                >Phone: 085856064117</span
              >
            </p>
          </div>
          <!-- 2 -->
          <div class="card p-5 w-[300px] h-[125px] rounded-md">
            <div class="flex justify-start items-center gap-3 mb-2">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <h4 class="text-primary text-xl">Location</h4>
            </div>
            <p>We are located at: Jalan Raya Elang No. 456 Malang Indonesia</p>
          </div>
          <!-- 3 -->
          <div class="card p-5 w-[300px] h-[125px] rounded-md">
            <div class="flex justify-start items-center gap-3 mb-2">
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

<style>
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

.card-info-contact > .card:nth-child(1) {
  background-color: rgba(255, 0, 0, 0.3);
}

.card-info-contact > .card:nth-child(2) {
  background-color: rgba(0, 255, 0, 0.3);
}
.card-info-contact > .card:nth-child(3) {
  background-color: rgba(0, 0, 255, 0.3);
}
/* contact end */
@media screen and (max-width: 576px) {
  #Contact .container {
    width: 100%;
    padding: 140px 20px 20px 20px;
    overflow: hidden;
    height: min-content;
  }
  .container .flex {
    height: min-content;
    flex-direction: column;
  }
  .form-contact {
    width: 100%;
  }
  .image-contact {
    width: 100%;
    margin-top: 20px;
  }
  .image-contact iframe {
    width: 100%;
  }
  .info-contact {
    width: 100%;
  }
  .card-info-contact > .card {
    height: 150px;
    text-align: center;
  }

  form > textarea {
    margin-bottom: 10px;
  }

  .card-info-contact {
    /* flex-direction: column; */
  }
}
</style>
