import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";

const GET_CHAR_LOC = gql`
  query GetCharLoc($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [name, setName] = useState("");
  const [getLoc, { error, loading, data, called }] = useLazyQuery(
    GET_CHAR_LOC,
    {
      variables: {
        name,
      },
    }
  );
  console.log({ error, loading, data, called });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLoc()}>Search</button>
      {loading && <h1>...Loading</h1>}
      {error && <h1>...Wrong</h1>}
      {data && (
        <ul>
          {data.characters.results.map((char,index) => {
            return <li key={index}>{char.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
