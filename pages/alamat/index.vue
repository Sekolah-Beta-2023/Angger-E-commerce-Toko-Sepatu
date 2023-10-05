<!-- pages/products/_id.vue -->
<template>
  <section id="alamat" class="bg-secondary">
    <div class="container w-[70%] pt-[130px] min-h-screen">
      <div class="wrapper-profile text-slate-900 bg-white p-5 mb-5">
        <div class="header-profile">
          <h2 class="text-2xl font-semibold mb-2">Alamat Saya</h2>
          <p class="pb-3 border-b-2">
            Kelola alamat Anda untuk pengiriman barang.
          </p>
        </div>
        <div
          class="deskripsi-alamat flex flex-col justify-center items-start my-5 gap-2 w-full"
        >
          <div
            v-for="(item, index) in dataAlamat"
            :key="index"
            class="w-[100%]"
          >
            <div
              class="w-[100%] bg-slate-100 border-btnColor flex justify-between items-center p-5 gap-2"
            >
              <div class="flex flex-col">
                <div class="flex gap-1">
                  <h4 class="border-e-2 pe-3 border-red-600">
                    {{ item.name }}
                  </h4>
                  <span class="ps-3">{{ item.noTelp }}</span>
                </div>
                <p class="tex-slate-600">{{ item.detail }}</p>
                <p>
                  {{ item.kecamatan.name }} {{ item.kota.name }}
                  {{ item.provinsi.name }}
                  {{ item.kodePos.regency_id }}
                </p>
              </div>
              <div class="flex justify-center items-center flex-col gap-2">
                <div class="flex gap-3">
                  <button
                    class="bg-btnColor px-5 py-1 rounded-sm hover:bg-warning transition"
                    @click="editAlamat(item.id)"
                  >
                    Ubah <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    class="bg-error px-5 py-1 rounded-sm hover:bg-red-500 transition"
                    @click="deleteAlamat(item.id)"
                  >
                    Hapus <i class="fas fa-trash"></i>
                  </button>
                </div>
                <button
                  class="hover:text-green-600 transition"
                  @click="saveIdAlamat(item.id)"
                >
                  Atur Sebagai Alamat Utama
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-end items-end w-full">
            <button
              class="bg-red-600 text-white flex justify-center items-center gap-2 py-3 px-5 font-semibold rounded-sm hover:shadow-sm hover:bg-red-700 transition cursor-pointer"
              onclick="addAlamat.showModal()"
            >
              Tambah Alamat
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <!-- dialog modal create alamat  -->
        <dialog id="addAlamat" ref="dialogAddAlamat" class="modal">
          <div class="modal-box bg-white">
            <h3 class="font-bold text-2xl">Masukkan Alamat</h3>
            <div class="relative">
              <form @submit.prevent="addAlamat">
                <div class="flex items-center flex-col gap-4">
                  <div
                    class="mt-4 flex justify-between items-center w-full gap-4"
                  >
                    <input
                      id="userName"
                      v-model="alamat.name"
                      name="userName"
                      type="text"
                      placeholder="Nama Lengkap"
                      class="input input-bordered input-sm w-[50%] bg-white rounded-sm"
                      required
                    />
                    <input
                      id="noTelp"
                      v-model="alamat.noTelp"
                      name="noTelp"
                      type="tel"
                      placeholder="No. Telepon"
                      class="input input-bordered input-sm w-[50%] bg-white rounded-sm"
                      required
                    />
                  </div>

                  <div class="flex justify-between items-center w-full gap-4">
                    <select
                      id="provinsi"
                      v-model="alamat.provinsi"
                      name="provinsi"
                      required
                      class="bg-white w-[50%] p-2 border-2"
                      @change="getDataKota()"
                    >
                      <option value="" disabled>Provinsi</option>
                      <option
                        v-for="item in provinsi"
                        :key="item.id"
                        :value="item"
                      >
                        {{ item.name }}
                      </option>
                    </select>

                    <select
                      id="kota"
                      v-model="alamat.kota"
                      name="kota"
                      required
                      class="bg-white w-[50%] p-2 border-2"
                      @change="getKecamatan()"
                    >
                      <option value="" disabled>Kota / Kabupaten</option>
                      <option v-for="item in kota" :key="item.id" :value="item">
                        {{ item.name }}
                      </option>
                    </select>
                  </div>

                  <div class="flex justify-between items-center w-full gap-4">
                    <select
                      id="kecamatan"
                      v-model="alamat.kecamatan"
                      name="kecamatan"
                      required
                      class="bg-white w-[50%] p-2 border-2"
                    >
                      <option value="" disabled>Kecamatan</option>
                      <option
                        v-for="item in kecamatan"
                        :key="item.id"
                        :value="item"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                    <!-- DATA KODEPOS MASIH BELUM BENAR, SAYA MENGGUNAKAN ID DARI data kecamatan untuk dummy data -->
                    <select
                      id="kodepos"
                      v-model="alamat.kodePos"
                      name="kodepos"
                      required
                      class="bg-white w-[50%] p-2 border-2"
                    >
                      <option value="" disabled>Kode Pos</option>
                      <option
                        v-for="item in kecamatan"
                        :key="item.id"
                        :value="item"
                      >
                        {{ item.id }}
                      </option>
                    </select>
                  </div>
                  <div class="form-control w-full mb-14">
                    <textarea
                      v-model="alamat.detail"
                      name=""
                      placeholder="Nama Jalan, Gedung, No.Rumah"
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  class="text-white font-semibold hovert:text-white py-3 px-7 bg-btnColor hover:btn-warning rounded-md absolute right-0 bottom-0"
                >
                  Ok
                </button>
              </form>
              <form method="dialog">
                <button
                  class="text-white font-semibold hovert:text-white py-3 px-6 rounded-md hover:bg-slate-600 bg-slate-500 absolute right-20 bottom-0"
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        </dialog>

        <!-- dialog modal edit alamat  -->
        <dialog id="editAlamat" ref="dialogEditAlamat" class="modal">
          <div class="modal-box bg-white">
            <h3 class="font-bold text-2xl">Edit Alamat</h3>
            <div class="relative">
              <form @submit.prevent="submitEditAlamat">
                <div class="flex items-center flex-col gap-4">
                  <div
                    class="mt-4 flex justify-between items-center w-full gap-4"
                  >
                    <input
                      id="userName"
                      v-model="updateAlamat.name"
                      name="userName"
                      type="text"
                      class="input input-bordered input-sm w-[50%] bg-white rounded-sm"
                    />
                    <input
                      id="noTelp"
                      v-model="updateAlamat.noTelp"
                      name="noTelp"
                      type="tel"
                      placeholder="No. Telepon"
                      class="input input-bordered input-sm w-[50%] bg-white rounded-sm"
                    />
                  </div>

                  <div class="flex justify-between items-center w-full gap-4">
                    <select
                      id="provinsi"
                      v-model="updateAlamat.provinsi"
                      name="provinsi"
                      class="bg-white w-[50%] p-2 border-2"
                      @change="getUpdateKota()"
                    >
                      <option value="" disabled>Provinsi</option>
                      <option
                        v-for="item in provinsi"
                        :key="item.id"
                        :value="item"
                      >
                        {{ item.name }}
                      </option>
                    </select>

                    <select
                      id="kota"
                      v-model="updateAlamat.kota"
                      name="kota.Nama"
                      class="bg-white w-[50%] p-2 border-2"
                      @change="getUpdateKecamatan()"
                    >
                      <!-- <option value="showNameKota" disabled>
                        {{ showNameKota }}
                      </option> -->
                      <option v-for="item in kota" :key="item.id" :value="item">
                        {{ item.name }}
                      </option>
                    </select>
                  </div>

                  <div class="flex justify-between items-center w-full gap-4">
                    <select
                      id="kecamatan"
                      v-model="updateAlamat.kecamatan"
                      name="kecamatan"
                      class="bg-white w-[50%] p-2 border-2"
                    >
                      <option value="" disabled>Kecamatan</option>
                      <option
                        v-for="item in kecamatan"
                        :key="item.id"
                        :value="item"
                        class="text-slate-900"
                      >
                        {{ item.name }}
                      </option>
                    </select>

                    <select
                      id="kodepos"
                      v-model="updateAlamat.kodePos"
                      name="kodepos"
                      class="bg-white w-[50%] p-2 border-2"
                    >
                      <option value="" disabled>Kode Pos</option>
                      <option
                        v-for="item in kecamatan"
                        :key="item.id"
                        :value="item"
                      >
                        {{ item.id }}
                      </option>
                    </select>
                  </div>
                  <div class="form-control w-full mb-14">
                    <textarea
                      v-model="updateAlamat.detail"
                      name=""
                      placeholder="Nama Jalan, Gedung, No.Rumah"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <button
                  class="text-white font-semibold hovert:text-white py-3 px-7 bg-btnColor hover:btn-warning rounded-md absolute right-0 bottom-0"
                >
                  Simpan Edit
                </button>
              </form>
              <form method="dialog">
                <button
                  class="text-white font-semibold hovert:text-white py-3 px-6 rounded-md hover:bg-slate-600 bg-slate-500 absolute right-40 bottom-0"
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <!-- elemen vue-notification -->
      <notifications group="notifAlamat" class="mt-32 me-14" />
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      dataAlamat: null,
      provinsi: [],
      kota: [],
      kecamatan: [],
      kodePos: [],
      alamat: {
        name: '',
        noTelp: '',
        provinsi: '',
        kota: '',
        kecamatan: '',
        kodePos: '',
        detail: '',
      },
      updateAlamat: {
        name: '',
        noTelp: '',
        provinsi: '',
        kota: '',
        kecamatan: '',
        kodePos: '',
        detail: '',
      },
      showNameKota: '',
    }
  },
  computed: {},
  created() {
    this.getDataAlamat()
    this.getDataProvinsi()
  },
  methods: {
    async getDataProvinsi() {
      const response = await axios.get(
        'https://anggernuramin.github.io/api-wilayah-indonesia/api/provinces.json'
      )
      this.provinsi = response.data
    },
    async getDataKota() {
      const response = await axios.get(
        `https://anggernuramin.github.io/api-wilayah-indonesia/api/regencies/${this.alamat.provinsi.id}.json`
      )
      this.kota = response.data
    },
    async getKecamatan() {
      const response = await axios.get(
        `https://anggernuramin.github.io/api-wilayah-indonesia/api/districts/${this.alamat.kota.id}.json`
      )
      this.kecamatan = response.data
    },
    // Method untuk mengambil data alamat terbaru dan memperbarui array dataAlamat
    async getDataAlamat() {
      try {
        const { data, error } = await this.$supabase.from('address').select('*')
        if (data) {
          this.dataAlamat = data
          this.dataAlamat.map((item) => {
            return (
              (item.provinsi = JSON.parse(item.provinsi)),
              (item.kota = JSON.parse(item.kota)),
              (item.kecamatan = JSON.parse(item.kecamatan)),
              (item.kodePos = JSON.parse(item.kodePos))
            )
          })
        } else {
          this.dataAlamat = []
        }
        if (error) {
          throw error
        }
      } catch (error) {
        console.error('Error fetching data alamat:', error)
      }
    },
    async addAlamat() {
      try {
        const { data, error } = await this.$supabase
          .from('address')
          .insert([this.alamat])

        this.$notify({
          group: 'notifAlamat',
          type: 'success',
          text: 'Succes Add Alamat.',
        })
        this.dataAlamat = data
        this.getDataAlamat()
        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error.message)
      }

      this.closeModal()
    },
    async deleteAlamat(id) {
      if (process.client) {
        const idActive = localStorage.getItem('userAlamatId')
        if (Number(id) === Number(idActive)) {
          localStorage.removeItem('userAlamatId')
        }
      }
      try {
        const { data, error } = await this.$supabase
          .from('address')
          .delete()
          .eq('id', id)

        if (error) {
          throw error
        }

        if (data) {
          console.log(data)
        }
        this.$notify({
          group: 'notifAlamat',
          type: 'success',
          text: 'Succes delete Alamat.',
        })
        this.getDataAlamat()
      } catch (error) {
        console.log(error.message)
      }
    },
    async getUpdateKota() {
      const response = await axios.get(
        `https://anggernuramin.github.io/api-wilayah-indonesia/api/regencies/${this.updateAlamat.provinsi.id}.json`
      )
      this.kota = response.data
    },
    async getUpdateKecamatan() {
      const response = await axios.get(
        `https://anggernuramin.github.io/api-wilayah-indonesia/api/districts/${this.updateAlamat.kota.id}.json`
      )
      this.kecamatan = response.data
    },
    async editAlamat(id) {
      try {
        const { data, error } = await this.$supabase
          .from('address')
          .select()
          .eq('id', id)
          .single()
        this.$refs.dialogEditAlamat.showModal() // Menutup modal

        if (error) {
          throw error
        }

        // edit provinsi
        this.updateAlamat = data
        const updateProvinsi = JSON.parse(this.updateAlamat.provinsi)
        const responseProvinsi = await axios.get(
          `https://anggernuramin.github.io/api-wilayah-indonesia/api/province/${updateProvinsi.id}.json`
        )
        const dtProvinsi = await responseProvinsi.data
        this.updateAlamat.provinsi = dtProvinsi

        // edit kota
        const updateKota = JSON.parse(this.updateAlamat.kota)
        const responseKota = await axios.get(
          `https://anggernuramin.github.io/api-wilayah-indonesia/api/regency/${updateKota.id}.json`
        )
        const dtKota = await responseKota.data
        this.updateAlamat.kota = dtKota
        console.log('kota', dtKota.name)
        this.showNameKota = dtKota.name
        this.getUpdateKota()
        // edit kecamatan
        const updatekecamatan = JSON.parse(this.updateAlamat.kecamatan)
        const responsekecamatan = await axios.get(
          `https://anggernuramin.github.io/api-wilayah-indonesia/api/district/${updatekecamatan.id}.json`
        )

        this.getUpdateKecamatan()
        const dtkecamatan = await responsekecamatan.data
        this.updateAlamat.kecamatan = dtkecamatan
        console.log('kecamatan', this.kecamatan)

        // edit kode pos
        this.updateAlamat.kodePos = dtkecamatan

        console.log('data terakhir', this.updateAlamat)
        if (data) {
          console.log('edit', data)
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    async submitEditAlamat() {
      console.log('update Alamat', this.updateAlamat)
      try {
        const { error } = await this.$supabase
          .from('address')
          .update(this.updateAlamat)
          .eq('id', this.updateAlamat.id)
        if (error) {
          throw error
        }

        this.$refs.dialogEditAlamat.close() // Menutup modal
        this.getDataAlamat()
      } catch (error) {
        console.log(error.message)
      }
      this.updateAlamat = {
        name: '',
        noTelp: '',
        provinsi: '',
        kota: '',
        kecamatan: '',
        kodePos: '',
        detail: '',
      }
    },
    saveIdAlamat(id) {
      if (process.client) {
        localStorage.setItem('userAlamatId', id)
      }
      console.log(id)
    },
    closeModal() {
      this.$refs.dialogAddAlamat.close() // Menutup modal
      // Bersihkan input setelah menutup modal jika diperlukan
      this.alamat = {
        name: '',
        noTelp: '',
        provinsi: '',
        kota: '',
        kecamatan: '',
        kodePos: '',
        detail: '',
      }
    },
  },
}
</script>
<style></style>
