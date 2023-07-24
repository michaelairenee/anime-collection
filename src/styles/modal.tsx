import styled from '@emotion/styled/macro'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  min-width: 40%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const Header = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Body = styled.div`
  padding: 10px 0 20px 0;

  div.label {
    margin-bottom: 10px;
  }

  div.error {
    font-size: 12px;
    margin-top: 10px;
    color: #f94d63;
    font-weight: 600;
  }
`
