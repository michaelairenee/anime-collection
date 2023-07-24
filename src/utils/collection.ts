export const findCollectionIndexByAnimeId = (
  collection: any,
  animeId?: string,
) => {
  const arrIndex: any = []
  collection.map((cdata: any, index: number) => {
    if (
      cdata.entries &&
      cdata.entries.some((entry: any) => entry.mediaId == animeId)
    ) {
      arrIndex.push(index)
    }
  })
  return arrIndex
}
