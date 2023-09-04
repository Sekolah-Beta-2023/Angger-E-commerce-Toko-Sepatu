<template>
  <div class="card-product-rating">
    <i
      v-for="(star, index) in stars"
      :key="index"
      class="fas fa-star"
      :class="{ 'active-rating': star.active }"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number, // Menerima rating dari parent component
  },
  data() {
    return {
      stars: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
    }
  },
  watch: {
    rating(newRating) {
      this.updateStars(newRating)
    },
  },
  created() {
    this.updateStars(this.rating)
  },
  methods: {
    updateStars(rating) {
      this.stars.forEach((star, index) => {
        star.active = index < rating
      })
    },
  },
}
</script>

<style scoped>
.card-product-rating i {
  color: gold;
}
.card-product-rating .active-rating {
  color: red;
}
</style>
