<template>
  <div class="card-product-rating cursor-pointer">
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
  cursor: pointer;
  color: gold;
}
.card-product-rating .active-rating {
  cursor: pointer;

  color: red;
}
</style>
