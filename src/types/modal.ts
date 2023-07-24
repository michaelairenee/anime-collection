import { Media } from '../generated/graphql'

export interface Modal {
  visible: boolean
  collectionId?: string
  animeId?: number
  animeName?: string
  anime?: Media | any
}
