<!-- pages/products/_id.vue -->
<template>
  <section id="checkout-product" class="bg-secondary">
    <div class="container w-[80%] pt-[120px]">
      <!-- Tampilkan konten produk di sini -->

      <div class="flex flex-col w-full mt-5">
        <div class="stripped"></div>
        <div class="font-light text-slate-950 bg-white p-5 place-items-center">
          <h2 class="text-3xl mb-2 font-normal">Chekout Barang</h2>
          <ul class="w-full">
            <div
              class="flex items-center justify-start gap-2 text-red-600 mb-1 text-xl"
            >
              <i class="fas fa-location-arrow"></i>
              <h3>Alamat Pengiriman</h3>
            </div>
            <div class="w-full flex justify-between items-center">
              <div class="flex justify-center items-center gap-3">
                <li>Nama</li>
                <li>(+62)No hp</li>
                <li>Nama</li>
                <li>(Kode Pos)</li>
                <li>Kabupaten -</li>
                <li>Desa</li>
                <li>Provinsi</li>
                <li>ID KREDENSIAL</li>
                <li>Provinsi</li>
                <li class="h-2 w-2 rounded-full bg-green-600"></li>
              </div>
              <nuxt-link to="/">ubah</nuxt-link>
            </div>
          </ul>
        </div>
      </div>

      <div class="mt-5 overflow-x-auto text-slate-900">
        <table class="rounded-none table bg-white text-slate-900">
          <!-- head -->
          <thead>
            <tr>
              <th>Produk Dipesan</th>
              <th>Harga Satuan</th>
              <th>Jumlah</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in dataProductCheckout" :key="product.id">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="product.image" :alt="product.title" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ product.title }}</div>
                    <div class="text-sm opacity-50">
                      {{ product.category }}
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ product.price }}</td>
              <td>{{ product.deskripsiPemesanan.quantity }}</td>
              <td>
                {{
                  (
                    product.deskripsiPemesanan.quantity * product.price
                  ).toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })
                }}
              </td>
            </tr>
            <tr class="bg-yellow-100 py-3">
              <td>Opsi Pengiriman</td>
              <td>
                <p>Akan diterima pada tanggal 2 - 7 Okt</p>
              </td>
              <td>Harga pengiriman 3.0000</td>
              <td><nuxt-link to="/">ubah</nuxt-link></td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="bg-yellow-100 py-3 text-slate-900">
              <td></td>
              <td></td>
              <td>Total Pesanan({{ dataProductCheckout.length }} produk)</td>
              <td class="text-xl text-red-600">Total</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="flex flex-col bg-white my-5 gap-4">
        <div
          class="flex items-center justify-start gap-2 border-b-2 pb-3 px-5 py-5"
        >
          <h3 class="inline-block w-[20%]">Metode Pembayaran</h3>
          <div class="flex gap-2">
            <button class="btn btn-warning">Cod</button>
          </div>
        </div>
        <div class="flex items-center justify-start gap-2 border-b-2 pb-3 px-5">
          <h3 class="inline-block w-[20%]">COD</h3>
          <div class="flex gap-2">
            <p>Cash On Delivery</p>
          </div>
        </div>
        <div class="flex items-end justify-end gap-2 border-b-2 pb-3 px-5">
          <ul
            class="list-spesifikasi-product grid grid-cols-[250px_minmax(80px,_1fr)] gap-2"
          >
            <li>Subtotal untuk Produk</li>
            <h4>Rp95.000</h4>
            <li>Total Ongkos Kirim:</li>
            <h4>Rp97.999</h4>
            <li>Biaya Penanganan</li>
            <h4>Rp19.300</h4>
            <li>Total Pembayaran:</li>
            <h4>Rp212.299</h4>
          </ul>
        </div>
        <div class="flex items-end justify-end px-5 mb-5">
          <button class="btn btn-warning">Buat Pesanan</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    dataProductCheckout() {
      return this.$store.state.index.listDataCheckout
    },
  },
}
</script>
<style>
.stripped {
  height: 3px;
  width: 100%;
  background-position-x: -30px;
  background-size: 116px 3px;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
}
.list-spesifikasi-product li {
  color: rgba(0, 0, 0, 0.7);
}
</style>
