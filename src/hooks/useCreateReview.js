import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useNavigate } from 'react-router-native';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const createReview = async ({ owner, name, rating, review }) => {
    try {
      const { data } = await mutate({
        variables: {
          review: {
            ownerName: owner,
            repositoryName: name,
            rating: parseInt(rating, 10),
            text: review,
          },
        },
      });

      if (data?.createReview) {
        navigate(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (error) {
      console.error('Error during review creation:', error);
      throw error;
    }
  };

  return [createReview, result];
};

export default useCreateReview;
