import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rvaytmwlfkfkuivkyqnv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2YXl0bXdsZmtma3Vpdmt5cW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MTkxNzEsImV4cCI6MjAwNjQ5NTE3MX0.hEi8e_hghAwJrDHFvZhstJoTPkiEur9yt7_S9tNSjKw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
