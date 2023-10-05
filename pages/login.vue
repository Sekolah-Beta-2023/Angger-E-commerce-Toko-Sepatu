<template>
  <div class="hero min-h-screen bg-secondary">
    <div class="container w-[80%]">
      <div class="hero-content flex-col lg:flex-row-reverse container">
        <div
          class="card flex-shrink-0 w-full max-w-[510px] shadow-2xl bg-white rounded-none"
        >
          <form action="" @submit.prevent="signIn">
            <div class="card-body my-0 py-0">
              <div class="flex flex-col gap-1 justify-center items-center pt-5">
                <h1 class="text-slate-400 text-3xl font-bold mt-3">
                  ANA<span class="text-btnColor">SHOES</span>
                </h1>
              </div>
              <div class="flex flex-col items-center justify-center">
                <h1 class="text-2xl text-slate-900 font-semibold">
                  Welcome back
                </h1>
                <p class="mb-2 text-slate-800">
                  Silakan login untuk melanjutkan
                </p>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-slate-800">Email</span>
                </label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="email"
                  class="input input-bordered bg-white h-11"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-slate-800">Password</span>
                </label>
                <div class="flex justify-between items-center relative">
                  <input
                    v-model="password"
                    autocomplete
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="password"
                    class="input input-bordered w-[100%] bg-white h-11"
                  />
                  <div
                    class="absolute right-4 top-2"
                    @click="togglePasswordVisibility"
                  >
                    <i
                      v-if="showPassword"
                      class="fas fa-eye-slash"
                      title="Hide Password"
                    ></i>
                    <i v-else class="fas fa-eye" title="Show Password"></i>
                  </div>
                </div>
              </div>
              <p v-if="errorMessage" class="text-red-600 italic my-2">
                {{ errorMessage }}
              </p>
              <p v-if="succesMessage" class="text-green-600 my-2">
                {{ succesMessage }}
              </p>
              <div
                class="form-control mt-2 border-b-[1px] border-slate-400 pb-3"
              >
                <button
                  class="btn bg-btnColor text-slate-950 h-10 border-0 outline-none hover:bg-warning transition"
                >
                  Login
                </button>
              </div>
            </div>

            <p class="text-center text-black text-sm py-3">
              Tidak punya akun?
              <nuxt-link to="/register" class="text-red-600 font-semibold"
                >Sign Up</nuxt-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'custom.layout',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      succesMessage: '',
      showPassword: false,
    }
  },
  methods: {
    //  toggle icon password show and hide
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    async signIn() {
      try {
        const { error } = await this.$supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        })

        if (error) {
          throw error
          // Handle error here (e.g., show error message to the user)
        } else {
          this.errorMessage = ''
          this.succesMessage = 'Login successful'
          // Redirect or perform actions upon successful login
          this.$router.push('/') // Redirect to the home page
        }
      } catch (error) {
        this.errorMessage = error.message
      }
    },
  },
}
</script>
