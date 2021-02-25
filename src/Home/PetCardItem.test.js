import React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import * as petUtils from 'pet/formatPetAge'
import PetCardItem from './PetCardItem'

const renderPetCard = (props = {}) =>
  render(
    <PetCardItem
      name="izzy"
      petType="dog"
      breed="terrier"
      birthDate="2021-01-01"
      ownerName="john"
      ownerLastName="doe"
      {...props}
    />
  )

test('renders correctly', () => {
  renderPetCard()
  expect(screen.queryByTestId('PetCardItem')).toBeInTheDocument()
  expect(screen.queryByAltText('dog')).toBeInTheDocument()
  expect(screen.getByText('izzy').nodeName).toBe('H1')
  expect(screen.queryByText('terrier')).toBeInTheDocument()
  expect(screen.queryByTestId('PetCardItem-age')).toBeInTheDocument()
  expect(screen.queryByTestId('PetCardItem-owner')).toBeInTheDocument()
})

test("renders owner's full name", () => {
  renderPetCard({ownerName: 'john', ownerLastName: 'doe'})
  expect(screen.getByTestId('PetCardItem-owner')).toHaveTextContent('john doe')
})

test('formats birth date', () => {
  const birthDate = '2021-01-01'
  jest.spyOn(petUtils, 'formatPetAge').mockReturnValue('test age')

  renderPetCard({birthDate})

  expect(screen.getByTestId('PetCardItem-age')).toHaveTextContent('test age')
  expect(petUtils.formatPetAge).toHaveBeenCalledWith(birthDate)
})

test('pet detail button', () => {
  const onDetailsClick = jest.fn()
  renderPetCard({onDetailsClick})

  const button = screen.queryByText('Details')
  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute('type', 'button')
  expect(button).not.toBeDisabled()

  userEvent.click(button)
  expect(onDetailsClick).toHaveBeenCalled()
})
