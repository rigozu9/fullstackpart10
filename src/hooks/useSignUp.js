import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';
import useSignIn from './useSignIn';

const useCreateUser = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();

  const createUser = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          user: {
            username: username,
            password: password,
          },
        },
      });

      if (data?.createUser) {
        await signIn({ username, password });
      }
    } catch (error) {
      console.error('Error during user creation:', error);
      throw error;
    }
  };

  return [createUser, result];
};

export default useCreateUser;