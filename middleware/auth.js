// membuat auth middleware untuk mencegah user yang belum login tidak bisa mengakses url secara langsung ke keranjang, checkout
import supabase from '~/plugins/supabase'
async function managementUrl(app, route, redirect) {
  const {
    data: { user },
  } = await supabase.auth.user()

  const loginRoute = '/login'

  //   route yang akan diprotect(diberi keamanana agar user tidak langsung bisa akases)
  const protectRoute = [
    '/keranjang',
    '/checkout',
    '/profile',
    '/alamat',
    '/wishlist',
  ]
  // Periksa apakah pengguna belum login dan apakah mereka mencoba mengakses halaman yang dilindungi
  if (!user && protectRoute.includes(route.path)) {
    return redirect(loginRoute)
  }
}

export default managementUrl
