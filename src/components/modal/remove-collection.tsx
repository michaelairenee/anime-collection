import React from 'react'
import { ModalContainer, ModalFooter } from './container'
import { useModal } from '../../context/useModal'
import { useCollection } from '../../context/useCollection'
import { Body } from '../../styles/modal'

const ModalRemoveCollection: React.FC = () => {
  const { modalRemoveCollection, setModalRemoveCollection } = useModal()
  const { collectionData, updateCollection } = useCollection()

  const close = () => {
    setModalRemoveCollection({
      visible: false,
    })
  }

  const remove = () => {
    const index = collectionData.findIndex(
      (cData: any) => cData.name === modalRemoveCollection.collectionId,
    )
    collectionData.splice(index, 1)
    updateCollection(collectionData)
    setModalRemoveCollection({ visible: false })
  }

  if (!modalRemoveCollection.visible) return null

  return (
    <ModalContainer>
      <Body>
        Are you sure want to remove collection{' '}
        {modalRemoveCollection.collectionId}?
      </Body>
      <ModalFooter action="remove" actionClick={remove} cancel={close} />
    </ModalContainer>
  )
}

export default ModalRemoveCollection
