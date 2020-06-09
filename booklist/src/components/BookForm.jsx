import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

export default function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book value"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      ></input>
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        required
      ></input>
      <input type="submit" value="add book"></input>
    </form>
  );
}
