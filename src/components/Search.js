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
        if (value.length === 0) {
            setShowSearchList(false);
        }
    }

    function setSearchTerm(event, data) {
        searchItems(event, data);
        setSearch(data);
    }
    return (
        <>
        <div className='search-container'>
            <input className='searchBar' type='text' 
            placeholder='Search...'
            onInput={e => searchItems(e, e.target.value)} 
            value={search} 
            // onFocus={() => setShowSearchList(true)} 
            // onBlur={() => setShowSearchList(false)}
            />
            {showSearchList && (
                <div className='searchBar__div' onClick={e => setShowSearchList(false)}>
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