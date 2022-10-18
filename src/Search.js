import React from 'react';
import Data from './Data';

const Search = ({data, query}) => {
  return (
    <div className='main-container'>
        {data.filter((filte=> filte.title.toLowerCase().includes(query.toLowerCase()))).map((dat) => {
            return (
                <Data key={dat.title} {...dat} />
            )
        })}
    </div>
  )
}

export default Search;