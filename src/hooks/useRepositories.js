import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy = 'CREATED_AT', orderDirection = 'DESC' } = {}) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { 
      orderBy,
      orderDirection
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    console.log("Loading repositories...");
  }

  if (error) {
    console.log('Error from useQuery:', error);
  }

  const repositories = data ? data.repositories : null;

  return { repositories, loading, error };
};



export default useRepositories;
