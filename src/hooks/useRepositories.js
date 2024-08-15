import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  // console.log("Loading:", loading);
  // console.log("Data:", data);
  // console.log("Error:", error ? JSON.stringify(error, null, 2) : "No error");

  // if (data) {
  //   console.log("Repositories:", data.repositories);
  // }

  // if (error) {
  //   console.error("Detailed error:", error);
  // }

  const repositories = data ? data.repositories : null;

  return { repositories, loading, error };
};



export default useRepositories;
