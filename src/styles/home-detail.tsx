import styled from '@emotion/styled/macro'
import { Dot, StarFill } from '@emotion-icons/bootstrap'

export const Title = styled.h2`
  font-weight: 400;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 2rem;

  .flex {
    display: flex;
    align-items: center;
  }

  .gap {
    gap: 10px;
  }

  .collection {
    margin-left: auto;
  }

  .detail {
    margin-top: 40px;
  }

  h3 {
    font-weight: 500;
    margin-top: 40px;
  }

  p.info {
    text-align: justify;
    line-height: 1.6;
  }

  .mobile-only {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: block;

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: flex;
    }

    .collection button {
      width: 100%;
    }
  }
`

export const Img = styled.div`
  padding: 20px 0;
  img {
    width: 100%;
    max-height: 280px;
  }

  @media screen and (max-width: 768px) {
    img {
      max-height: 180px;
    }
  }
`

export const StarIcon = styled(StarFill)`
  width: 16px;
  color: #fdda0d;
  margin-right: 4px;
`

export const DotIcon = styled(Dot)`
  width: 20px;
  margin-right: 4px;
`
