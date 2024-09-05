import { useParams } from "react-router-native";
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from "./Text";
import ReviewItem from "./ReviewItem"
import { FlatList } from "react-native";


const SingleRepositoryView  = () => {
  const { id } = useParams();

  const { repository, loading, error, fetchMore } = useRepository({
    id,
    first: 5
  });

  const onEndReach = () => {
    console.log("reached the end");
    fetchMore();
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading repository</Text>;

  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
  
  // console.log("here are the reviews", reviewNodes);

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} showGitHubButton={true} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepositoryView;