import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { editArticle } from "../services/apiUserArticles";

import Form from "./Form";

const EditContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EditBox = styled.div`
  width: 60%;
  padding-bottom: 5rem;
`;

function EditArticle({ articleToEdit }) {
  const isEditSession = Boolean(articleToEdit);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...articleToEdit },
  });

  const queryClient = useQueryClient();

  const { mutate, isLoading: isEditing } = useMutation({
    mutationFn: editArticle,
    onSuccess: (data) => {
      toast.success("The article has been successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user_articles"] });
      reset();
      console.log("Article update successful:", data);
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("Article update error:", err);
    },
  });

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    mutate({ articleToEdit: data, image: image });
    console.log("Form submitted data:", data);
  }

  return (
    <EditContainer>
      <EditBox>
        <Form
          register={register}
          isEditSession={isEditSession}
          onSubmit={handleSubmit(onSubmit)}
          loading={isEditing}
        />
      </EditBox>
    </EditContainer>
  );
}

export default EditArticle;
