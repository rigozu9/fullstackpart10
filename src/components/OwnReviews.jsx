import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import Text from './Text';

const OwnReviews = () => {
    const { data, loading, error } = useQuery(GET_ME, {
        variables: { includeReviews: true },
    });

    if (loading) return <Text>Loading...</Text>;

    if (error) return <Text>Error loading own reviews</Text>;

    const reviewNodes = data.me.reviews
        ? data.me.reviews.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
          data={reviewNodes}
          renderItem={({ item }) => <ReviewItem item={item} own_review={true} />}
          keyExtractor={({ id }) => id}
        />
    );
};

export default OwnReviews