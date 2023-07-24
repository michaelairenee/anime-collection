import styled from '@emotion/styled/macro'
import React from 'react'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;

  img {
    width: 320px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 60%;
    }
  }
`

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <img src="/not-found.png" />
    </Container>
  )
}

export default PageNotFound
