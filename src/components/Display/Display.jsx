import Movie from '../ui/Movie/Movie';
import './display.css';
import { useState } from 'react'
import { Link, Slider } from '@material-ui/core';
import EmptyDisplay from '../../assets/undraw_searching.svg';

const Display = ({ movies }) => {
    const homeSearch = localStorage.getItem("homeSearch");
    const displaySearch = localStorage.getItem("displaySearch");
    const [val, setVal] = useState([1900, 2020]);
    console.log(movies);

    const handleChange = (e, newVal) => {
        setVal(newVal);
    }
    const marks = [
        {
            value: 1900,
            label: '1900'
        },
        {
            value: 2020,
            label: '2020'
        }
    ]
    return (
        <section id="display">
            <div className="display__container">
                <div className="row">
                    <div className="display__heading-section">
                        <h1 className="display__search--header">Search results for <span className='text--red'>"{homeSearch || displaySearch}"</span></h1>
                        <div className="display__price-filter--wrapper">
                            <h2 className="display__price-filter-title">
                                Date range: <span className="text--purple"> {val[0]} to {val[1]}</span>
                            </h2>
                            <Slider
                                getAriaLabel={() => 'Price'}
                                value={val}
                                onChange={handleChange}
                                marks={marks}
                                min={1900}
                                max={2020}
                            />
                        </div>
                    </div>
                    <div className="display-movies">
                        {(homeSearch || displaySearch) !== "null" && movies
                            .slice(0, 8)
                            .map((movie, index) =>
                                <Movie movie={movie} key={index} />
                            )
                        }
                        {(((homeSearch || displaySearch) === "null") || ((homeSearch || displaySearch) === "")) && (
                            <div className="cart__empty">
                                <img src={EmptyDisplay} alt="" className="cart__empty--img" />
                                <h1>Could not find any matches related to your search.</h1>
                                <h2>Please change the filter or reset it below</h2>
                                <Link to="/books">
                                    <button className="btn">Browse shows</button>
                                </Link>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Display
