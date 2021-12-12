import { useNavigate } from 'react-router-dom';
import Landing from '../../components/Landing/Landing'
import Nav from '../../components/Nav/Nav';
import { useState } from 'react';
import React from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    function onSearch() {
        navigate('/search-movies');
        if (searchValue === "") {
            setSearchValue(null);
            localStorage.removeItem("homeSearch");
        } else {
            localStorage.setItem("homeSearch", searchValue)
        }

        localStorage.removeItem("displaySearch");
    }
    return (
        <>
            <Nav />
            <Landing onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
        </>
    )
}

export default Home
