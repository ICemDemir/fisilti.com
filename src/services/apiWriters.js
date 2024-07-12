import supabase from "./supabase";

export async function getWriter() {
  const { data, error } = await supabase.from("writers").select("*");

  if (error) {
    console.log(error);
    throw new Error("Writers can not be loaded");
  }

  return data;
}
