import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import Breadcrumb from './breadcrumb'

describe('Breadcrumb', () => {
  it('navigates to the correct parent link when the parent text is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Breadcrumb current="Page 1" parent="anime" />
      </MemoryRouter>,
    )
    const parentLink = getByText('Anime')
    fireEvent.click(parentLink)
  })

  it('navigates to the correct parent link when the parent text is clicked scenario 2', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Breadcrumb current="Page 1" parent="Category" />
      </MemoryRouter>,
    )
    const parentLink = getByText('Category')
    fireEvent.click(parentLink)
  })
})
