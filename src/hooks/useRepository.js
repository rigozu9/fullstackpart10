import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  console.log("id from useRepository", id);

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    console.log("Loading repository data...");
  }

  if (error) {
    console.log('Error from useQuery:', error);
  }

  const repository = data ? data.repository : null;

  console.log("data from useRepository", data);


  return { repository, loading, error };
};


export default useRepository;
