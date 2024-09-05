import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $first: Int!, $after: String) {
    repositories(first: $first, after: $after orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id,
          description,
          forksCount,
          fullName,
          language,
          ownerAvatarUrl,
          stargazersCount,
          reviewCount,
          ratingAverage
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query($id: ID!, $first: Int!, $after: String) {
    repository(id: $id) {
      id
      fullName
      url
      ownerAvatarUrl
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            rating
            repository {
              fullName
            }
            user {
              username
            }
            text
          }
        }
      }
    }
  }
`;