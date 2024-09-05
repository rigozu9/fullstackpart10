import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id, first }) => {
  console.log("id from useRepository", id);

  const { data, error, fetchMore, loading } = useQuery(GET_REPOSITORY, {
    variables: { 
      id,
      first,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    console.log("Loading repository data...");
  }

  if (error) {
    console.log('Error from useQuery:', error);
  }

  const repository = data ? data.repository : null;

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  console.log("data from useRepository", data);
  // console.log("data.pageInfo from useRepository", data.repository.reviews.pageInfo);


  return { repository, fetchMore: handleFetchMore, loading, error };
};


export default useRepository;
