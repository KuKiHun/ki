
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Movie from './components/Movies';

function App(){

    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(true);


    const getData = async() => {
        await axios.get('https://yts.mx/api/v2/list_movies.json')
            .then(result => {
                // console.log(result);
                console.log(result.data.data.movies);

                const temp = result.data.data.movies;

                setMovies([...temp])
                setIsLoading(false);
            })
            .catch( err => console.log('에러:', err));
    }

    useEffect(()=>{
        getData();
    },[]);

    return(
        <div className="App">
            {isLoading? '로딩중.....' :
            
                movies.map((movie)=>{
                    return <Movie id={movie.id} 
                                 title={movie.title} 
                                 year={movie.year} 
                                 poster={movie.medium_cover_image} 
                                 summary={movie.summary}
                                 genres={movie.genres}/>
                })
            }
        </div>
    );
}

export default App;