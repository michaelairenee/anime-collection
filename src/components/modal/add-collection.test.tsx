import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ModalAddCollection from './add-collection'

// Mock the context and necessary hooks
jest.mock('../../context/useModal', () => ({
  useModal: () => ({
    modalAddCollection: { visible: true },
    setModalAddCollection: jest.fn(),
  }),
}))

describe('ModalAddCollection', () => {
  it('renders without crashing', () => {
    const { container } = render(<ModalAddCollection />)
    expect(container).toBeInTheDocument()
  })

  it('should display the correct header', () => {
    const { getByText } = render(<ModalAddCollection />)
    expect(getByText('Add New Collection')).toBeInTheDocument()
  })
})
