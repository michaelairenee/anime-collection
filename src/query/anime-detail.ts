import { gql } from '@apollo/client'

export const GET_ANIME_BY_ID = gql`
  query GetAnimeById($id: Int!) {
    Media(id: $id, type: ANIME) {
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
`
