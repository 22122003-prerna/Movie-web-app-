import React from 'react';
import ReactPlayer from 'react-player';
import {useAxiosGet} from '../../../Hooks/HttpRequest';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose } from '@fortawesome/free-solid-svg-icons';
import showTrailerAction from '../../redux/actions/showTrailerAction';
import { useDispatch } from 'react-redux';

function MovieTrailer({id}){
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US`;
    const trailer = useAxiosGet(url);
    let content;
    const dispatch = useDispatch();

    if(trailer.loading){
        content = <div className="displaytext">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    }

    if(trailer.error){
        content = <div className="error">Error Occured!!!</div>
    }
    if (trailer.data) {
        content = trailer.data.results
            .filter(video => video.type === "Trailer")
            .map(video => (
                <ReactPlayer
                    key={video.id}
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    style={{ position: 'absolute' }}
                />
            ));
    }
    

    return(
        <div className="movietrailerpagecontainer">
            <FontAwesomeIcon
                icon={faWindowClose}
                size="3x"
                color="#F5C518"
                style={{position: 'absolute', right: 10, top: 10, cursor: 'pointer'}}
                onClick={()=>dispatch(showTrailerAction(false))}
            />
            <div className="trailerstyle">
                {content}
            </div>
        </div>
    )
}

export default MovieTrailer;