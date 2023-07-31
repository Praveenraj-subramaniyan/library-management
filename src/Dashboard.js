import React, { useState } from "react";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

function AdminDashboard() {
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "Book 1",
      author: "Author1",
      totalBooks: 10,
      available: 5,
    },
    {
      id: "2",
      title: "Book 2",
      author: "Author2",
      totalBooks: 8,
      available: 3,
    },
    {
      id: "3",
      title: "Book 3",
      author: "Author3",
      totalBooks: 10,
      available: 5,
    },
    {
      id: "4",
      title: "Book 4",
      author: "Author2",
      totalBooks: 7,
      available: 6,
    },
    {
      id: "5",
      title: "Book 5",
      author: "Author1",
      totalBooks: 9,
      available: 3,
    },
    {
      id: "6",
      title: "Book 6",
      author: "Author2",
      totalBooks: 2,
      available: 1,
    },
  ]);
  const handleAddBook = (newBookValues) => {
    const newBook = {
      id: +books[books.length - 1].id + 1,
      available: newBookValues.totalBooks,
      ...newBookValues,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  const handleEditBook = (newBookValues) => {
    const newBook = {
      id: +books[books.length - 1].id + 1,
      available: newBookValues.totalBooks,
      ...newBookValues,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  return (
    <div>
      <h2 className="text-center text-white py-2 bg-primary">
        Library Management
      </h2>
      <div className="d-flex justify-content-end me-5 pe-2">
        <button
          className="btn btn-primary my-2  me-5"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#addBook"
        >
          Add Book
        </button>
      </div>
      <div className="row ms-1 ">
        <h4 className="col-1 ps-5">Id</h4>
        <h4 className="col-1 ps-0">Title</h4>
        <h4 className="col-1 ps-0">Author</h4>
        <h4 className="col-1">Available</h4>
        <h4 className="col-2 ps-4">Total Books</h4>
      </div>
      {books.map((book) => (
        <div className="row">
          <div className="row ms-1">
            <p className="col-1 ps-5">{book.id}</p>
            <p className="col-1 ps-1">{book.title}</p>
            <p className="col-1 ps-1">{book.author}</p>
            <p className="col-1 ps-5">{book.available}</p>
            <p className="col-1 ps-5 ms-4 pe-0 me-0">{book.totalBooks}</p>
            <button
              className="col-1 btn btn-link text-decoration-none pt-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#editbook"
            >
              Edit
            </button>
            <button className="col-1 btn btn-link text-decoration-none  pt-0">
              Delete
            </button>
            <button className="col-1 btn btn-link text-decoration-none  pt-0">
              Borrow
            </button>
            <button className="col-1 btn btn-link text-decoration-none  pt-0">
              Return
            </button>
          </div>
        </div>
      ))}
      <AddBook onSubmit={handleAddBook} />
      <EditBook onSubmit={handleEditBook} />
    </div>
  );
}

export default AdminDashboard;
