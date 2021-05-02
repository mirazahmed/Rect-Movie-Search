 import React,{useState, useEffect} from 'react';
import { Button, Card} from 'react-bootstrap';
import NominationList from './NominationList';



export default function ListMovies(props) {

    const [nominatedMovies,setNominatedMovie] = useState([]);

    
    
    // useEffect(()=>{
        

   const addNewMovie = (movie)=>{

          setNominatedMovie(
            [...nominatedMovies, {Title: movie.Title, Year: movie.Year}],
            console.log(nominatedMovies)
            )                
                
    }
// },[nominatedMovies])

    const removeMovie = (index)=>{
        const copyOfNominatedMovies = [...nominatedMovies];
        copyOfNominatedMovies.splice(index,1)

        setNominatedMovie(copyOfNominatedMovies)
    }

    // const addNewMovie =(movie)=>{
    //     console.log(movie);
    //     setNominatedMovie([...nominatedMovie, {Title: movie.Title, Year: movie.Year}])
    //     console.log(nominatedMovie);
    // }

    const movies = props.movieList;
    
    const movieListHeading = (
        <div>
            <h3 id="movieListHeading">Results for "{props.movieTitle}"</h3>
        </div>
    )

    const allMovies = (movies.movieList === '' || movies.movieList === undefined ? ( <div> No movies found...</div>) :           
    ( 
        movies.movieList.map((movie,index)=>{
     
        return(
                                    
            <div>
                <ul>
                    <li key={movie.index}>
                        <span className="movieTitle">{movie.Title}</span> 
                        <span className="movieYear">({movie.Year})</span> 
                        {                            
                            nominatedMovies.some(nominatedMovie=> nominatedMovie.Title === movie.Title) ? 
                            (<Button variant="secondary" disabled>Nominate</Button>) :
                            (
                                <Button as="input" type="submit" value="Nominate" variant="outline-secondary" onClick={()=>addNewMovie(movie)}/>
                            )
                        }
                                                
                    </li>
                </ul>     
                
            </div>
            
        )
    })))

   return (  

        (props.movieTitle === '' ? (<div></div>):
                
        <div>
            <Card className="movieListCard">
                <Card.Body>
                    <div>{movieListHeading}</div>
                    <div className="movielist">{allMovies}</div>  
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <NominationList nominatedMovies={nominatedMovies} removeMovie={removeMovie}/>
                </Card.Body>
            </Card>

        </div>
        )         
    )
}




