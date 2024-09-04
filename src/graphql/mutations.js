import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
      createdAt
      reviewCount
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      repositoryId
      rating
      text
      createdAt
      user {
        id
        username
      }
    }
  }
`;