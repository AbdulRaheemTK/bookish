import { useState } from "react";
import "./BookTable.css";

const BookTable = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleViewPdf = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="table-container">
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Published Date</th>
            <th>View PDF</th>
          </tr>
        </thead>
        <tbody className="scrollable-area">
          {books?.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>{book.publishedDate}</td>
              <td>
                <button
                  className="view-pdf-btn"
                  onClick={() => handleViewPdf(book)}
                >
                  View PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && (
        <div className="pdf-viewer">
          <iframe
            title={selectedBook.book.filename}
            src={`http://localhost:5000/api/book/readBook/${selectedBook.book.filename}`}
            width="100%"
            height="500"
          ></iframe>
          <button className="close-btn" onClick={() => setSelectedBook(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BookTable;
