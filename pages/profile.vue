<!-- pages/products/_id.vue -->
<template>
  <section id="profile" class="bg-secondary mb-5">
    <div class="container w-[70%] pt-[120px]">
      <div class="wrapper-profile text-slate-900 bg-white p-5">
        <div class="header-profile">
          <h2 class="text-3xl mb-2">Profil Saya</h2>
          <p class="pb-3 border-b-2">
            Kelola informasi profil Anda untuk mengontrol, melindungi dan
            mengamankan akun
          </p>
        </div>

        <dialog id="lengkapiProfile" ref="dialogProfile" class="modal">
          <div class="modal-box w-11/12 max-w-4xl bg-white overflow-hidden">
            <h3 class="font-bold text-2xl">Lengkapi Profile</h3>
            <div class="relative">
              <form @submit.prevent="createProfile">
                <div class="flex flex-col gap-1">
                  <div class="form-control w-full">
                    <label
                      class="label text-slate-400 font-normal text-base"
                      for="Email"
                    >
                      Email
                    </label>
                    <input
                      id="Email"
                      v-model="newEmail"
                      name="Email"
                      type="email"
                      required
                      class="input input-bordered input-sm w-full bg-white rounded-md"
                    />
                    <p class="text-btnColor font-semibold">
                      Jika tidak ingin merubah Email. Masukkan Email yang sama
                      saat Login
                    </p>
                  </div>
                  <div class="form-control w-full">
                    <label
                      class="label text-slate-400 font-normal text-base"
                      for="password"
                    >
                      Password
                    </label>
                    <div class="flex justify-between items-center relative">
                      <input
                        v-model="newPassword"
                        :type="showPassword ? 'text' : 'password'"
                        required
                        autocomplete
                        placeholder="password"
                        class="input input-bordered input-sm w-full bg-white rounded-md"
                      />
                      <div
                        class="absolute right-4 top-2"
                        @click="togglePasswordVisibility"
                      >
                        <i
                          v-if="showPassword"
                          class="fas fa-eye"
                          title="Hide Password"
                        ></i>
                        <i
                          v-else
                          class="fas fa-eye-slash"
                          title="Show Password"
                        ></i>
                      </div>
                    </div>

                    <p class="text-btnColor font-semibold">
                      Jika ingin melengkapi Profile. Maka Anda juga diharuskan
                      untuk memasukkan Password baru.
                    </p>
                  </div>
                  <div class="form-control w-full">
                    <label
                      class="label text-slate-400 font-normal text-base"
                      for="Name"
                    >
                      Nama
                    </label>
                    <input
                      id="Name"
                      v-model="name"
                      name="Name"
                      type="Name"
                      required
                      class="input input-bordered input-sm w-full bg-white rounded-md"
                    />
                  </div>
                  <div class="form-control w-full">
                    <label
                      class="label text-slate-400 font-normal text-base"
                      for="NoTelepon"
                    >
                      No Telepon
                    </label>
                    <input
                      id="NoTelepon"
                      v-model="noTelepon"
                      name="NoTelepon"
                      type="tel"
                      required
                      placeholder="085xxxxxxxxx"
                      class="input input-bordered input-sm w-full bg-white rounded-md"
                    />
                  </div>
                  <div class="flex items-center justify-start gap-4">
                    <label class="label text-slate-400 font-normal text-base">
                      Jenis Kelamin</label
                    >
                    <input
                      id="Laki-laki"
                      v-model="jenisKelamin"
                      type="radio"
                      name="jenis_kelamin"
                      value="Laki-laki"
                      class="w-3 mt-2 bg-white"
                    />
                    <label for="Laki-laki">Laki-laki</label>

                    <input
                      id="Perempuan"
                      v-model="jenisKelamin"
                      type="radio"
                      name="jenis_kelamin"
                      value="Perempuan"
                      class="w-3 mt-2 bg-white"
                    />
                    <label for="Perempuan">Perempuan</label>
                  </div>
                  <div class="">
                    <label class="text-slate-400 font-normal text-base"
                      >Tanggal Lahir *</label
                    >
                    <br />
                    <select
                      id="tanggal"
                      v-model="tanggal"
                      name="tanggal"
                      class="bg-white w-[160px] me-2 p-2 border-2 mt-3"
                    >
                      <option value="">Tanggal</option>
                      <option
                        v-for="tgl in tanggalOptions"
                        :key="tgl"
                        :value="tgl"
                      >
                        {{ tgl }}
                      </option>
                    </select>

                    <select
                      id="bulan"
                      v-model="bulan"
                      name="bulan"
                      class="bg-white w-[160px] me-2 p-2 border-2"
                    >
                      <option value="">Bulan</option>
                      <option
                        v-for="(bln, index) in bulanOptions"
                        :key="index"
                        :value="bln"
                      >
                        {{ bln }}
                      </option>
                    </select>

                    <select
                      id="tahun"
                      v-model="tahun"
                      name="tahun"
                      class="bg-white w-[160px] me-2 p-2 border-2"
                    >
                      <option value="">Tahun</option>
                      <option
                        v-for="thn in tahunOptions"
                        :key="thn"
                        :value="thn"
                      >
                        {{ thn }}
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  class="text-white font-semibold hovert:text-white py-3 px-6 bg-btnColor hover:btn-warning rounded-md absolute right-0 bottom-0"
                >
                  Simpan
                </button>
              </form>
              <form method="dialog">
                <button
                  class="text-white font-semibold hovert:text-white py-3 px-6 rounded-md hover:bg-slate-600 bg-slate-500 absolute right-32 bottom-0"
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        </dialog>

        <div v-if="showEditProfile">
          <div class="form-control w-full">
            <label
              class="label text-slate-400 font-normal text-base"
              for="Email"
            >
              Email
            </label>
            <input
              id="Email"
              v-model="profile.email"
              readonly
              name="Email"
              type="email"
              class="input input-bordered input-sm w-full bg-white rounded-md"
            />
          </div>
          <div class="form-control w-full">
            <label
              class="label text-slate-400 font-normal text-base"
              for="Name"
            >
              Nama
            </label>
            <input
              id="Name"
              v-model="name"
              name="Name"
              type="Name"
              readonly
              class="input input-bordered input-sm w-full bg-white rounded-md"
            />
          </div>
          <div class="form-control w-full">
            <label
              class="label text-slate-400 font-normal text-base"
              for="NoTelepon"
            >
              No Telepon
            </label>
            <input
              id="NoTelepon"
              v-model="noTelepon"
              readonly
              name="NoTelepon"
              type="tel"
              class="input input-bordered input-sm w-full bg-white rounded-md"
            />
          </div>
          <div class="flex items-center justify-start gap-4">
            <label class="label text-slate-400 font-normal text-base">
              Jenis Kelamin</label
            >
            <input
              id="Laki-laki"
              v-model="jenisKelamin"
              readonly
              type="radio"
              name="jenis_kelamin"
              class="w-3 mt-2 bg-white"
            />
            <label for="Laki-laki">{{ jenisKelamin }}</label>
          </div>
          <div class="">
            <label class="text-slate-400 font-normal text-base"
              >Tanggal Lahir *</label
            >
            <br />
            <select
              id="tanggal"
              v-model="tanggal"
              name="tanggal"
              class="bg-white w-[160px] me-2 p-2 border-2 mt-3"
            >
              <option :value="tanggal">
                {{ tanggal }}
              </option>
            </select>

            <select
              id="bulan"
              v-model="bulan"
              name="bulan"
              class="bg-white w-[160px] me-2 p-2 border-2"
              disabled
            >
              <option :value="bulan">
                {{ bulan }}
              </option>
            </select>

            <select
              id="tahun"
              v-model="tahun"
              name="tahun"
              class="bg-white w-[160px] me-2 p-2 border-2"
              disabled
            >
              <option :value="tahun">
                {{ tahun }}
              </option>
            </select>
          </div>
        </div>

        <div v-if="showLengkapiProfile">
          <div class="deskripsi-profile flex flex-col my-5 gap-2 w-full">
            <div class="form-control w-full">
              <label
                class="label text-slate-400 font-normal text-base"
                for="Email"
              >
                Email
              </label>
              <input
                id="Email"
                name="Email"
                type="email"
                readonly
                :value="profile.email"
                class="input input-bordered input-md w-full bg-white rounded-md"
              />
            </div>

            <!-- lengkapi profile -->
            <button
              class="btn btn-warning mt-3 w-[200px] h-10 inline-block"
              onclick="lengkapiProfile.showModal()"
            >
              Lengkapi Profile
            </button>

            <!-- <div
              class="image-profile w-[35%] flex flex-col justify-center items-center ps-5 border-s-2"
            >
              <div class="image">
                <img :src="src" alt="" />
              </div>
              <button class="btn btn-warning my-4">Pilih Gambar</button>
              <p class="text-slate-600 font-normal text-base">
                Ukuran gambar: maks. 1 MB
              </p>
              <p class="text-slate-600 font-normal text-base">
                Format gambar: .JPEG, .PNG
              </p>
            </div> -->
          </div>
        </div>
        <div v-if="showEditProfile === false && showLengkapiProfile === false">
          <p>Anda belum Login</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// TAMBAH MIDDLEWARE UNTUK MENGTASI MANAGEMENT MASUK
