import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL
const supabaseKey = process.env.NEXT_PRIVATE_SUPABASE_SERVICE_ROLE
const supabase = createClient(supabaseUrl || '', supabaseKey || '')
export default supabase