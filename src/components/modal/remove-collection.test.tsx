import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ModalRemoveCollection from './remove-collection'

// Mock the context and necessary hooks
jest.mock('../../context/useModal', () => ({
  useModal: () => ({
    modalRemoveCollection: { visible: true, collectionId: 'collection1' },
    setModalRemoveCollection: jest.fn(),
  }),
}))

describe('ModalRemoveCollection', () => {
  it('renders without crashing', () => {
    const { container } = render(<ModalRemoveCollection />)
    expect(container).toBeInTheDocument()
  })

  it('should display the correct message for the collection to remove', () => {
    const { getByText } = render(<ModalRemoveCollection />)
    expect(
      getByText('Are you sure want to remove collection collection1?'),
    ).toBeInTheDocument()
  })
})
