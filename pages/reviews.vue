<template>
  <section id="Reviews" class="bg-secondary">
    <div
      class="container w-[90%] pt-[110px] flex justify-center items-center flex-col text-slate-900"
    >
      <div class="mb-3">
        <h2 class="mt-5 text-5xl text-center mb-2 font-normal">Reviews</h2>
        <p class="ket-reviews text-center text-xl font-normal text-slate-900">
          Get real-world advice from people who've been there
        </p>
        <div class="card-reviews flex-center"></div>
      </div>
      <div class="review-page rounded-md w-[70%] p-5 bg-white">
        <!--jika user sudah membuat review -->
        <div
          v-if="formYourReview"
          class="user-review border-btnColor p-2 flex gap-5 flex-col"
        >
          <h2 class="text-3xl font-normal text-primary text-center">
            Your Review
          </h2>
          <div class="review user-review">
            <div class="flex justify-start items-center gap-5 form-group">
              <p class="review-name"><label>Image : </label></p>
              <img
                class="rounded-full border-2 border-btnColor"
                :src="reviewUser.url"
                :alt="reviewUser.url"
              />
            </div>

            <p class="review-name form-group mt-2">
              <label>Name : </label> {{ reviewUser.name }}
            </p>

            <div class="flex justify-start items-start form-group">
              <p class="me-1"><label>Rating : </label></p>
              <DisplayRating :rating="reviewUser.rating" />
            </div>
            <div
              class="review-description w-[100%] h-52 form-group overflow-scroll"
            >
              <label>Description : </label>
              <p
                class="overflow-auto mt-1 break-words border-2 border-btnColor p-3 rounded-md w-full"
              >
                {{ reviewUser.description }}
              </p>
            </div>
            <button
              class="border-2 border-btnColor outline-none bg-transparent py-[6px] px-3 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent bg-warning"
              @click="editReview"
            >
              Edit Review
            </button>
            <button
              class="me-2 border-2 border-btnColor outline-none bg-transparent py-[6px] px-3 text-base cursor-pointer transition font-bold rounded-sm hover:bg-btnColor hover:border-transparent hover:text-black"
              @click="deleteReview"
            >
              Delete Review
            </button>
          </div>
        </div>
        <!-- jika edit true -->

        <!-- kondisi jika user belum membuat reviewUser maka halaman form akan tampil -->
        <div v-if="formCreateReview" class="mb-1 rounded-md bg-white">
          <h2 class="text-center text-primary text-3xl mb-5 font-normal">
            Write a Review
          </h2>
          <form @submit.prevent="submitForm">
            <div class="form-group bg-white">
              <label for="name">Name : </label>
              <input id="name" v-model="review.name" type="text" required />
            </div>

            <div class="form-group image-wrapper">
              <label for="image">Image : </label>
              <div>
                <p>
                  Gambar Profile Anda sebaiknya memiliki rasio 1:1 dan berukuran
                  tidak lebih dari 2MB.
                </p>
                <input
                  id="image"
                  type="file"
                  class="file-input file-input-warning file-input-sm w-full max-w-xs bg-white"
                  accept="image/*"
                  @change="handleImageUpload"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="content">Review : </label>
              <textarea
                id="content"
                v-model="review.description"
                class="break-words"
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label class="rating" for="content">Rating : </label>

              <RatingUser @rating-selected="handleRatingSelected" />
            </div>
            <button
              class="mt-4 border-2 border-transparent outline-none bg-warning py-[6px] text-white px-3 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor hover:text-black"
              type="submit"
            >
              Submit Review
            </button>
          </form>
        </div>
        <div v-if="formEdit" class="mb-5 rounded-md">
          <h2 class="text-center text-primary text-3xl mb-5 font-semibold">
            Write edit Review
          </h2>
          <form @submit.prevent="submitEditForm">
            <div class="form-group">
              <label for="name">Name : </label>
              <input
                id="name"
                v-model="reviewUser.name"
                type="text"
                required
                value="reviewUser.name"
              />
            </div>

            <div class="form-group mb-3">
              <label class="mb-3" for="image">Image : </label>
              <div class="flex">
                <div class="border-2 me-3">
                  <img
                    class="w-[100px] h-[100px]"
                    :src="reviewUser.url"
                    :alt="reviewUser.name"
                  />
                </div>
                <div class="image-wrapper">
                  <p class="">
                    Gambar Profile Anda sebaiknya memiliki rasio 1:1 dan
                    berukuran tidak lebih dari 2MB.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    value="reviewUser.url"
                    class="file-input file-input-warning file-input-sm w-full max-w-xs bg-white"
                    @change="handleImageUploadEdit"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="content">Review : </label>
              <textarea
                id="content"
                v-model="reviewUser.description"
                class="w-full break-words"
                required
                value="reviewUser.description"
              ></textarea>
            </div>
            <div class="flex flex-col">
              <div class="form-group">
                <label class="rating" for="content">Update Rating : </label>
                <RatingUser @rating-selected="handleRatingSelected" />
              </div>
              <div class="form-group">
                <label class="rating text-slate-400" for="content"
                  >Your Rating :
                </label>
                <DisplayRating :rating="reviewUser.rating" />
              </div>
            </div>

            <button
              class="mt-4 border-2 border-transparent outline-none bg-warning py-[6px] text-white px-3 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor hover:text-black"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
        <div v-if="reviews.length > 0">
          <div class="mt-4 all-reviews">
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
                  :alt="item.name"
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
                    <DisplayRating :rating="item.rating" />
                  </p>
                </div>
              </div>
              <p
                class="review-description break-words"
                style="white-space: pre-line"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="w-100 h-56"><LoadingPage /></div>
        </div>
      </div>
      <!-- elemen vue-notification -->
      <notifications group="notifReview" class="mt-32 me-14" />
    </div>
  </section>
