import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut'
import theme from '../theme';
import SingleRepositoryView from './SingleRepositoryView';
import CreateReview from './ReviewForm';
import OwnReviews from './OwnReviews';
import SignUp from './SignUpForm';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="/ownreviews" element={<OwnReviews />} />
        <Route path="/repository/:id" element={<SingleRepositoryView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;