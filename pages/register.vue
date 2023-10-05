<template>
  <div class="hero min-h-screen bg-slate-100">
    <div class="container w-[80%]">
      <div class="hero-content flex-col lg:flex-row-reverse container">
        <div
          class="card flex-shrink-0 w-full max-w-[510px] shadow-2xl bg-white rounded-none"
        >
          <form action="" @submit.prevent="signUp">
            <div class="card-body my-0 py-0">
              <div
                class="text-slate-900 flex flex-col gap-1 justify-center items-center pt-5 pb-2"
              >
                <h1 class="text-slate-400 text-3xl font-bold mt-3">
                  ANA<span class="text-btnColor">SHOES</span>
                </h1>
              </div>
              <h1 class="text-2xl text-slate-900 font-semibold text-center">
                Register
              </h1>
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
                  <button
                    class="absolute right-4 top-2"
                    @click="togglePasswordVisibility"
                  >
                    <i
                      v-if="showPassword"
                      class="fas fa-eye-slash"
                      title="Hide Password"
                    ></i>
                    <i v-else class="fas fa-eye" title="Show Password"></i>
                  </button>
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
                  type="submit"
                  class="btn bg-btnColor text-slate-950 h-10 border-0 outline-none hover:bg-warning transition"
                >
                  Register
                </button>
              </div>
            </div>

            <p class="text-center text-black text-sm py-3">
              Sudah memiliki akun?
              <nuxt-link to="/login" class="text-red-600 font-semibold"
                >Login</nuxt-link
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
      succesMessage: '',
      errorMessage: '',
      showPassword: false,
    }
  },
  methods: {
    //  toggle icon password show and hide
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    async signUp() {
      try {
        const { data, error } = await this.$supabase.auth.signUp({
          email: this.email,
          password: this.password,
        })
        if (error) {
          // jika salah satau field kosong maka throw eror dan tampilkan pesan error , agar masuk ke block catch
          throw error
        }
        if (data) {
          this.errorMessage = ''
          this.succesMessage = 'Check your email to confirm your account.'
        }
      } catch (er) {
        this.succesMessage = ''
        this.errorMessage = er.message
      }
    },
  },
}
</script>
