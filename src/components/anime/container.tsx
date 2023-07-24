import React from 'react'
import { Box, Img, Remove, Title } from '../../styles/anime-container'
import { Media } from '../../generated/graphql'
import { useNavigate } from 'react-router-dom'
import { ImgDiv } from '../../styles/collection-container'
import { useModal } from '../../context/useModal'

interface AnimeContainerProps {
  anime: Media | any
  canRemove?: boolean
  collectionId?: string
}

const AnimeContainer: React.FC<AnimeContainerProps> = ({
  anime,
  canRemove,
  collectionId,
}) => {
  const navigate = useNavigate()
  const { setModalRemove } = useModal()

  return (
    <div>
      <Box>
        <ImgDiv onClick={() => navigate(`/anime/${anime.id}`)}>
          {anime.bannerImage ? (
            <Img src={anime?.bannerImage} alt={anime.title} />
          ) : (
            <Img
              src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/default.jpg"
              alt="default-image"
            />
          )}
        </ImgDiv>
        <div className="desc">
          <Title onClick={() => navigate(`/anime/${anime.id}`)}>
            <div>
              <p>{anime?.title?.userPreferred}</p>
            </div>
          </Title>
          {canRemove && (
            <div className="remove">
              <Remove
                onClick={() =>
                  setModalRemove({
                    visible: true,
                    animeId: anime.id,
                    animeName: anime.title.userPreferred,
                    collectionId: collectionId,
                  })
                }
              />
            </div>
          )}
        </div>
      </Box>
    </div>
  )
}

export default AnimeContainer
