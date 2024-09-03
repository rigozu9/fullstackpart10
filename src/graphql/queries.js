import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
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
        }
    }
}`;

export const GET_REPOSITORY = gql`
  query($id: ID!) {
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
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      username
    }
  }
`;