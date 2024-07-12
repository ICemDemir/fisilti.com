import supabase, { supabaseUrl } from "./supabase";

import { PAGE_SIZE } from "../utilities/constants";

// This api fetching is for recieving user_articles data for general purpose
export async function getArticles() {
  const { data, error } = await supabase.from("user_articles").select("*");

  if (error) {
    console.log(error);
    throw new Error("Articles can not be loaded");
  }

  return data;
}

// This api fetching is for recieving user_articles data for pagination
export async function getArticlesForPagination({ page }) {
  let query = supabase.from("user_articles").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Articlesss could not be loaded");
  }

  return { data, count };
}

export async function addArticle(newArticle) {
  const imageName = `${Math.random()}-${newArticle.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/article_images/${imageName}`;
  const { data, error } = await supabase
    .from("user_articles")
    .insert([{ ...newArticle, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Article can not be added");
  }

  // 2. Upload Image
  const { error: storageError } = await supabase.storage
    .from("article_images")
    .upload(imageName, newArticle.image);

  // 3. Delete article if storageError
  if (storageError) {
    await supabase.from("user_articles").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Image can not be added");
  }

  return data;
}

export async function editArticle({ articleToEdit, image }) {
  // const imageName = `${Math.random()}-${articleToEdit.image.name}`.replaceAll(
  //   "/",
  //   ""
  // );

  // const imagePath = `${supabaseUrl}/storage/v1/object/public/article_images/${imageName}`;

  // console.log(imagePath);

  // const { data, error } = await supabase
  //   .from("user_articles")
  //   .update({ title: articleToEdit.title })
  //   .eq("id", articleToEdit.id)
  //   .select("*");

  // if (error) {
  //   console.log(error);
  //   throw new Error("Article can not be edited");
  // }

  // return data;

  let imagePath = articleToEdit.image;

  // Check if the image needs to be uploaded
  if (image instanceof File) {
    const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");

    const { data: imageData, error: imageError } = await supabase.storage
      .from("article_images")
      .upload(imageName, image);

    if (imageError) {
      console.error("Error uploading image:", imageError);
      throw new Error("Image upload failed");
    }

    imagePath = `${supabaseUrl}/storage/v1/object/public/article_images/${imageData.path}`;
  }

  // Update the article with the new data and image path
  const { data, error } = await supabase
    .from("user_articles")
    .update({ ...articleToEdit, image: imagePath })
    .eq("id", articleToEdit.id)
    .select("*"); // Explicitly select all columns

  if (error) {
    console.error("Error updating article:", error);
    throw new Error("Article cannot be edited");
  }

  console.log("Data received from update:", data);
  return data;
}

export async function deleteArticle(id) {
  const { data, error } = await supabase
    .from("user_articles")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Article can not be deleted");
  }

  return data;
}
