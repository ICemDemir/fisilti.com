import supabase from "./supabase";

export async function getJobs() {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.log(error);
    throw new Error("Jobs can not be loaded");
  }

  return data;
}
