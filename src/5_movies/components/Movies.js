// components / Movies.js



function Movie(props){

    const airbnb = props.genres.map((genres, idx)=>{
        return(
            <span>{props.genres.join(', ')}</span>
        )
    });

    return(
        <div>
            <div>
                <h3>{props.title}</h3>
                <h6>{props.year}</h6> 
                <h4>{airbnb}</h4> 
                {/* <h4>{props.genres.join(', ')}</h4> */}
            </div>
            <img src={props.poster} title={props.title} alt={props.title} />
            <p>{props.summary.slice(0,50)} ... </p>

        </div>
    );

}

export default Movie;