import React, { ReactNode } from 'react'
import Navbar from './navbar'
import styled from '@emotion/styled/macro'

interface TemplateProps {
  children: ReactNode
}

const Children = styled.div`
  padding: 1.5rem 1rem;
`

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Children>{children}</Children>
    </>
  )
}

export default Template
