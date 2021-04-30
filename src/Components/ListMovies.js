import React,{useEffect, useState} from 'react';
import {ListGroup, Button, Jumbotron, Container} from 'react-bootstrap';



export default function ListMovies(props) {

    // const [movieList, setMovieList]=useState('');
 
    // const movie = movieList.map(()=>{

    // })

    const movies = props.movieList;
    // console.log(movies.movieList);
    console.log(props);

    const movieListHeading = (
        <div>
            <h3>Results for "{props.movieTitle}"</h3>
        </div>
    )
    const allMovies = (movies.movieList === '' || movies.movieList === undefined ? ( <div></div>) : 
            
    ( 
     movies.movieList.map((movie)=>{
     
     return(
                                
         <div key={movie.imdbID}>
{/*              
             <ListGroup variant="flush">
                 <ListGroup.Item> */}
            <ul>
                <li>
                    <span className="movieTitle">{movie.Title}</span> 
                    <span className="movieYear">({movie.Year})</span> 
                    <Button variant="outline-secondary">Nominate</Button>{' '}
                    {/* <Button vairant="outline-secondary">Nominate</Button>{' '} */}
                 {/* </ListGroup.Item>
             </ListGroup> */}
                </li>
            </ul>     
             
         </div>
         
     )
     })))

   return (  

        (props.movieTitle === '' ? (<div></div>):
                
        <div>
            <Jumbotron className="movieListjumbo" fluid >
                <Container>
                    <div>{movieListHeading}</div>
                    <div className="movielist">{allMovies}</div>                                   
                </Container>
            </Jumbotron>

        </div>
        )
        

   
    )
}


// 
// {console.log(movies.movieList[4])}