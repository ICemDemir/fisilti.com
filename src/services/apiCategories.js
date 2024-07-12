import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.log(error);
    throw new Error("Categories can not be loaded");
  }

  return data;
}
