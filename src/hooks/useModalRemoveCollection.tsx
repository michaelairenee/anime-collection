import { useState } from 'react'
import { Modal } from '../types/modal'

const useModalRemoveCollection = () => {
  const [modalRemoveCollection, setModalRemoveCollection] = useState<Modal>({
    visible: false,
  })

  return { modalRemoveCollection, setModalRemoveCollection }
}

export default useModalRemoveCollection
