import React from 'react';
import {useAxiosGet} from '../../../Hooks/HttpRequest';
import { useSelector, useDispatch } from 'react-redux';
import pageIncrementAction from '../../redux/actions/pageIncrementAction';
import pageDecrementAction from '../../redux/actions/pageDecrementAction';
import {Link} from 'react-router-dom';

function SearchSendRequest({search, searchBtn}){
    const pageNo = useSelector(state => state.pageNum);
    const dispatch = useDispatch();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US&page=${pageNo}&query=${search}`;
    const movies = useAxiosGet(url);

    let content;
    let maxpagenum;
    let noresult = false;

    if(movies.loading){
        noresult = true;
        content = <div className="displaytext">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    }

    if(movies.error){
        noresult = true;
        content = <div className="error">Error Occured!!!</div>
    }

    if(movies.data){
        if(movies.data.total_pages === 0){
            noresult = true;
            content= <div className="showbeforesearch">No results match your search!</div>
        }
        maxpagenum = movies.data.total_pages;
        if(movies.data.total_pages !== 0){
        content = movies.data.results.map(movie => {
        return(
            <Link to={`/movie/${movie.id}`} style={{textDecoration : 'none'}} key={movie.id}><div className="moviecontainer" key={movie.id}>
                <div 
                    className="moviepiccontainer"
                    style={{backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
                            backgroundSize: 'cover'
                    }}>
                </div>
                <div className="movienamecontainer">
                    {movie.original_title}
                </div>
            </div></Link>
            )
        })
    }
    }

    
    return(
        <div>
             <h4 
                className="moviespagetitle"
                style={{display : searchBtn===true ? 'block' : 'none'}}
            >{`Search Result for ${search}`}</h4>
            <div className="moviescontainer">
                {content}
            </div>
             <div
                 className="pagination"
                 style={{justifyContent: pageNo===1 ? 'flex-end' : 'space-between'}}
            >
                <div 
                    className="previouspage"
                    style={{display: pageNo===1 || searchBtn!== true || noresult === true ? 'none' : 'block'}}
                    onClick={()=>dispatch(pageDecrementAction())}
                >
                    Previous
                </div>
                <div 
                    className="nextpage"
                    style={{display: pageNo===maxpagenum || searchBtn!==true || noresult === true ? 'none' : 'block'}}
                    onClick={()=>dispatch(pageIncrementAction())}
                >
                    Next
                </div>
            </div>
        </div>
    );
}

export default SearchSendRequest;