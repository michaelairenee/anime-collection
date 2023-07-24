import React, { ReactNode, createContext, useContext } from 'react'
import useModalAdd from '../hooks/useModalAdd'
import useModalRemove from '../hooks/useModalRemove'
import useModalAddCollection from '../hooks/useModalAddCollection'
import useModalRemoveCollection from '../hooks/useModalRemoveCollection'
import { Modal } from '../types/modal'
import useModalEditCollection from '../hooks/useModalEditCollection'

type InitialProps = {
  modalAdd: Modal
  setModalAdd: React.Dispatch<React.SetStateAction<Modal>>

  modalRemove: Modal
  setModalRemove: React.Dispatch<React.SetStateAction<Modal>>

  modalAddCollection: Modal
  setModalAddCollection: React.Dispatch<React.SetStateAction<Modal>>

  modalEditCollection: Modal
  setModalEditCollection: React.Dispatch<React.SetStateAction<Modal>>

  modalRemoveCollection: Modal
  setModalRemoveCollection: React.Dispatch<React.SetStateAction<Modal>>
}

const initialState: InitialProps = {
  modalAdd: {
    visible: false,
  },
  setModalAdd: () => {},

  modalRemove: {
    visible: false,
  },
  setModalRemove: () => {},

  modalAddCollection: {
    visible: false,
  },
  setModalAddCollection: () => {},

  modalEditCollection: {
    visible: false,
  },
  setModalEditCollection: () => {},

  modalRemoveCollection: {
    visible: false,
  },
  setModalRemoveCollection: () => {},
}

const ModalContext = createContext(initialState)

interface ModalProps {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProps> = ({ children }) => {
  const { modalAdd, setModalAdd } = useModalAdd()
  const { modalRemove, setModalRemove } = useModalRemove()
  const { modalAddCollection, setModalAddCollection } = useModalAddCollection()
  const { modalEditCollection, setModalEditCollection } =
    useModalEditCollection()
  const { modalRemoveCollection, setModalRemoveCollection } =
    useModalRemoveCollection()

  return (
    <ModalContext.Provider
      value={{
        modalAdd,
        setModalAdd,
        modalRemove,
        setModalRemove,
        modalAddCollection,
        setModalAddCollection,
        modalEditCollection,
        setModalEditCollection,
        modalRemoveCollection,
        setModalRemoveCollection,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
