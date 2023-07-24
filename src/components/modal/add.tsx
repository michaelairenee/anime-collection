import React, { useEffect, useState } from 'react'
import { ModalContainer, ModalFooter, ModalHeader } from './container'
import { useModal } from '../../context/useModal'
import CreateableSelect from 'react-select/creatable'
import { useCollection } from '../../context/useCollection'
import { isCollectionExist } from '../../utils/validation'
import { Body } from '../../styles/modal'

const ModalAdd: React.FC = () => {
  const { modalAdd, setModalAdd } = useModal()
  const { collectionData, collectionOption, updateCollection } = useCollection()
  const [collection, setCollection] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    setCollection([])
  }, [modalAdd])

  const close = () => {
    setModalAdd({ visible: false })
    setError('')
  }

  const addToCollection = (collect: string, newCollection: any) => {
    const index = newCollection.findIndex(
      (cData: any) => cData.name === collect,
    )
    newCollection[index].entries.push({
      mediaId: modalAdd.animeId,
      media: modalAdd.anime,
    })
    return newCollection
  }

  const addToNewCollection = (collect: string, newCollection: any) => {
    const entries = []
    entries.push({ mediaId: modalAdd.animeId, media: modalAdd.anime })
    newCollection.push({
      name: collect,
      entries: entries,
    })
    return newCollection
  }

  const handleChange = (options: any) => {
    setCollection(options)
  }

  const save = () => {
    if (collection.length === 0) {
      setError('Choose at least 1 collection')
      return
    }
    const newCollection = [...collectionData]
    collection.forEach((col: any) => {
      if (isCollectionExist(col.value, collectionData)) {
        addToCollection(col.value, newCollection)
      } else {
        addToNewCollection(col.value, newCollection)
      }
    })
    updateCollection(newCollection)
    setModalAdd({ visible: false })
  }

  if (!modalAdd.visible) return null

  return (
    <ModalContainer>
      <ModalHeader title="Add to Collection" />
      <Body>
        <div className="label">Collection</div>
        <CreateableSelect
          options={collectionOption}
          onChange={handleChange}
          isMulti
        />
        <div className="error">{error}</div>
      </Body>
      <ModalFooter
        action="add"
        actionClick={save}
        disabled={collection.length === 0 ? true : false}
        cancel={close}
      />
    </ModalContainer>
  )
}

export default ModalAdd
