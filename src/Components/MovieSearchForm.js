import React,{useState, useEffect} from 'react';
import{Form, Col} from 'react-bootstrap';
import ListMovies from './ListMovies';
import axios from 'axios';


export default function MovieSearchForm() {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieList, setMovieList] = useState([]);

    

    useEffect(()=> {
        axios.get(`http://www.omdbapi.com/?s=%22${movieTitle}%22&apikey=a0bacdc6`)
        
        .then(res=>{
            let newMovie= res.data.Search;
            // console.log(newMovie);
            setMovieList({
                movieList: newMovie
            });
                        
        })
        .catch(error=>{
            console.log(error);
        })
    
        
    },[movieTitle])



    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(movieTitle);
    }


return (
    <>
    <div className="container fluid">
        {/* */}
        <Form  onSubmit={handleSubmit}>
            <Form.Row className="justify-content-center">
                <Col lg={6}>
                    <Form.Label className="title">Movie Title</Form.Label>                            
                        <Form.Control type="search" required value={movieTitle} onChange={(e)=> setMovieTitle(e.target.value)} id="add" />
                </Col>                
            </Form.Row>                                                     
        </Form>        
    </div>
       

    <ListMovies movieList={movieList} movieTitle={movieTitle} />
    </>
   
    )
}