</template>

<script>
// agar tailwind autoreload maka gunakan perintah yarn run dev / npm run dev (sertakan run)
import axios from 'axios'
import LoadingPage from '../components/LoadingPage.vue'
export default {
  components: {
    LoadingPage,
  },
  data() {
    return {
      sampleImage: require('@/assets/reviews/Sarah.png'),

      // rating
      selectedRating: 0,
      // crud reviews
      reviews: [],
      review: {
        name: '',
        url: 'https://images.unsplash.com/photo-1645536908932-652fbd998029?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FydG9vbl9wZXJzb258fHx8fHwxNjk0MDkxNjgy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=520',
        description: '',
        rating: null,
      },
      reviewUser: {}, // iNi akan digunakan untuk menyimpan ulasan pengguna
      // variabel untuk layouting form crud reviews
      formEdit: false,
      formYourReview: false,
      formCreateReview: true,

      idReviewUser: null,
    }
  },
  created() {
    this.loadFromLocalStorage()
    this.fetchReviews()
  },
  methods: {
    saveToLocalStorage() {
      if (process.client) {
        // Pastikan hanya dijalankan pada sisi klien
        const reviewUserId = this.reviewUser.id
        localStorage.setItem('userReviewId', reviewUserId.toString()) // ubah ke dtring agar bisa dicombine dengan url get method
      }
    },

    async loadFromLocalStorage() {
      if (process.client) {
        // Pastikan hanya dijalankan pada sisi klien
        const reviewDataId = localStorage.getItem('userReviewId')
        if (reviewDataId) {
          // Periksa apakah data sudah dalam format JSON sebelum mengurai
          console.log('id localsekarang', reviewDataId)
          this.formCreateReview = false
          this.formYourReview = true
          // Ambil data dari server berdasarkan id
          try {
            const response = await axios.get(
              `https://api-crud-production-bc39.up.railway.app/review/${reviewDataId}`
            )
            console.log('data dari server', response.data)
            this.reviewUser = response.data
          } catch (error) {
            // Tangani kesalahan jika tidak dapat mengambil data dari server
            console.error('Error fetching review data:', error)
          }
        }
      }
    },

    handleImageUpload(event) {
      const inputImage = event.target.files[0] // mengambil data gambar
      this.review.url = URL.createObjectURL(inputImage) // create object url
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
          if (this.selectedRating === 0) {
            this.$notify({
              group: 'notifReview',
              type: 'error',
              title: 'Incomplete Submission',
              text: 'Please select a rating before submitting your review.',
            })
            return // Menghentikan proses jika rating kosong
          }
          this.review.rating = this.selectedRating
          const response = await axios.post(
            'https://api-crud-production-bc39.up.railway.app/review',
            this.review
          )
          console.log('data post ', response.data)
          this.reviewUser = response.data
          this.saveToLocalStorage()
          this.$notify({
            group: 'notifReview',
            type: 'success',
            title: 'Review Successfully Created',
            text: 'Thank you! Your review has been successfully created and saved.',
          })

          this.formYourReview = true
          this.formCreateReview = false
          console.log('data reviewUser', this.reviewUser)
        } else {
          console.log('Anda sudah mengisi form review')
        }
      } catch (error) {
        this.$notify({
          group: 'notifReview',
          type: 'error',
          title: 'Incomplete Submission',
          text: 'Please fill in all required fields before submitting your review.',
        })
        console.error('Error submitting review:', error.response)
      }
      this.review.name = ''
      this.review.description = ''
      this.review.rating = null
      this.selectedRating = null
      this.review.url = ''

      this.fetchReviews()
    },
    async editReview() {
      if (process.client) {
        const idActive = localStorage.getItem('userReviewId')
        console.log('id local storange', idActive)
        this.formYourReview = false
        this.formEdit = true
        this.formCreateReview = false
        const updatedReview = await axios.get(
          `https://api-crud-production-bc39.up.railway.app/review/${idActive}`
        )
        this.reviewUser = updatedReview.data
        console.log('review User edit', this.reviewUser)
      }
    },
    handleImageUploadEdit(event) {
      const inputImage = event.target.files[0] // mengambil data gambar
      this.reviewUser.url = URL.createObjectURL(inputImage) // create object url
      console.log(this.image)
    },
    async submitEditForm() {
      try {
        if (process.client) {
          const idActive = localStorage.getItem('userReviewId')
          this.reviewUser.rating = this.selectedRating
          const response = await axios.put(
            `https://api-crud-production-bc39.up.railway.app/review/${idActive}`,
            this.reviewUser
          )
          console.log('Data berhasil diubah', response.data)
          this.reviewUser = response.data
          this.reviewUser.rating = this.selectedRating

          this.saveToLocalStorage()
          this.$notify({
            group: 'notifReview',
            type: 'success',
            title: 'Review Successfully Edited',
            text: 'Your review has been successfully edited and updated.',
          })
          this.fetchReviews()
          console.log('hasil review User edit', this.reviewUser)
          // Setelah berhasil mengubah review, kembalikan ke tampilan awal
          this.formEdit = false
          this.formYourReview = true
          this.formCreateReview = false
        }
      } catch (error) {
        console.error('Error submitting edited review:', error.response)
      }
    },

    async deleteReview(id) {
      try {
        if (process.client) {
          const idActive = localStorage.getItem('userReviewId')
          await axios.delete(
            `https://api-crud-production-bc39.up.railway.app/review/${idActive}`
          )
          this.$notify({
            group: 'notifReview',
            type: 'success',
            title: 'Review Successfully Deleted',
            text: 'The review has been successfully deleted from our records.',
          })
          this.formCreateReview = true
          this.formYourReview = false
          localStorage.removeItem('userReviewId') // Hapus data dari localStorage saat review dihapus
          this.reviewUser = {}
          this.fetchReviews()
        }
      } catch (error) {
        console.log('delete error', error.response)
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
  overflow: hidden;
}

.form-group {
  margin-bottom: 3px;
}
.form-group label {
  font-weight: 500;
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
  background-color: white;
  font-size: 16px;
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
  height: 80px;
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
