import React from 'react';
import ReactPlayer from 'react-player';
import {useAxiosGet} from '../../../Hooks/HttpRequest';


function MovieVideos({id}){
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US`;
    const videos = useAxiosGet(url);
    let content;

    if(videos.loading){
        content = <div className="displaytext">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    }

    if(videos.error){
        content = <div className="error">Error Occured!!!</div>
    }

    if(videos.data){
        content = videos.data.results.map(video => {
                return(
                    <ReactPlayer
                        key={video.id}
                        url= {`https://www.youtube.com/watch?v=${video.key}`}
                        controls={true}
                        className="clipstyle"
                        width={"270px"}
                        height={"200px"}
                    />
                );
        })
    }

    return(
        <div>
            <div className="clipscontainer">
                {content}
            </div>
        </div>
    )
}

export default MovieVideos;