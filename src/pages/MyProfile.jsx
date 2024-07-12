import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useArticle } from "../contexts/ArticleProvider";
import Review from "../components/Review";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArticle } from "../services/apiUserArticles";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;

const Box = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;

  & img {
    height: 70vh;
    padding: 5rem 0;
  }

  & > h3 {
    margin-bottom: 2rem;
    border-bottom: 1px solid #000;
    align-self: stretch;
    text-align: center;
  }

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
`;

function MyProfile() {
  // Get the active user
  const { activeUser } = useUser();

  // Get the articles
  const { data } = useArticle();

  // Extract the articles that activeUser has written
  const articles = data?.filter(
    (article) => article.writer === activeUser?.name
  );

  // Add the delete function
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      toast.success("Article successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["user_articles"],
      });
    },
  });

  if (isDeleting) return <Spinner />;

  return (
    <>
      <Header />
      <Container>
        <Box>
          <img src={activeUser?.image} />
          <h3>My Articles</h3>
          <ReviewContainer>
            {articles.map((item) => (
              <Review
                article={item}
                key={item.id}
                onClick={() => mutate(item.id)}
                disabled={isDeleting}
              />
            ))}
          </ReviewContainer>
          <NavLink to="/newArticle">
            <Button>Add a new article</Button>
          </NavLink>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default MyProfile;
