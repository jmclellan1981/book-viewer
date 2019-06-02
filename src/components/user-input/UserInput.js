import React, { useEffect, useState } from  'react';
import './user-input.css';

const apiKey = 'AIzaSyCoEuqzpNzZ3rd8nJ6MUkf27ij_LS63De8';
const url = 'https://www.googleapis.com/books/v1/volumes';

const performSearch = (searchOption, setBookList) => {
    const searchText = document.getElementById('search-text').value;
    const query = searchOption == 'title' ? `?q=intitle:${searchText}&key=${apiKey}` : `?q=inauthor:${searchText}&key=${apiKey}`;
    fetch(url+query)
        .then((response) => (response.json()))
        .then((bookList) => {
            console.log(bookList);
            setBookList(bookList.items);
        });
    
}

const UserInput = ({ setBookList }) => {
    useEffect(() => {
        document.getElementById('title-option').checked = true;
    }, []);
    const [searchOption, setSearchOption] = useState('title');
    return (
        <div className = "user-input">
            <input id="search-text" type="text" />
            <div className = "search-type">
                <ul className = "search-type-options">
                    <li>
                        <input 
                            id="title-option" 
                            type="radio" 
                            name = "search-option" 
                            value="Title"
                            onClick={() => {setSearchOption('title')}} />
                                Title
                    </li>
                    <li>
                        <input
                            id="author-option"
                            type="radio"
                            name = "search-option"
                            value="Author"
                            onClick={() => {setSearchOption('author')}} />
                                Author
                    </li>
                </ul>
            </div>
            <button onClick={() => {performSearch(searchOption, setBookList)}}>Search</button>
        </div>
)};

export default UserInput;