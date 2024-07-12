import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ArticlesList = styled.div`
  position: absolute;
  top: 100%; // Align right below the search bar
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px; // Adjust based on layout
  margin: 0 auto; // Center the list
`;

const ArticleItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;

function ArticleList({ articles }) {
  const navigate = useNavigate();

  function handleNavigate(id) {
    navigate(`/makale/${id}`);
  }

  return (
    <ArticlesList>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          onClick={() => handleNavigate(article.id)}
        >
          <p>{article.product}</p>
        </ArticleItem>
      ))}
    </ArticlesList>
  );
}

export default ArticleList;
