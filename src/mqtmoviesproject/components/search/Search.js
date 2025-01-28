import React, {useState} from 'react';
import SearchSendRequest from './SearchSendRequest';

function Search(){
    const [searchBtn, setSearchBtn] = useState(false);
    const [search, setSearch] = useState("");

    window.scrollTo(0,0);
   
    const changeHandler = (e) => {
        setSearch(e.target.value);
        setSearchBtn(false);
    }
    
    let content = <div className="showbeforesearch">Your search results will appear here!</div>;
    

    const searchClickHandler = () => {
        setSearchBtn(true);
    }

    if(searchBtn === true){
        content = <SearchSendRequest 
                    search={search}
                    searchBtn={searchBtn}
                />;
    }

    return(
        <div className="moviespagecontainer">
            <div className="inputfield">
                <input
                    type="text"
                    placeholder="Search for movie"
                    name="search"
                    value={search}
                    onChange={changeHandler}
                    className="input"
                />
                <button 
                    className="searchbutton"
                    onClick={searchClickHandler}
                >Search</button>
            </div>
            
            <br />
            <br />
            <br />
           {content}
        </div>
    )
}

export default Search;