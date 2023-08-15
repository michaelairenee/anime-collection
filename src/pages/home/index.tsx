import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    scrolling()
  }, [])

  const scrolling = () => {
    window.addEventListener('scroll', () => {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop === 200) {
        setCurrentPage(currentPage + 1)
      }
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div id="page">
      <Title>Anime</Title>

      <Grid id="anime">
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
    </div>
  )
}

export default Home
