import { useState } from 'react'
import { Modal } from '../types/modal'

const useModalAdd = () => {
  const [modalAdd, setModalAdd] = useState<Modal>({
    visible: false,
  })
  return { modalAdd, setModalAdd }
}

export default useModalAdd
