import styled from '@emotion/styled/macro'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { BookmarkFill } from '@emotion-icons/bootstrap'

export const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;

  &:hover {
    transform: scale(1.03);
    box-shadow:
      0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  .desc {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .remove {
    margin-left: auto;
  }
`

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`

export const Img = styled(LazyLoadImage)`
  width: 100%;
  max-height: 100px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-height: 100px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: calc(100vw / 8);
  }

  @media screen and (max-width: 768px) {
    div {
      max-width: calc(100vw / 2);
    }
  }

  p {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const Remove = styled(BookmarkFill)`
  width: 20px;
  color: #00aa5b;
`
