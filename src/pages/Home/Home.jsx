import { useNavigate } from 'react-router-dom';
import Landing from '../../components/Landing/Landing'
import Nav from '../../components/Nav/Nav';
import { useState } from 'react';
import React from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState(null);

    function onSearch() {
        navigate('/search-movies');
        localStorage.removeItem("displaySearch");
        localStorage.setItem("homeSearch", searchValue)
    }
    return (
        <>
            <Nav />
            <Landing onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </>
    )
}

export default Home
