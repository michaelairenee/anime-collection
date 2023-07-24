import React from 'react'
import {
  Action,
  Box,
  Img,
  ImgDiv,
  Title,
} from '../../styles/collection-container'
import { useNavigate } from 'react-router-dom'
import Button from '../button'
import { useModal } from '../../context/useModal'

interface CollectionContainerProps {
  collection: any
}

const CollectionContainer: React.FC<CollectionContainerProps> = ({
  collection,
}) => {
  const navigate = useNavigate()
  const { setModalEditCollection, setModalRemoveCollection } = useModal()
  return (
    <div>
      <Box>
        <div className="anime">
          <div onClick={() => navigate(`/collection/${collection.name}`)}>
            <ImgDiv>
              {collection.entries ? (
                <Img
                  src={collection.entries[0].media.bannerImage}
                  alt={collection.name}
                />
              ) : (
                <Img
                  src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/default.jpg"
                  alt="default-image"
                />
              )}
            </ImgDiv>
            <Title>
              <div>
                <p>{collection.name}</p>
              </div>
            </Title>
          </div>
          <Action>
            <Button
              variant="secondary"
              title="Edit"
              onClick={() =>
                setModalEditCollection({
                  visible: true,
                  collectionId: collection.name,
                })
              }
            />
            <Button
              variant="danger-secondary"
              title="Remove"
              onClick={() =>
                setModalRemoveCollection({
                  visible: true,
                  collectionId: collection.name,
                })
              }
            />
          </Action>
        </div>
      </Box>
    </div>
  )
}

export default CollectionContainer
