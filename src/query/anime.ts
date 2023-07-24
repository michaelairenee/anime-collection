import { gql } from '@apollo/client'

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME) {
        id
        bannerImage
        coverImage {
          large
        }
        title {
          userPreferred
        }
        description
        episodes
        duration
        genres
        averageScore
        meanScore
        isFavourite
        isFavouriteBlocked
      }
    }
  }
`
