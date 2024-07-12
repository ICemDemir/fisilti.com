import { useNavigate } from "react-router-dom";

import AuthorBox from "./AuthorBox";
import Spinner from "./Spinner";

function AuthorTag({ author, type }) {
  const navigate = useNavigate();

  function handleNavigation(id) {
    window.scrollTo(0, 0);
    navigate(`../author/${id}`);
  }

  if (!author) {
    return <Spinner />;
  }

  return (
    <AuthorBox type={type}>
      <img src={author.image} onClick={() => handleNavigation(author.id)} />
      <div>
        <p className="name" onClick={() => handleNavigation(author.id)}>
          {author.name}
        </p>
        <p>{author.explanation} </p>
      </div>
    </AuthorBox>
  );
}

export default AuthorTag;
