
//This component renders a movie title search form and
//Save the search string used in a state called movieTitle
//Call OMMDB API with movieTitle 
//Save the response object of API call to movieList state
//Render movieList and movieTitle as props to ListMovies component


import React,{useState, useEffect} from 'react';
import{Form, Col} from 'react-bootstrap';
import ListMovies from './ListMovies';
import env from 'react-dotenv';
import axios from 'axios';


export default function MovieSearchForm() {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieList, setMovieList] = useState([]);

    

    useEffect(()=> {
        axios.get(`https://www.omdbapi.com/?s=%22${movieTitle}%22&apikey=${env.MOVIE_SEARCH_API_KEY}`)
        
        .then(res=>{
            let newMovie= res.data.Search;
            setMovieList({
                movieList: newMovie
            });
                        
        })
        .catch(error=>{
            console.log(error);
        })
    
        
    },[movieTitle])

         
    return (
        <>
        <div className="container fluid">
            <Form>
                <Form.Row className="justify-content-left">
                    <Col lg={12}>
                        <Form.Label className="title">Search Movie Title</Form.Label>                            
                            <Form.Control type="text" required value={movieTitle} onChange={(e)=> setMovieTitle(e.target.value)} id="add" />
                    </Col>                
                </Form.Row>                                                     
            </Form>        
        </div>
        
        <ListMovies movieList={movieList} movieTitle={movieTitle} />
        </>
    
    )
}
