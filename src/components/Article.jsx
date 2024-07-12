import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { useArticle } from "../contexts/ArticleProvider";
import { useWriter } from "../contexts/WriterProvider";

import Header from "./Header";
import AuthorTag from "./AuthorTag";
import Footer from "./Footer";
import Button from "./Button";
import EditArticle from "./EditArticle";
import { useUser } from "../features/authentication/useUser";

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem;
`;
const ArticleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;

  & h2 {
    align-self: center;
  }

  .img {
    margin: 5rem;
    width: 40rem;
    align-self: center;
  }

  .link {
    color: var(--color-indigo-700);
    cursor: pointer;
  }

  .text {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 2rem;
  }

  .date {
    color: var(--color-grey-400);
    margin-bottom: 2rem;
  }
`;

function Article() {
  const { id } = useParams();
  const { data } = useArticle();

  const { writers } = useWriter();
  const the_article = data.find((art) => art.id === parseInt(id));
  const the_author = writers?.find((au) => au.name === the_article.writer);

  const { activeUser } = useUser();

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <>
      <Header />
      <ArticleContainer>
        <ArticleBox>
          <h2>{the_article.title}</h2>
          <img className="img" src={the_article.image} alt="Product image" />
          <p className="date">
            {new Date(the_article.created_at).toLocaleDateString()}{" "}
          </p>
          <p className="text">{the_article.text}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={the_article.link}
            className="link"
          >
            {the_article.link}
          </a>
          {(activeUser?.role === "admin" || activeUser?.role === "writer") && (
            <div>
              <Button type="delete" onClick={() => handleClick()}>
                {showForm === false ? "Edit" : "Close"}
              </Button>
            </div>
          )}

          <AuthorTag author={the_author} type="tag" />
        </ArticleBox>
      </ArticleContainer>
      {showForm && <EditArticle articleToEdit={the_article} />}
      <Footer />
    </>
  );
}

export default Article;
