import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBars, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import pageIncrementByNumAction from '../redux/actions/pageIncrementByNumAction';
import { useDispatch } from 'react-redux';

function Header(){
    const [showBarDropDown, setShowBarDropDown] = useState(false);
    
    const dispatch = useDispatch();
    let iconname;
    if(showBarDropDown === false){
        iconname = faBars;
    }

    if(showBarDropDown === true){
        iconname = faWindowClose;
    }

    return(
        <div className="headercontainer">
            <FontAwesomeIcon
                icon= {iconname}
                size="2x"
                className="linkbar"
                onClick={()=>{setShowBarDropDown(!showBarDropDown); }}
            />
         
            <div className="bardropdowncontainerback" style={{display: showBarDropDown===true ? 'block': 'none'}}>
                <div className="bardropdowncontainer">
                        <ul className="bardropdownul">
                            <Link to="/movies/popular" className="bardropdownlink" onClick={()=>{dispatch(pageIncrementByNumAction(1)); setShowBarDropDown(false)}}><li>Popular</li></Link>
                            <Link to="/movies/now-playing" className="bardropdownlink" onClick={()=>{dispatch(pageIncrementByNumAction(1)); setShowBarDropDown(false)}}><li>Now Playing</li></Link>
                            <Link to="/movies/upcoming" className="bardropdownlink" onClick={()=>{dispatch(pageIncrementByNumAction(1)); setShowBarDropDown(false)}}><li>Upcoming</li></Link>
                            <Link to="/movies/top-rated" className="bardropdownlink" onClick={()=>{dispatch(pageIncrementByNumAction(1)); setShowBarDropDown(false)}}><li>Top Rated</li></Link>
                        </ul>
                </div>
            </div>
            <Link to="/" className="logolink"><h3 className="logotext">MQTMOVIES</h3></Link>
            <ul className="linkscontainer">
                <li className="linktext">Movies
                    <div className="dropdowncontainer">
                        <ul className="dropdownul">
                            <Link to="/movies/popular" className="dropdownlink" onClick={()=>dispatch(pageIncrementByNumAction(1))}><li>Popular</li></Link>
                            <Link to="/movies/now-playing" className="dropdownlink" onClick={()=>dispatch(pageIncrementByNumAction(1))}><li>Now Playing</li></Link>
                            <Link to="/movies/upcoming" className="dropdownlink" onClick={()=>dispatch(pageIncrementByNumAction(1))}><li>Upcoming</li></Link>
                            <Link to="/movies/top-rated" className="dropdownlink" onClick={()=>dispatch(pageIncrementByNumAction(1))}><li>Top Rated</li></Link>
                        </ul>
                    </div>
                </li>
               
                  <Link 
                        to="/search" 
                        className="searchiconlink"
                        onClick={()=>{dispatch(pageIncrementByNumAction(1)); setShowBarDropDown(false)}}
                    > <FontAwesomeIcon
                        icon={faSearch}
                        color="white"
                        className="searchicon"
                    /></Link> 
            </ul>
        </div>
    )
}

export default Header;