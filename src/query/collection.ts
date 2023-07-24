import { gql } from '@apollo/client'

export const GET_COLLECTION_LIST = gql`
  query GetCollectionList($userId: Int!) {
    MediaListCollection(userId: $userId, type: ANIME) {
      user {
        id
        name
      }
      lists {
        name
        entries {
          mediaId
          media {
            id
            title {
              userPreferred
            }
            bannerImage
          }
        }
      }
    }
  }
`
