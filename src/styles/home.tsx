import styled from '@emotion/styled/macro'

export const Title = styled.h2`
  font-weight: 400;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  // height: 120px;
  // overflow: scroll;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Footer = styled.div`
  margin: 2em 0;
`
