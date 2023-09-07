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
      <div class="review-page rounded-md w-[70%] p-5 bg-white">
        <!-- v-if="userReview" -->
        <div
          v-if="reviewUser && reviewUser.name"
          class="user-review border-t-2 border-btnColor p-2 flex gap-4 flex-col"
        >
          <h2 class="text-2xl font-semibold">Your Review</h2>
          <div class="review user-review">
            <div class="flex justify-start items-center gap-3">
              <p class="review-name"><b>Image : </b></p>
              <img
                class="rounded-full border-2 border-btnColor p-2"
                :src="reviewUser.src"
                :alt="reviewUser.src"
              />
            </div>

            <p class="review-name"><b>Name : </b> {{ reviewUser.name }}</p>

            <div class="flex justify-start items-start">
              <p class="me-1"><b>Rating : </b></p>
              <DisplayRating :rating="reviewUser.rating" />
            </div>
            <p class="review-description">
              <b>Description : </b> {{ reviewUser.description }}
            </p>
            <button
              class="border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
              @click="editReview(reviewUser.id)"
            >
              Edit Review
            </button>
            <button
              class="me-2 border-2 border-btnColor outline-none bg-transparent py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent"
              @click="deleteReview(reviewUser.id)"
            >
              Delete Review
            </button>
          </div>
        </div>
        <!-- jika edit true -->

        <!-- kondisi jika user belum membuat reviewUser maka halaman form akan tampil -->
        <div v-else class="mb-5 rounded-md">
          <h2 class="text-center text-primary text-3xl mb-5 font-semibold">
            Write a Review
          </h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name:</label>
              <input id="name" v-model="review.name" type="text" required />
            </div>

            <!-- <div class="form-group image-wrapper">
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
            </div> -->

            <div class="form-group">
              <label for="content">Review:</label>
              <textarea
                id="content"
                v-model="review.description"
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

        <div v-if="formEdit" class="mb-5 rounded-md">
          <h2 class="text-center text-primary text-3xl mb-5 font-semibold">
            Write a Review
          </h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                id="name"
                v-model="review.name"
                type="text"
                required
                value="userReview.name"
              />
            </div>

            <!-- <div class="form-group image-wrapper">
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
            </div> -->

            <div class="form-group">
              <label for="content">Review:</label>
              <textarea
                id="content"
                v-model="review.description"
                required
                value="userReview.description"
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
              Save Changes
            </button>
          </form>
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
        url: 'https://fotoprofileuser.png',
        description: '',
        rating: null,
      },
      reviewUser: {}, // iNi akan digunakan untuk menyimpan ulasan pengguna
      formEdit: false,
    }
  },
  created() {
    this.fetchReviews()
  },
  methods: {
    handleImageUpload(event) {
      this.review.url = event.target.files[0]
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
        if (!this.reviewUser || !this.reviewUser.name) {
          this.review.rating = this.selectedRating
          const response = await axios.post(
            'https://api-crud-production-bc39.up.railway.app/review',
            this.review
          )
          console.log('data post ', response.data)
          this.reviewUser = response.data
        } else {
          console.log('Anda sudah mengisi form review')
        }
      } catch (error) {
        console.error('Error submitting review:', error.response)
      }
      this.review.name = ''
      this.review.description = ''
      this.review.rating = null
      this.selectedRating = null
      this.review.image = null

      this.fetchReviews()
    },
    async editReview(id) {
      this.formEdit = true
      this.reviewUser = {}

      const updatedReview = await axios.get(
        `https://api-crud-production-bc39.up.railway.app/review/${id}`
      )
      this.reviewUser = updatedReview.data
    },
    async deleteReview(id) {
      await axios.delete(
        `https://api-crud-production-bc39.up.railway.app/review/${id}`
      )
      this.reviewUser = {}
      this.fetchReviews()
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
