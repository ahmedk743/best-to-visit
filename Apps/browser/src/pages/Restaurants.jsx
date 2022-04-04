import React from "react";
import { books } from "../assets/restaurant.js";
import "bootstrap/dist/css/bootstrap.css";

const Restaurants = ({ img, title, adress, web }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  function BookList() {
    return (
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </section>
    );
  }

  const Book = (props) => {
    const { img, title, adress, web } = props.book;
    return (
      <article className="book">
        <img src={img} alt="" width={350} height={250} />
        <h2>{title}</h2>
        <h4>{adress}</h4>
        <h4>{web}</h4>
      </article>
    );
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <BookList />
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{adress}</h4>
      <h4>{web}</h4>
    </article>
  );
};

export default Restaurants;
