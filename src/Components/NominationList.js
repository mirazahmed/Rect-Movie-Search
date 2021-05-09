
//This component recieves props from ListMovies component and
//Display nominatedMovies with movie title, year and Remove button
//Remove a nominatedMovie if Remove button is clicked
//Display a banner when 5 movies have been selected 

import React from 'react'
import {Button} from 'react-bootstrap'
import Banner from 'react-js-banner'


let Spinner = require('react-spinkit');

export default function NominationList(props) {

    
    return (

        <div>
            <h3>Nominations</h3>

            {props.nominatedMovies.length===0 ? 

                <div>
                    <span>No nominations found. Select five movies for nominations.  </span>
                    <Spinner name="wordpress" className ="waitingforNomination" fadeIn='quarter' color="red"/>                
                </div>:
                
                (props.nominatedMovies.map((movie,index)=>{
                    return(
                        <div key={index}>
                        <ul>
                            <li>
                                <span className="movieTitle">{movie.Title}</span> 
                                <span className="movieYear">({movie.Year})</span>                             
                                <Button as="input" type="submit" value="Remove" variant="outline-secondary" onClick={()=>props.removeMovie(index)}/>                                                                                                                
                            </li>
                        </ul>
                        </div>  

                    )                           
                }))
            }

            {props.nominatedMovies.length >=5 ? (
                
                <Banner className="banner"
                    title="Movie nomination completed !!!" 
                    css={{                        
                            backgroundColor: "#f27292",
                            fontStyle: "Oblique"                            
                        }}                                                                                     
                />
            ) : <div></div>}

        </div>

    )
}
