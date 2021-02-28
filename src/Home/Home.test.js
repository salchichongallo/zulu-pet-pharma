import React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import Home from './Home'

test('Home header', () => {
  render(<Home />)
  expect(screen.queryByText('Pet Pharma')).toBeInTheDocument()
  expect(screen.queryByText('Veterinary')).toBeInTheDocument()
})

test('register call to action', () => {
  const onRegisterClick = jest.fn()
  render(<Home onRegisterClick={onRegisterClick} />)
  userEvent.click(screen.getByText('Register Your Pet'))
  expect(onRegisterClick).toHaveBeenCalled()
})

describe('PetList', () => {
  it('should render the given pets', () => {
    const pets = [
      {
        id: 1,
        name: 'foo',
        owner: {},
      },
      {
        id: 2,
        name: 'bar',
        owner: {},
      },
    ]
    render(<Home pets={pets} />)
    const allPets = screen.queryAllByTestId('PetCardItem')
    expect(allPets).toHaveLength(pets.length)
    expect(screen.getByText('Pets').nodeName).toBe('H2')
  })
})
