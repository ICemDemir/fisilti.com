import styled from "styled-components";

import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useArticle } from "../contexts/ArticleProvider";

import SearchList from "./SearchList";

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  max-width: 600px; // Adjust based on layout
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  &:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    padding: 4px 6px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  background-color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

function SearchBar() {
  const [input, setInput] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { data } = useArticle();

  // Fetch data according to the input

  useEffect(() => {
    if (input) {
      const results = data.filter(
        (article) =>
          article.title.toLowerCase().includes(input.toLowerCase()) ||
          article.category.toLowerCase().includes(input.toLowerCase()) ||
          article.product.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredArticles(results.slice(0, 5));
    } else {
      setFilteredArticles(data);
    }
  }, [input, data]);

  function handleChange(value) {
    setInput(value);
  }

  // Click outside to close the SearchList
  // with this, search bar doesn't work, and SearchList closes. When I delete this, search bar works.
  // let searchRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!searchRef.current.contains(e.target)) {
  //       setInput("");
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <FormContainer>
      <Form>
        <Input
          placeholder="Ürün, kategori ya da marka arayın"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button>
          <HiOutlineSearch />
        </Button>
      </Form>
      {input && <SearchList articles={filteredArticles} />}
    </FormContainer>
  );
}

export default SearchBar;
