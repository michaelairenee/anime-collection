import styled from '@emotion/styled/macro'
import React, { ChangeEventHandler } from 'react'

const XInput = styled.input`
  min-height: 38px;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: hsl(0, 0%, 50%);
  padding: 2px 8px;
  width: 100%;
  font: inherit;
`

interface InputProps {
  value: string
  placeholder?: string
  onChange: ChangeEventHandler<any> | undefined
}

const Input = (props: InputProps) => {
  const { value, placeholder, onChange } = props

  return <XInput value={value} placeholder={placeholder} onChange={onChange} />
}

export default Input
