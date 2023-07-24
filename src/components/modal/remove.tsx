import React from 'react'
import { ModalContainer, ModalFooter } from './container'
import { useModal } from '../../context/useModal'
import { useCollection } from '../../context/useCollection'
import { Body } from '../../styles/modal'

const ModalRemove: React.FC = () => {
  const { modalRemove, setModalRemove } = useModal()
  const { collectionData, updateCollection } = useCollection()

  const close = () => {
    setModalRemove({ visible: false })
  }

  const remove = () => {
    collectionData.forEach((cData: any) => {
      const index = cData.entries.findIndex(
        (entry: any) => entry.mediaId === modalRemove.animeId,
      )
      cData.entries.splice(index, 1)
    })
    updateCollection(collectionData)
    setModalRemove({ visible: false })
  }

  if (!modalRemove.visible) return null

  return (
    <ModalContainer>
      <Body>
        Are you sure want to remove {modalRemove.animeName} from the{' '}
        {modalRemove.collectionId}?
      </Body>
      <ModalFooter action="remove" actionClick={remove} cancel={close} />
    </ModalContainer>
  )
}

export default ModalRemove
