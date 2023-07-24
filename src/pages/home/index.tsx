import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  GetAnimeListQuery,
  GetAnimeListQueryVariables,
  GetAnimeListDocument,
} from '../../generated/graphql'
import { Footer, Grid, Title } from '../../styles/home'
import AnimeContainer from '../../components/anime/container'
import Pagination from '../../components/pagination'

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading } = useQuery<
    GetAnimeListQuery,
    GetAnimeListQueryVariables
  >(GetAnimeListDocument, {
    variables: {
      page: currentPage,
      perPage: 10,
    },
  })

  const animes = data?.Page?.media
  const pageCount = data?.Page?.pageInfo?.lastPage ?? 1

  if (loading) return <div>Loading...</div>

  return (
    <>
      <Title>Anime</Title>

      <Grid>
        {animes &&
          animes.map((anime) => (
            <AnimeContainer key={anime?.id} anime={anime!} />
          ))}
      </Grid>

      <Footer>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount!}
          setCurrentPage={setCurrentPage}
        />
      </Footer>
    </>
  )
}

export default Home
