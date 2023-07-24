import React, { ReactNode, useMemo } from 'react'
import { Container, Content, Footer, Header } from '../../styles/modal'
import Button from '../button'

interface ModalContainerProps {
  children: ReactNode
}

export const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

interface ModalHeaderProps {
  title: string
}

export const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <Header>
      <p>{title}</p>
      <hr />
    </Header>
  )
}

interface ModalFooterProps {
  action: string
  actionClick: () => void
  disabled?: boolean
  cancel: () => void
}

export const ModalFooter = ({
  action,
  actionClick,
  disabled,
  cancel,
}: ModalFooterProps) => {
  const variant = useMemo(() => {
    if (action === 'remove') return 'danger'
    return 'primary'
  }, [action])

  const title = useMemo(() => {
    if (action === 'remove') return 'Remove'
    return 'Save'
  }, [action])

  const cancelVariant = useMemo(() => {
    if (action === 'remove') return 'danger-secondary'
    return 'secondary'
  }, [action])

  return (
    <Footer>
      <Button
        title={title}
        variant={variant}
        disabled={disabled}
        onClick={actionClick}
      />
      <Button title="Cancel" variant={cancelVariant} onClick={cancel} />
    </Footer>
  )
}
