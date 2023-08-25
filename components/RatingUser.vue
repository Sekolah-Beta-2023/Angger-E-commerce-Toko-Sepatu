<template>
  <div class="card-product-rating">
    <i
      v-for="(star, index) in stars"
      :key="index"
      class="fas fa-star"
      :class="{ 'active-rating': star.active }"
      @click="setRating(index + 1)"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
      selectedRating: 0,
    }
  },
  methods: {
    setRating(rating) {
      this.selectedRating = rating
      this.stars.forEach((star, index) => {
        star.active = index < rating
      })
      this.$emit('rating-selected', rating)
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
