import styled from "styled-components";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addArticle } from "../services/apiUserArticles";

import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NewArticleContainer = styled.div`
  width: 100vw;
  background-color: var(--color-grey-200);
  display: flex;
  justify-content: center;
`;

const NewArticleBox = styled.div`
  width: 60vw;
  background-color: #fff;
  padding: 2rem 5rem;
  margin: 5rem;
`;

function NewArticle() {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: addArticle,
    onSuccess: () => {
      toast.success("A new article has been just added");
      queryClient.invalidateQueries({ queryKey: ["user_articles"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
    console.log(data);
  }

  return (
    <>
      <Header />
      <NewArticleContainer>
        <NewArticleBox>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            loading={isAdding}
          />
        </NewArticleBox>
      </NewArticleContainer>
      <Footer />
    </>
  );
}

export default NewArticle;
