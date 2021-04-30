import React from 'react';
import {useState} from 'react';


export default function SearchBar({originalList, list, setSearchedResults}) {
    const [showSearchList, setShowSearchList] = useState(false);
    const [search, setSearch] = useState();
    
    function searchItems(event, value) {
        const newList = originalList.filter(item => new RegExp(value, "gi").test(item.title));
        setSearchedResults(newList);
        setShowSearchList(true);
        setSearch(value);
    }

    function setSearchTerm(event, data) {
        searchItems(event, data);
        setSearch(data);
    }
    if (searchItems.array === 'undefined' || searchItems.length == 0) {
        // array empty or does not exist
        return (
            <h1>ERROR! This B!tch Be Empty!</h1>

            // THIS SHIT DOESN'T WORK!!! 
        )
        
    } else {
        return (
            <>
            <div className='search-container'>
                <input className='searchBar' type='text' 
                onInput={e => searchItems(e, e.target.value)} 
                value={search} 
                // onFocus={() => setShowSearchList(true)} 
                // onBlur={() => setShowSearchList(false)}
                />
                {showSearchList && (
                    <div className='searchBar__div' onClick={e => setShowSearchList(false)}>
                    <button className='searchBar__close'  onClick={e => setShowSearchList(false)} >Close Search</button>
                        {list.map(item => {
                            return (
                                <div className='searchBar__item' onClick={e => setSearchTerm(e, item.title)}>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            </>
        )
      
    }
   
}
