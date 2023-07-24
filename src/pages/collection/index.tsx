import React, { useEffect } from 'react'
import { Grid, Title } from '../../styles/collection'
import CollectionContainer from '../../components/collection/container'
import { useCollection } from '../../context/useCollection'
import { useModal } from '../../context/useModal'
import ModalAddCollection from '../../components/modal/add-collection'
import ModalRemoveCollection from '../../components/modal/remove-collection'
import { AddIcon, Box } from '../../styles/collection-container'
import ModalEditCollection from '../../components/modal/edit-collection'

const Collection: React.FC = () => {
  const { collectionData } = useCollection()
  const { setModalAddCollection, setModalRemoveCollection } = useModal()

  useEffect(() => {
    setModalAddCollection({ visible: false })
    setModalRemoveCollection({ visible: false })
  }, [])

  if (collectionData.length === 0) return <div>Loading...</div>

  return (
    <>
      <Title>Collection</Title>

      <Grid>
        <Box onClick={() => setModalAddCollection({ visible: true })}>
          <div className="new">
            <AddIcon />
            <p>New Collection</p>
          </div>
        </Box>

        {collectionData &&
          collectionData.map((collection: any) => (
            <CollectionContainer
              key={collection.name}
              collection={collection!}
            />
          ))}
      </Grid>

      <ModalAddCollection />
      <ModalEditCollection />
      <ModalRemoveCollection />
    </>
  )
}

export default Collection
