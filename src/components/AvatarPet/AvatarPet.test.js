import React from 'react'
import {render, screen} from '@testing-library/react'
import * as pets from './pets'
import AvatarPet from './AvatarPet'

const getImgUrl = jest.spyOn(pets, 'getImgUrl')

test('avatar renders correctly', () => {
  render(<AvatarPet />)
  expect(screen.queryByTestId('AvatarPet')).toBeInTheDocument()
})

test.each([
  ['foo', './bar.png'],
  ['john', './doe.jpg'],
  ['jane', './doe.svg'],
])('prop pet="%s" should render image "%s"', (pet, imageUrl) => {
  getImgUrl.mockReturnValue(imageUrl)
  render(<AvatarPet pet={pet} />)
  const img = screen.queryByAltText(pet)
  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('src', imageUrl)
})

test('default pet should be a dog', () => {
  getImgUrl.mockReturnValue('dog-url')
  render(<AvatarPet />)
  expect(screen.queryByAltText('dog')).toHaveAttribute('src', 'dog-url')
})

test('default avatar size should be 56px', () => {
  render(<AvatarPet />)
  expect(screen.getByTestId('AvatarPet')).toHaveStyle({
    width: '56px',
    height: '56px',
  })
})

test('`size` prop should change the avatar size', () => {
  render(<AvatarPet size={32} />)
  expect(screen.getByTestId('AvatarPet')).toHaveStyle({
    width: '32px',
    height: '32px',
  })
})
