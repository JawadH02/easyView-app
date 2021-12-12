import React from 'react'
import Display from '../../components/Display/Display'
import Movies from '../../components/Movies/Movies'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
    const searchInput = localStorage.getItem("homeSearch");
    const [searchValue, setSearchValue] = useState(localStorage.getItem("displaySearch"));
    const [movies, setMovies] = useState([]);
    console.log(searchInput);

    function handleSearch() {
        // searchValue === [] ? setSearchValue(null) : renderMovies(searchValue)
        if (searchValue === []) {
            setSearchValue("");
        } else {
            renderMovies(searchValue)
        }
        localStorage.removeItem("homeSearch")
        localStorage.setItem("displaySearch", searchValue);
    }

    async function renderMovies(searchValue) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a68a1e716dc10887f9e01a8f4e4ee2b3&query=${searchInput || (searchValue ? searchValue : localStorage.getItem("displaySearch"))}`);

        setMovies(data.results);
    }

    useEffect(() => {
        renderMovies();
    }, [])
    return (
        <>
            <Movies
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearch={handleSearch} />
            <Display movies={movies} />
        </>
    )
}

export default Search
