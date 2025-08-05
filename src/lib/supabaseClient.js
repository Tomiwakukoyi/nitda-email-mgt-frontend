import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.REACT_APP_SUPABASE_URL
const supabaseToken = process.env.REACT_APP_SUPABASE_TOKEN

const supabase = createClient(
    supabaseURL,supabaseToken
);
export default supabase;