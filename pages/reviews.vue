<template>
  <section id="Reviews" class="bg-secondary">
    <div
      class="container w-[90%] pt-[120px] flex justify-center items-center flex-col"
    >
      <div class="mb-3">
        <h2 class="mt-5 text-5xl text-center mb-2 font-semibold">Reviews</h2>
        <p class="ket-reviews text-center text-2xl font-normal text-slate-900">
          Get real-world advice from people who've been there
        </p>
        <div class="card-reviews flex-center"></div>
      </div>
      <!-- v-if="!userReview" -->
      <div class="review-page rounded-md w-[70%] p-5 bg-white">
        <div class="mb-5 rounded-md">
          <h2 class="text-center text-primary text-3xl mb-5 font-semibold">
            Write a Review
          </h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name:</label>
              <input v-model="review.name" type="text" id="name" required />
            </div>
            <div class="form-group image-wrapper">
              <label for="image">Image:</label>
              <div>
                <p>
                  Gambar Profile Anda sebaiknya memiliki rasio 1:1 dan berukuran
                  tidak lebih dari 2MB.
                </p>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="content">Review:</label>
              <textarea
                v-model="review.content"
                id="content"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label class="rating" for="content">Rating:</label>

              <RatingUser @rating-selected="handleRatingSelected" />
            </div>
            <button
              class="mt-4 border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"
              type="submit"
            >
              Submit Review
            </button>
          </form>
        </div>
        <!-- v-if="userReview" -->
        <div class="user-review">
          <h2 class="text-2xl mb-3 font-semibold">Your Review</h2>
          <div class="review user-review p-5">
            <img class="" :src="userReview.src" />
            <p class="review-name">Name: {{ userReview.name }}</p>
            <p>Rating :</p>
            <DisplayRating :rating="userReview.rating" />
            <p class="review-description">
              Description: {{ userReview.description }}
            </p>
            <button
              class="border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
              @click="editReview(userReview)"
            >
              Edit Review
            </button>
            <button
              class="me-2 border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
              @click="deleteReview(userReview)"
            >
              Delete Review
            </button>
          </div>
        </div>

        <div class="all-reviews">
          <h2 class="text-2xl font-semibold mb-3">All Reviews</h2>
          <div
            v-for="(item, index) in reviews"
            :key="index"
            class="border-2 border-btnColor p-5 mb-3 rounded-md"
          >
            <div class="flex">
              <img
                class="mr-3 w-[50px] h-[50px] rounded-full border-e-2 border-primary"
                :src="item.url"
              />
              <div>
                <p class="text-xs font-semibold text-slate-700">
                  {{
                    new Date(item.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })
                  }}
                </p>
                <p class="mb-1 text-base text-slate-800">{{ item.name }}</p>
                <p>
                  <DisplayRating :rating="4" />
                </p>
              </div>
            </div>
            <p class="review-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// agar tailwind autoreload maka gunakan perintah yarn run dev / npm run dev (sertakan run)
import axios from 'axios'
export default {
  data() {
    return {
      sampleImage: require('@/assets/reviews/Sarah.png'),

      // rating
      selectedRating: 0,
      // crud reviews
      reviews: [],
      review: {
        name: '',
        image: null,
        content: '',
        rating: null,
      },
      userReview: {
        name: 'Angger NUr AMin',
        src: require('@/assets/reviews/John.png'),
        description:
          'The shoes feel lightweight and offer excellent protection for my feet. The elegant design also boosts my  confidence. The customer service at this store is outstanding. Thank you!',
        rating: 5,
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
    this.fetchReviews()
  },
  methods: {
    handleImageUpload(event) {
      this.review.image = event.target.files[0]
    },
    handleRatingSelected(rating) {
      this.selectedRating = rating
    },
    async fetchReviews() {
      try {
        const response = await axios.get(
          'https://api-crud-production-bc39.up.railway.app/review'
        )
        this.reviews = response.data
      } catch (error) {
        return 'Error fetching reviews: ' + error
      }
    },
    async submitForm() {
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          {
            title: this.review.name,
            body: this.review.content,
            userId: 1, // You can adjust this
          }
        )
        console.log('data post ', response.data)

        this.reviews.push(response.data)
        this.review.name = ''
        this.review.content = ''
        this.selectedRating = null
        this.review.image = null
      } catch (error) {
        console.error('Error submitting review:', error)
      }
    },
  },
}
</script>

<style>
.user-review img {
  width: 100px;
  height: 100px;
}
.user-review .review-description {
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 3px;
}
.image-wrapper {
  display: flex;
  flex-direction: column;
}
.image-wrapper p {
  font-size: 12px;
  margin-bottom: 5px;
}
.image-wrapper input {
  border: 0 !important;
  font-size: 16px !important;
}
.form-group .rating {
  margin-bottom: 5px;
}

.user-review {
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 20px;
}

/* riviews start */
form input::placeholder,
form textarea::placeholder {
  font-size: 15px;
  font-style: italic;
}
form input {
  font-size: 16px;
  background-color: inherit;
  outline: 0;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  height: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
form textarea {
  font-size: 16 px;
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border: none;
  outline: 0;
  background-color: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 576px) {
  #Reviews .container {
    width: 100%;
    padding: 120px 20px 20px 20px;
    overflow: hidden;
  }
  .review-page {
    width: 100%;
  }
  .user-review button {
    margin-top: 10px;
    padding-inline: 10px;
    padding-block: 8px;
  }
  .ket-reviews {
    font-size: 20px;
    width: 70%;
    margin: auto;
  }
}
/* reviews end */
</style>
