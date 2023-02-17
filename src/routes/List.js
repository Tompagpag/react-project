import { useEffect, useState } from 'react';
import Character from '../components/Character';
import 'bootstrap/dist/css/bootstrap.min.css';

function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);


  return (
    <div className='container'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Rick and Morty</h1>
      </nav>
      <div>
        <h2>Characters</h2>
        <div className='row'>
          {loading ? (
            <div>Loading...</div>
          ) : (

              <Character
                key={3}
                name={"Summer Smith"}
                origin={{
                  "name": "Earth (Replacement Dimension)",
                  "url": "https://rickandmortyapi.com/api/location/20"
                  }}
                image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
              />
    
          )}
        </div>
      </div>
    </div>
  );
}

export default List;
