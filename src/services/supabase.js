import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qldurxrjgqerrheimlhb.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZHVyeHJqZ3FlcnJoZWltbGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTA1MDgsImV4cCI6MjAzNDAyNjUwOH0.WZgPC6kc4_Tg7zZcVWKSVAuxg1nXKyrenRASuk43LCs'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
