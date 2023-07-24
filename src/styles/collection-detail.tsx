import styled from '@emotion/styled/macro'
import { Edit } from '@emotion-icons/boxicons-solid'

export const Title = styled.div`
  display: flex;
  gap: 20px;

  h2 {
    font-weight: 400;
  }
`

export const EditIcon = styled(Edit)`
  color: #00aa5b;
  width: 20px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
