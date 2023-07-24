import React from 'react'
import ModalAdd from './add'
import ModalAddCollection from './add-collection'
import ModalRemove from './remove'
import ModalRemoveCollection from './remove-collection'

export const Modal = () => {
  return (
    <>
      <ModalAdd />
      <ModalRemove />
      <ModalAddCollection />
      <ModalRemoveCollection />
    </>
  )
}
