import { useState } from 'react'
import { Modal } from '../types/modal'

const useModalRemove = () => {
  const [modalRemove, setModalRemove] = useState<Modal>({
    visible: false,
  })

  return { modalRemove, setModalRemove }
}

export default useModalRemove
