import { useParams } from "react-router-native";
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from "./Text";


const SingleRepositoryView  = () => {
  const { id } = useParams();

  const { repository, loading, error } = useRepository(id);

  console.log("repository from SingleRepositoryView", repository);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading repository</Text>;

  return <RepositoryItem item={repository} showGitHubButton={true} />;
};

export default SingleRepositoryView;