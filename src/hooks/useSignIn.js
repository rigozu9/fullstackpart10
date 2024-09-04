import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from "react-router-native";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
          variables: { credentials: { username, password } },
      });

      if (data?.authenticate?.accessToken) {
        await authStorage.setAccessToken(data.authenticate.accessToken);

        await apolloClient.resetStore();

        navigate('/');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
