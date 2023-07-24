import { useState } from 'react'
import { Modal } from '../types/modal'

const useModalEditCollection = () => {
  const [modalEditCollection, setModalEditCollection] = useState<Modal>({
    visible: false,
  })

  return { modalEditCollection, setModalEditCollection }
}

export default useModalEditCollection
