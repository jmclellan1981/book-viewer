import React, { useState } from 'react';
import UserInput from './components/user-input/UserInput';
import BookEntry from './components/book-entry/BookEntry';

const App = () => {
    const [bookList, setBookList] = useState([]);
    const bookDisplay = bookList.map(
        (book) => (
            <BookEntry book = {book} />
        )
    );
    return (
        <div>
        <UserInput setBookList={setBookList}/>
        {bookDisplay}
        </div>
)};

export default App;