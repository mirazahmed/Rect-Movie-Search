import React from 'react'
import {Button} from 'react-bootstrap'

export default function NominationList(props) {
    return (
        <div>
            <h3>Nominations</h3>

            {props.nominatedMovies.length===1 ? (<div>No Nominations yet</div>):
                (
                    props.nominatedMovies.map((movie,index)=>{
                        return(
                            <ul>
                            <li key={movie.index}>
                                <span className="movieTitle">{movie.Title}</span> 
                                <span className="movieYear">({movie.Year})</span>                             
                                <Button as="input" type="submit" value="Remove" variant="outline-secondary" onClick={()=>props.removeMovie(index)}/>
                                                                                                                
                            </li>
                            </ul>  

                        )                           
                    })
                )
            }
        </div>
    )
}
