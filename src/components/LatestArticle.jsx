import Title from "./Title";

function LatestArticle({ latestArticle }) {
  return (
    <div>
      <Title article={latestArticle} />

      <div>{new Date(latestArticle.created_at).toLocaleDateString()} </div>
    </div>
  );
}

export default LatestArticle;

// 2024-05-29T21:44:07
