import { useEffect, useState } from "react";
import Character from "../components/Character";
import "bootstrap/dist/css/bootstrap.min.css";

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">Rick and Morty</h1>
      </nav>
      <div>
        <h2>Characters</h2>
        <div className="row">
          {loading ? (
            <div>Loading...</div>
          ) : (
            characters.map((character, index) => {
              return (
                <Character
                  key={`c-${index}`}
                  name={character.name}
                  origin={{
                    name: character.origin.name,
                    url: character.origin.url,
                  }}
                  image={character.image}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
