import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ytpabbmqwknbmemnhfpw.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0cGFiYm1xd2tuYm1lbW5oZnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MTEwMjAsImV4cCI6MjAzMTI4NzAyMH0.VCjTyRzVW5o943h038IfHmykSvyEsDDIVK-rcmLj7gI`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
