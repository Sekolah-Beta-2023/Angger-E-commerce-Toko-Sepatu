<template>
  <section id="Reviews">
    <div class="wrapper-reviews">
      <h2>Reviews</h2>
      <p class="mb-4">Get real-world advice from people who've been there</p>
      <div class="card-reviews flex-center">
        <div v-for="(item, index) in persons" :key="index" class="card">
          <div class="box-image-reviews">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FF0066"
                d="M60.5,-25.2C65.7,-3.5,48.6,19.9,28.4,33.2C8.2,46.4,-15,49.6,-35.7,37.3C-56.3,25.1,-74.3,-2.4,-67.9,-25.7C-61.6,-49,-30.8,-68,-1.6,-67.5C27.6,-66.9,55.2,-46.9,60.5,-25.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <img :src="item.src" :alt="item.alt" />
          </div>
          <h3>{{ item.name }}</h3>
          <span> “ </span>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-7">
        <h2>Beri Testimoni</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nama Lengkap</label>
            <input
              v-model="review.name"
              required
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              v-model="review.content"
              required
              class="form-control"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="rating" class="form-label">Rating</label>
            <RatingUser @rating-selected="handleRatingSelected" />

            <!-- Tampilkan nilai rating yang dipilih -->
            <p>Selected Rating: {{ selectedRating }}</p>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <h2>Reviews</h2>
        <ul>
          <li v-for="(item, index) in reviews" :key="index">
            <p>{{ item.name }}</p>
            <p>{{ item.content }}</p>
            <p>{{ item.rating }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      persons: [
        {
          src: require('@/assets/reviews/Sarah.png'),
          alt: 'reviews Sarah',
          name: 'Sarah',
          description:
            '"I am extremely satisfied with the shoes I recently purchased. The stylish design and excellent quality make me feel comfortable wearing them all day long. The shoes also provide great support for my feet. Highly recommended!',
        },
        {
          src: require('@/assets/reviews/Lisa.png'),
          alt: 'reviews Lisa',
          name: 'Lisa',

          description:
            'The shoes I bought from this store are absolutely amazing. Not only do they look great, but they are also incredibly comfortable. I often struggle with finding shoes that fit my foot shape, but these shoes fit perfectly. The quality is also superb, making me confident that they will last. I am delighted with my purchase!',
        },
        {
          src: require('@/assets/reviews/John.png'),
          alt: 'reviews John',
          name: 'John',

          description:
            ' I just got a pair of shoes from this store, and I mthrilled with my purchase. The shoes feel lightweight and offer excellent protection for my feet. The elegant design also boosts my  confidence. The customer service at this store is outstanding. Thank you!',
        },
      ],
      // rating
      selectedRating: 0,
      // crud reviews
      reviews: [],
      review: {
        name: '',
        content: '',
        rating: 0,
      },
    }
  },
  // created() {

  //   // Mengambil data ulasan dari localStorage saat komponen dibuat
  //   const storedReviews = localStorage.getItem('reviews')
  //   if (storedReviews) {
  //     this.reviews = JSON.parse(storedReviews)
  //   }
  //   this.fetchReviews()

  // },
  // async mounted() {
  //   await this.fetchReviews()
  // },
  // methods: {
  //   // crud
  //   async fetchReviews() {
  //     try {
  //       const response = await axios.get(
  //         'https://crudcrud.com/api/dd3b59a0cb6a47358b430bea894052fc/reviews'
  //       )
  //       console.log(response)
  //       const datas = response.data
  //       // Menggabungkan data dari API dengan data lokal
  //       this.reviews = [...this.reviews, ...datas]

  //       // Menyimpan data ulasan yang digabungkan ke dalam localStorage
  //       localStorage.setItem('reviews', JSON.stringify(this.reviews))
  //     } catch (e) {
  //       console.error('Error fetching reviews:', e)
  //     }
  //   },
  //   async submitForm() {
  //     // Menambah ulasan baru ke dalam array reviews
  //     this.reviews.push({
  //       name: this.review.name,
  //       content: this.review.content,
  //       rating: this.selectedRating,
  //     })

  //     // Menyimpan ulasan ke dalam localStorage
  //     localStorage.setItem('reviews', JSON.stringify(this.reviews))
  //     try {
  //       this.review.rating = this.selectedRating
  //       // Mengirim ulasan baru ke server melalui API
  //       const response = await axios.post(
  //         'https://crudcrud.com/api/dd3b59a0cb6a47358b430bea894052fc/reviews',
  //         this.review
  //       )

  //       this.reviews.push(response.data)
  //       console.log(response)
  //       this.review = { name: '', content: '' }
  //       this.selectedRating = 0
  //     } catch (e) {
  //       console.error('Error fetching reviews:', e)
  //     }
  //   },
  //   // rating
  //   handleRatingSelected(rating) {
  //     this.selectedRating = rating
  //   },
  created() {
    // Mengambil data ulasan dari API saat komponen dibuat
    this.fetchReviews()
  },
  methods: {
    handleRatingSelected(rating) {
      this.selectedRating = rating
    },
    async fetchReviews() {
      try {
        const response = await axios.get(
          'https://crudcrud.com/api/dd3b59a0cb6a47358b430bea894052fc/reviews'
        )
        this.reviews = response.data
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    },
    async submitForm() {
      // Menambah ulasan baru ke dalam API
      try {
        this.review.rating = this.selectedRating
        const response = await axios.post(
          'https://crudcrud.com/api/dd3b59a0cb6a47358b430bea894052fc/reviews',
          {
            name: this.review.name,
            content: this.review.content,
            rating: this.selectedRating,
          }
        )

        // Menambah ulasan baru ke dalam array reviews
        this.reviews.push(response.data)

        // Mereset form dan selectedRating
        this.review.name = ''
        this.review.content = ''
        this.selectedRating = null
      } catch (error) {
        console.error('Error submitting review:', error)
      }
    },
  },
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
/* riviews start */
.wrapper-reviews {
  padding-top: 130px;
}
.wrapper-reviews > h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 500;
}
.wrapper-reviews > p {
  margin: 0 auto;
  text-align: center;
  font-size: 1.5rem;
  width: 30%;
  font-weight: 400;
  color: var(--font-paragraf);
}

.card-reviews {
  flex-wrap: wrap;
  gap: 30px;
  margin-top: -50px;
}

.card-reviews > .card {
  border-radius: 5px;

  width: 300px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card-reviews > .card:nth-child(1) {
  margin-top: 90px;
}

.card-reviews > .card:nth-child(3) {
  margin-top: 90px;
}

.card-reviews > .card > .box-image-reviews {
  height: 200px;
  position: relative;
}
.box-image-reviews > svg {
  height: 230px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box-image-reviews > img {
  position: absolute;
  top: 44%;
  left: 49%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 110px;
  border-radius: 50%;
}
.card-reviews > .card > h3 {
  margin-top: -25px;
  padding-inline: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.card-reviews > .card > p {
  padding: 0px 30px 20px 30px;
  text-align: center;
  margin-top: -20px;
  color: var(--font-paragraf);
}
.card-reviews > .card > span {
  display: block;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  margin-top: -10px;
}
/* reviews end */
</style>
