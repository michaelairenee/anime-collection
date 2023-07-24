import { useState } from 'react'
import { Modal } from '../types/modal'

const useModalAddCollection = () => {
  const [modalAddCollection, setModalAddCollection] = useState<Modal>({
    visible: false,
  })

  return { modalAddCollection, setModalAddCollection }
}

export default useModalAddCollection
