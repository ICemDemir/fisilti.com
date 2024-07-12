import supabase from "./supabase";

export async function getDeals() {
  const { data, error } = await supabase.from("daily_deals").select("*");

  if (error) {
    console.log(error);
    throw new Error("Deals can not be loaded");
  }

  return data;
}
