
//This component takes props from MovieSearchForm and-
//List all the movies with title, year and Nominate button
//Save the movies selected for nominations in nominatedMovies state
//Create a function to remove a movie from the NominationList
//Render nominatedMovies and removeMovie as props to NominationList component

import React,{useState} from 'react';
import { Button, Card,Row,Col} from 'react-bootstrap';
import NominationList from './NominationList';

let Spinner = require('react-spinkit');

export default function ListMovies(props) {

    const [nominatedMovies,setNominatedMovie] = useState([]);         

    const addNewMovie = (movie)=>{

        setNominatedMovie(
            [...nominatedMovies, {Title: movie.Title, Year: movie.Year, movieID: movie.imdbID}]            
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
            <h3>Results for "{props.movieTitle}"</h3>
        
            {props.movieTitle==='' ? 
            <div>
                <span>Waiting for user to search for a movie </span> 
                <Spinner name="three-bounce" className ="waitingforTitle" fadeIn='quarter' color="purple"/>            
            </div> : <div></div>}

        </div>
        
    )

    const allMovies = ((movies.movieList === '' || movies.movieList === undefined) ? 
        
        <div></div> : ( 
        
        movies.movieList.map((movie,index)=>{
            
        return(
            <div key={index}>                                   
                <ul>
                    <li>
                        <span className="movieTitle">{movie.Title}</span> 
                        <span className="movieYear">({movie.Year})</span> 
                        {                            
                            (nominatedMovies.find(nominatedMovie=> nominatedMovie.movieID === movie.imdbID ) !== undefined) ? 
                            
                            <Button variant="secondary" disabled>Nominate</Button> :

                            <Button as="input" type="submit" value="Nominate" variant="outline-secondary" onClick={()=>addNewMovie(movie)}/>
                            
                        }
                    
                    </li>                
                </ul> 
            </div>                   
        )
    })))

    return(  
                 
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
}




