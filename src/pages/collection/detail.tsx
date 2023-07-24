import React, { useEffect } from 'react'
import { useCollection } from '../../context/useCollection'
import { useParams } from 'react-router-dom'
import { EditIcon, Grid, Title } from '../../styles/collection-detail'
import AnimeContainer from '../../components/anime/container'
import ModalRemove from '../../components/modal/remove'
import { useModal } from '../../context/useModal'
import ModalEditCollection from '../../components/modal/edit-collection'
import Breadcrumb from '../../components/breadcrumb'
// import Button from '../../components/button'

const CollectionDetail: React.FC = () => {
  const { slug } = useParams()
  const { collectionData } = useCollection()
  const { setModalEditCollection, setModalRemove } = useModal()

  const getDetail = () => {
    return collectionData.find((cData: any) => cData.name === slug)
  }

  const detail = getDetail()

  useEffect(() => {
    setModalRemove({ visible: false })
  }, [])

  if (collectionData.length === 0) return <div>Loading...</div>

  if (!detail) return <div>Page not found</div>

  return (
    <>
      <Breadcrumb current={detail.name} parent="collection" />
      <Title>
        <h2>{detail.name}</h2>
        <EditIcon
          onClick={() =>
            setModalEditCollection({
              visible: true,
              collectionId: detail.name,
            })
          }
        />
      </Title>
      <Grid>
        {detail.entries &&
          detail.entries.map((entry: any) => (
            <AnimeContainer
              key={entry.mediaId}
              anime={entry.media}
              collectionId={slug}
              canRemove
            />
          ))}
      </Grid>

      <ModalEditCollection />
      <ModalRemove />
    </>
  )
}

export default CollectionDetail
