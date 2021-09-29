import React, {useState, useEffect} from 'react';



export default function YogaSession(props) {
  const [data,setData] = useState([]);

  useEffect(() => { 
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(pokemons => setData(pokemons.results))
  },[])



  return (
    <div>
    {data.map(element => (
      <article>
      <img scr="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="Yoga session img" />
      <h3>
        {element.name}
      </h3>
      <p>
        {element.url}
      </p>
    </article>
    ))}
    </div>
  );
}