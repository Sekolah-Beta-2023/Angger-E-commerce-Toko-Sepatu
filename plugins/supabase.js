// plugins/supabase.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vyvgolthvklsxmnqpyef.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dmdvbHRodmtsc3htbnFweWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMTkyMzUsImV4cCI6MjAxMTU5NTIzNX0.fKh98yU6qcNvnHCzc7p_xc5rdEWCyXww7jbW30gx2BQ'

const supabase = createClient(supabaseUrl, supabaseKey)

export default ({ app }, inject) => {
  inject('supabase', supabase)
}
