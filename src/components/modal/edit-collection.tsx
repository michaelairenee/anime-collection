import React, { useEffect, useState } from 'react'
import { ModalContainer, ModalFooter, ModalHeader } from './container'
import { useModal } from '../../context/useModal'
import Input from '../input'
import { checkInputValidity, isCollectionExist } from '../../utils/validation'
import { useCollection } from '../../context/useCollection'
import { Body } from '../../styles/modal'
import { useNavigate } from 'react-router-dom'

const ModalEditCollection: React.FC = () => {
  const history = useNavigate()
  const { modalEditCollection, setModalEditCollection } = useModal()
  const { collectionData, updateCollection } = useCollection()
  const [collectionName, setCollectionName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (modalEditCollection.collectionId) {
      setCollectionName(modalEditCollection.collectionId)
    }
  }, [modalEditCollection])

  const close = () => {
    setModalEditCollection({ visible: false })
    setError('')
  }

  const handleChange = (e: any) => {
    const value = e.target.value
    if (checkInputValidity(value)) {
      setCollectionName(value)
    }
  }

  const save = () => {
    if (!collectionName) {
      setError('Collection name is required')
      return
    }
    if (isCollectionExist(collectionName, collectionData)) {
      setError('Collection name is already exist')
      return
    }
    const newCollection = [...collectionData]
    if (collectionName === modalEditCollection.collectionId) return
    else {
      const index = collectionData.findIndex(
        (cData: any) => cData.name === modalEditCollection.collectionId,
      )
      newCollection[index].name = collectionName
    }
    updateCollection(newCollection)
    setModalEditCollection({ visible: false })
    history(`/collection/${collectionName}`)
  }

  if (!modalEditCollection.visible) return null

  return (
    <ModalContainer>
      <ModalHeader title="Edit Collection" />
      <Body>
        <div className="label">Collection Name</div>
        <Input
          value={collectionName}
          placeholder="Input collection name"
          onChange={handleChange}
        />
        <div className="error">{error}</div>
      </Body>
      <ModalFooter
        action="edit"
        actionClick={save}
        disabled={!collectionName}
        cancel={close}
      />
    </ModalContainer>
  )
}

export default ModalEditCollection
