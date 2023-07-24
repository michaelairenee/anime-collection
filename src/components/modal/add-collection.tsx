import React, { useEffect, useState } from 'react'
import { ModalContainer, ModalFooter, ModalHeader } from './container'
import { useModal } from '../../context/useModal'
import Input from '../input'
import { checkInputValidity, isCollectionExist } from '../../utils/validation'
import { useCollection } from '../../context/useCollection'
import { Body } from '../../styles/modal'

const ModalAddCollection: React.FC = () => {
  const { modalAddCollection, setModalAddCollection } = useModal()
  const { collectionData, updateCollection } = useCollection()
  const [collectionName, setCollectionName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setCollectionName('')
  }, [modalAddCollection])

  const close = () => {
    setModalAddCollection({ visible: false })
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
    newCollection.push({ name: collectionName })
    updateCollection(newCollection)
    setModalAddCollection({ visible: false })
  }

  if (!modalAddCollection.visible) return null

  return (
    <ModalContainer>
      <ModalHeader title="Add New Collection" />
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
        action="add"
        actionClick={save}
        disabled={!collectionName}
        cancel={close}
      />
    </ModalContainer>
  )
}

export default ModalAddCollection
