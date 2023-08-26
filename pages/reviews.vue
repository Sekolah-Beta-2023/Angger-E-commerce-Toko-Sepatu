<template>
  <section id="Reviews">
    <div class="wrapper-reviews">
      <h2>Reviews</h2>
      <p class="mb-4">Get real-world advice from people who've been there</p>
      <div class="card-reviews flex-center"></div>
    </div>
    <div class="review-page">
      <div class="review-form" v-if="!userReview">
        <h2>Write a Review</h2>
        <form @submit.prevent="submitReview">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="review.name" type="text" id="name" required />
          </div>
          <div class="form-group">
            <label for="image">Image:</label>
            <input v-model="review.image" type="text" id="image" required />
          </div>
          <div class="form-group">
            <label for="content">Review:</label>
            <textarea v-model="review.content" id="content" required></textarea>
          </div>
          <div class="form-group">
            <label class="rating" for="content">Rating:</label>

            <RatingUser @rating-selected="handleRatingSelected" />
          </div>
          <button class="style-active-button" type="submit">
            Submit Review
          </button>
        </form>
      </div>

      <div class="user-review" v-if="userReview">
        <h2>Your Review</h2>
        <div class="review">
          <p>Name: {{ userReview.name }}</p>
          <p>Review: {{ userReview.content }}</p>
          <p>Rating: {{ userReview.rating }}/5</p>
          <button @click="editReview(userReview)">Edit Review</button>
          <button @click="deleteReview(userReview)">Delete Review</button>
        </div>
      </div>

      <div class="all-reviews">
        <h2>All Reviews</h2>
        <div class="review" v-for="(review, index) in reviews" :key="index">
          <p>Name: {{ review.name }}</p>
          <p>Review: {{ review.content }}</p>
          <p>Rating: {{ review.rating }}/5</p>
        </div>
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
        image: '',
        content: '',
        rating: 0,
        userReview: true,
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
.form-group {
  margin-bottom: 10px;
}
.form-group .rating {
  margin-bottom: 5px;
}

.user-review,
.all-reviews {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.review {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

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
  margin-top: 10px;
}

.style-active-button:hover {
  background-color: transparent;
  border: 2px solid var(--btn-color);
}
/* riviews start */
.wrapper-reviews {
  padding-top: 130px;
  margin-bottom: 20px;
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
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--font-paragraf);
}

.review-page {
  margin: 0 auto;
  border-radius: 5px;
  width: 60%;
  background-color: var(--third-color);
  padding: 20px;
}
.review-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.review-from h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}
.review-form label {
  font-size: 1rem;
  display: block;
}
.review-form input::placeholder,
.review-form textarea::placeholder {
  font-size: 15px;
  font-style: italic;
}
.review-form input {
  font-size: 16px;
  background-color: inherit;
  outline: 0;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  height: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
.review-form textarea {
  font-size: 16 px;
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border: none;
  outline: 0;
  background-color: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
/* reviews end */
</style>
