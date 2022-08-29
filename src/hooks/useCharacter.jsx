import { gql, useQuery } from "@apollo/client";



    const GET_CHAR = gql`
    query GetCharacter($id: ID!){
        character(id: $id) {
            name
            id
            image
          episode{
            name
            episode
          }
        }
      }
    `

export const useCharacter = (id) => {
  const {loading,error,data} =  useQuery(GET_CHAR,{
    variables : {
        id
    }
  })
    return {
        loading,data,error
    }
};

