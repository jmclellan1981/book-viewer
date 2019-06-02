import React from 'react';
import './book-entry.css';

const BookEntry = ({ book }) => {

    return (
        <div className = "book-entry">
            <div className = "image-thumbnail">
                <img src={book.volumeInfo.imageLinks.thumbnail} />
            </div>
            <div className = "book-details">
                <ul className = "book-details-list">
                    <li>Author: {book.volumeInfo.authors[0]}</li>
                    <li>Title: {book.volumeInfo.title}</li>
                    <li>{book.volumeInfo.description}</li>
                </ul>
            </div>
        </div>
    )
}

export default BookEntry;