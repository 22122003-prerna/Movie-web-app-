import React from 'react';
import { useParams } from 'react-router-dom';
import { useAxiosGet } from '../../../Hooks/HttpRequest';
import MovieVideos from './MovieVideos';
import MovieCast from './MovieCast';
import MovieTrailer from './MovieTrailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import showTrailerAction from '../../redux/actions/showTrailerAction';

function MovieDetails() {
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US`;
    const details = useAxiosGet(url);
    let content;
    const showtrailer = useSelector(state => state.showtrailer);
    const dispatch = useDispatch();

    function timeConvert(n) {
        const hours = Math.floor(n / 60);
        const minutes = n % 60;
        return `${hours} h ${minutes} m`;
    }

    if (details.loading) {
        content = (
            <div className="displaytext">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }

    if (details.error) {
        content = <div className="error" style={{ textAlign: 'center' }}>Error Occurred!!!</div>;
    }

    if (details.data) {
        let time = timeConvert(details.data.runtime);
        content = (
            <div style={{ textAlign: 'center' }} key={details.data.id}>
                <div className="detailscontainer">
                    <div className="poster">
                        <div className="postercover">
                            <div className="watchtrailer">
                                <span className="tooltiptext">Watch Trailer</span>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    size="2x"
                                    className="playbutton"
                                    onClick={() => dispatch(showTrailerAction(true))}
                                />
                            </div>
                        </div>
                        <div className="vote">{details.data.vote_average}</div>
                        {details.data.poster_path && (
                            <img
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details.data.poster_path}`}
                                alt={details.data.original_title || "Movie poster"}
                            />
                        )}
                    </div>
                    <div className="text" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('https://www.themoviedb.org/t/p/original${details.data.backdrop_path}')`, backgroundSize: 'cover' }}>
                        <div style={{ display: 'inline-flex' }}>
                            <h4 style={{ color: '#F5C518' }}>{details.data.original_title}</h4>
                            &ensp;<span style={{ width: '100px', height: '30px', lineHeight: '30px', textAlign: 'center', backgroundColor: '#F5C518', color: 'black', borderRadius: '5px', fontWeight: 'bold' }}>{details.data.status}</span>
                        </div>
                        <h6 style={{ color: 'gray', fontStyle: 'italic' }}>{details.data.tagline}</h6>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}>
                            &nbsp;{details.data.genres.map(genre => (
                                <div key={genre.id}>{genre.name}&#10003;&ensp;</div>
                            ))}
                        </div>
                        <br />
                        <p style={{ color: 'gray' }}>{details.data.overview}</p>
                        <h6 style={{ color: '#F5C518' }}>Release Date</h6>
                        <h6 style={{ color: 'gray' }}>{details.data.release_date}</h6>
                        <h6 style={{ color: '#F5C518' }}>Revenue</h6>
                        <h6 style={{ color: 'gray' }}>${details.data.revenue}</h6>
                        <h6 style={{ color: '#F5C518' }}>Run Time</h6>
                        <h6 style={{ color: 'gray' }}>{time}</h6>
                        <h6 style={{ color: '#F5C518' }}>Spoken Languages</h6>
                        {details.data.spoken_languages.map(language => (
                            <h6 style={{ color: 'gray' }} key={language.english_name}>{language.english_name}</h6>
                        ))}
                    </div>
                </div>
                <h3 className="heading">Clips</h3>
                <MovieVideos id={id} />
                <h3 className="heading">Cast</h3>
                <MovieCast id={id} />
                <div style={{ display: showtrailer ? 'block' : 'none' }}>
                    <MovieTrailer id={id} />
                </div>
            </div>
        );
    }

    return (
        <div className="moviedetailspagecontainer">
            {content}
        </div>
    );
}

export default MovieDetails;
