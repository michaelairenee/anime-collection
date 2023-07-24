import styled from '@emotion/styled/macro'
import React, { useMemo } from 'react'

interface XButtonProps {
  borderWidth: number
  borderColor: string
  bgColor: string
  color: string
  opacity?: number
}

const XButton = styled.button<XButtonProps>`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  font-weight: 600;
  color: ${(props) => props.color};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`

interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary' | 'danger' | 'danger-secondary'
  disabled?: boolean
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  const { title, variant, disabled, onClick } = props

  const borderWidth = useMemo(() => {
    if (variant === 'primary') return 0
    if (variant === 'secondary') return 1
    return 1
  }, [variant])

  const borderColor = useMemo(() => {
    if (variant === 'primary') return '#00aa5b'
    if (variant === 'secondary') return '#00aa5b'
    if (variant === 'danger') return '#f94d63'
    if (variant === 'danger-secondary') return '#f94d63'
    return '#00aa5b'
  }, [variant])

  const bgColor = useMemo(() => {
    if (variant === 'primary') return '#00aa5b'
    if (variant === 'secondary') return 'transparent'
    if (variant === 'danger') return '#f94d63'
    if (variant === 'danger-secondary') return 'transparent'
    return '#00aa5b'
  }, [variant])

  const color = useMemo(() => {
    if (variant === 'primary') return '#fff'
    if (variant === 'secondary') return '#00aa5b'
    if (variant === 'danger') return '#fff'
    if (variant === 'danger-secondary') return '#f94d63'
    return '#00aa5b'
  }, [variant])

  const opacity = useMemo(() => {
    if (disabled) return 0.8
    return
  }, [disabled])

  return (
    <XButton
      borderWidth={borderWidth}
      borderColor={borderColor}
      bgColor={bgColor}
      color={color}
      opacity={opacity}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </XButton>
  )
}

export default Button
