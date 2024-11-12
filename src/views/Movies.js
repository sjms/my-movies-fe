import React, {useEffect, useState} from 'react'
import {MoviesService} from "../api/services/MoviesService.js";

export function Movies() {
    // return <h1>Movies Page</h1>

    useEffect(() => {
        MoviesService.getMovies().then(({data}) => {
            setMovies(data.results)
        })
    }, []);

    const [movies, setMovies] = useState([]);
    return (
        <section>
            <h1>Filmes Populares</h1>
            <ul>
                {
                    movies.map((movie) => <li>{movie.title + ' (' + movie.release_date + ')'}</li>)
                }
            </ul>
            <ul>

            </ul>
        </section>
    );
}
