import Movie from '../ui/Movie/Movie';
import './display.css';
import { useState } from 'react'
import { Slider } from '@material-ui/core';

const Display = ({ movies }) => {
    const homeSearch = localStorage.getItem("homeSearch");
    const displaySearch = localStorage.getItem("displaySearch");
    const [val, setVal] = useState([1900, 2020]);

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
                        {(homeSearch || displaySearch) && movies
                            .slice(0,8)
                            .map((movie, index) =>
                                <Movie movie={movie} key={index} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Display
