import React from 'react';
import {useAxiosGet} from '../../../Hooks/HttpRequest';


function MovieCast({id}){
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US`;
    const cast = useAxiosGet(url);
    let content;

    if(cast.loading){
        content = <div className="displaytext">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    }

    if(cast.error){
        content = <div className="error">Error Occured!!!</div>
    }

    if(cast.data){
        content = cast.data.cast.map(castitem => {
                return(
                    <div className="castitem" key={castitem.id}>
                        <div className="castitemimage" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w185/${castitem.profile_path}')`, backgroundSize: 'cover'}}>

                        </div>
                        <div className="castitemname">
                            {castitem.original_name}
                        </div>
                    </div>
                );
        })
    }

    return(
        <div>
            <div className="castcontainer">
                {content}
            </div>
        </div>
    )
}

export default MovieCast;