import styled from "styled-components";

import Button from "./Button";
import { useUser } from "../features/authentication/useUser";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FileInput = styled.input`
  font-size: 1.4rem;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

function Form({ onSubmit, register, loading, isEditSession = null }) {
  const { activeUser } = useUser();

  return (
    <StyledForm onSubmit={onSubmit}>
      <Label htmlFor="product">Product name</Label>
      <Input
        type="text"
        id="product"
        {...register("product", {
          required: "This field is required",
        })}
      />

      <Label htmlFor="category">Category</Label>
      <Input
        type="text"
        id="category"
        {...register("category", {
          required: "This field is required",
        })}
      />

      <Label htmlFor="explanation">Explanation</Label>
      <Input
        type="text"
        id="explanation"
        {...register("explanation", {
          required: "This field is required",
        })}
      />

      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        {...register("title", {
          required: "This field is required",
        })}
      />

      <Label htmlFor="text">Text</Label>
      <Textarea
        id="text"
        {...register("text", {
          required: "This field is required",
        })}
      ></Textarea>

      <Label htmlFor="link">Link</Label>
      <Input
        type="text"
        id="link"
        {...register("link", {
          required: "This field is required",
        })}
      />

      <Label htmlFor="writer">Writer</Label>
      <Input
        type="text"
        id="writer"
        {...register("writer")}
        defaultValue={activeUser?.name}
        readOnly
      />

      <Label htmlFor="image">Image</Label>
      <FileInput
        id="image"
        accept="image/*"
        type="file"
        {...register("image", {
          required: isEditSession ? false : "This field is required",
        })}
      />
      {/* Hidden input for created_at */}
      <Input
        type="hidden"
        id="created_at"
        defaultValue={new Date().toISOString().toLocaleString("tr-TR")}
        {...register("created_at")}
      />

      <div>
        <Button disabled={loading}>
          {isEditSession ? "Edit the article" : "Add a new article"}
        </Button>
      </div>
    </StyledForm>
  );
}

export default Form;
