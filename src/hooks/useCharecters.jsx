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

export const useCharecters = () => {
  const { error, data, loading } = useQuery(GET_CHARS);
  return {
    error,
    data,
    loading,
  };
};
