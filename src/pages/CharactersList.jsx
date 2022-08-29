import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import   './CharectersList.css'
const CharectersList = () => {
  

    const GET_CHARS = gql`
  query {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;
    const { error, data, loading } = useQuery(GET_CHARS);

  console.log({error, data, loading});

    if (loading) {
        return <h1>...Loading</h1>
    }
    if (error) {
        return <h1>...something went Wrong</h1>
    }
  return <div className="CharectersList">{data.characters.results.map(item => (
        <Link to={`/${item.id}`} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>
        </Link>
  ))}</div>;
};

export default CharectersList;
