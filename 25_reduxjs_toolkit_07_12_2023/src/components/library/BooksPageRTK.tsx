import React from "react";
import "./BooksPage.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/storeRTK";
import { deleteBook } from "../../redux/book/bookSlice";
import EditFormRTK from "./EditFormRTK";

const BooksPageRTK: React.FC = (): JSX.Element => {
  const books = useSelector((state: RootState) => state.library.books);

  const dispatch = useDispatch();

  return (
    <>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Books in our library:</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          <ul className="list">
            {books.map(({ author, isbn, title, year }) => (
              <li className="listItem" key={isbn}>
                <div className="bookInfo">
                  {isbn}. "{title}" - author: {author}, {year}
                  <button
                    className="btn btn-danger"
                    style={{ margin: '0 0 0 25px'}}
                    onClick={() => dispatch(deleteBook(isbn))}
                  >
                    Delete Book
                  </button>
                  <EditFormRTK isbn={isbn} />
                </div>
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </>
  );
};

export default BooksPageRTK;