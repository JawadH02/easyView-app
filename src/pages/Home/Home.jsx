import { useNavigate } from 'react-router-dom';
import Landing from '../../components/Landing/Landing'
import Nav from '../../components/Nav/Nav';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState([]);

    function onSearch() {
        navigate('/search-movies');
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
