import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy = 'CREATED_AT', orderDirection = 'DESC', first } = {}) => {
  const { data, error, fetchMore, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      first, 
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

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy,
        orderDirection
      },
    });
  };

  return { repositories, fetchMore: handleFetchMore, loading, error };
};



export default useRepositories;
