import { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import AuthStorage from '../utils/authStorage';

const SignOut = () => {
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const authStorage = new AuthStorage();

  useEffect(() => {
    const signOut = async () => {
      await authStorage.removeAccessToken();

      await apolloClient.resetStore();

      navigate('/signin', { replace: true });
    };

    signOut();
  }, [apolloClient, navigate, authStorage]);

  return null;
};

export default SignOut;
