 import React,{useState} from 'react';
import { Button, Card,Row, Col} from 'react-bootstrap';
import NominationList from './NominationList';



export default function ListMovies(props) {

    const [nominatedMovies,setNominatedMovie] = useState([]);         

   const addNewMovie = (movie)=>{

          setNominatedMovie(
            [...nominatedMovies, {Title: movie.Title, Year: movie.Year}]            
        )                
                
    }

    const removeMovie = (index)=>{
        const copyOfNominatedMovies = [...nominatedMovies];
        copyOfNominatedMovies.splice(index,1)

        setNominatedMovie(copyOfNominatedMovies)
    }

  
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
            <div key={index}>
                                   
            <ul>
                <li>
                    <span className="movieTitle">{movie.Title}</span> 
                    <span className="movieYear">({movie.Year})</span> 
                    {                            
                        (nominatedMovies.find(nominatedMovie=> nominatedMovie.Title === movie.Title) !== undefined) ? 
                        
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
                
        
            <div className="container fluid">
                
                <Row>
                    <Col>
                        <Card className="movieListCard">
                            <Card.Body>
                                <div>{movieListHeading}</div>
                                <div>{allMovies}</div>  
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="nominationListCard">
                            <Card.Body>
                                <NominationList nominatedMovies={nominatedMovies} removeMovie={removeMovie}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>                                                
                    
        )         
    )
}




