import styled from '@emotion/styled/macro'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bcrumb = styled.div`
  display: flex;
  gap: 8px;
  color: #00aa5b;

  .parent: hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .active {
    font-weight: 600;
  }
`

interface BreadcrumbProps {
  current: string
  parent: string
}

const Breadcrumb = ({ current, parent }: BreadcrumbProps) => {
  const history = useNavigate()

  return (
    <Bcrumb>
      <p
        className="parent"
        onClick={() =>
          parent === 'anime' ? history('/') : history(`/${parent}`)
        }
      >
        {parent.charAt(0).toUpperCase() + parent.slice(1)}
      </p>
      <p>{'>'}</p>
      <p className="active">{current}</p>
    </Bcrumb>
  )
}
export default Breadcrumb