export default {
  // middleware: ['auth'],
  data() {
    return {
      src: require('@/assets/background/banner-newArrival.jpg'),
      profile: {},
      tanggalOptions: [],
      bulanOptions: [],
      tahunOptions: [],
      newEmail: '',
      newPassword: '',
      name: '',
      noTelepon: '',
      jenisKelamin: '',
      tanggal: '',
      bulan: '',
      tahun: '',
      showEditProfile: false,
      showLengkapiProfile: false,
      showPassword: false,
    }
  },
  mounted() {
    // membuat data tanggal 1 - 31
    for (let i = 0; i <= 31; i++) {
      this.tanggalOptions.push(i.toString().padStart('2', 0))
      // menggunakan padStar() agar angka 1 - 10 diawali angka 0 , agar tanggal yang tampil 2 angka
    }

    // Buat daftar bulan menggunakan JavaScript
    const namaBulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]
    this.bulanOptions = namaBulan

    // membuat data tahun 1980 - tahun sekarang
    const currentYear = new Date().getFullYear()
    for (let year = 1980; year <= currentYear; year++) {
      this.tahunOptions.push(year.toString())
    }
  },
  async created() {
    try {
      // mengambil data user yang sudah terdaftar disupabase
      const {
        data: { user },
      } = await this.$supabase.auth.getUser()
      this.profile = user
      this.name = user.user_metadata.name
      this.noTelepon = user.user_metadata.noTelepon
      this.jenisKelamin = user.user_metadata.jenisKelamin
      this.tanggal = user.user_metadata.tanggal
      this.bulan = user.user_metadata.bulan
      this.tahun = user.user_metadata.tahun
      if (this.name) {
        this.showEditProfile = true
        this.showLengkapiProfile = false
      } else {
        this.showEditProfile = false
        this.showLengkapiProfile = true
      }
    } catch (error) {}
  },
  methods: {
    //  toggle icon password show and hide
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    async createProfile() {
      this.showEditProfile = true
      this.showLengkapiProfile = false
      try {
        const { data, error } = await this.$supabase.auth.updateUser({
          email: this.newEmail,
          password: this.newPassword,
          data: {
            name: this.name,
            noTelepon: this.noTelepon,
            jenisKelamin: this.jenisKelamin,
            tanggal: this.tanggal,
            bulan: this.bulan,
            tahun: this.tahun,
          },
        })
        if (data) {
          this.$refs.dialogProfile.close() // Menutup modal
        }
        if (error) {
          throw error
        }
      } catch (error) {}
    },
  },
}
</script>
