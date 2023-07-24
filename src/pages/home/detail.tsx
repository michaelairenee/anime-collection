import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from '../../generated/graphql'
import { DotIcon, Grid, Img, StarIcon, Title } from '../../styles/home-detail'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import Button from '../../components/button'
import { useModal } from '../../context/useModal'
import { useCollection } from '../../context/useCollection'
import { findCollectionIndexByAnimeId } from '../../utils/collection'
import ModalAdd from '../../components/modal/add'
import Breadcrumb from '../../components/breadcrumb'

const AnimeDetail: React.FC = () => {
  const { id } = useParams()
  const { setModalAdd } = useModal()
  const { collectionData, convertToDropdown } = useCollection()
  const [collectionIndex, setCollectionIndex] = useState([])

  const { data, error, loading } = useQuery<
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables
  >(GetAnimeByIdDocument, {
    variables: { id: id ? parseInt(id) : 0 },
  })
  const detail = data?.Media

  useEffect(() => {
    setModalAdd({ visible: false })
    // find collection by anime id
    const arrIndex = findCollectionIndexByAnimeId(collectionData, id)
    setCollectionIndex(arrIndex)
    // convert to collection dropdown list
    convertToDropdown(arrIndex)
  }, [id, collectionData])

  if (loading || collectionData.length === 0) return <div>Loading...</div>

  if (error) return <div>Page not found.</div>

  return (
    <>
      <Breadcrumb
        current={detail?.title?.userPreferred ? detail.title.userPreferred : ''}
        parent="anime"
      />
      <Grid>
        <Img>
          {detail?.coverImage?.large && (
            <LazyLoadImage
              src={detail.coverImage.large}
              alt={detail.title?.userPreferred || ''}
            />
          )}
        </Img>
        <div>
          <div className="flex">
            <Title>{detail?.title?.userPreferred}</Title>
            <div className="collection desktop-only">
              <Button
                variant="primary"
                title="Add to Collection"
                onClick={() =>
                  setModalAdd({
                    visible: true,
                    animeId: detail?.id,
                    anime: detail,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap">
            <div className="flex">
              <StarIcon />
              <small>{detail?.averageScore}</small>
            </div>
            <DotIcon />
            <small>{detail?.episodes} episodes</small>
            <DotIcon />
            <small>{detail?.duration} minutes</small>
          </div>
          <div className="detail">
            <p>Genres: {detail?.genres?.join(', ')} </p>
            <p>
              Collection:{' '}
              {collectionIndex.length === 0
                ? '-'
                : collectionIndex.map((i) => collectionData[i].name).join(', ')}
            </p>
          </div>
          <h3>Information</h3>
          {detail?.description && (
            <p
              className="info"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            />
          )}

          <div className="collection mobile-only">
            <Button
              variant="primary"
              title="Add to Collection"
              onClick={() =>
                setModalAdd({
                  visible: true,
                  animeId: detail?.id,
                  anime: detail,
                })
              }
            />
          </div>
        </div>
      </Grid>
      <ModalAdd />
    </>
  )
}

export default AnimeDetail
