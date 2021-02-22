import {render, screen} from '@testing-library/react'
import App from './App'

test('app header', () => {
  render(<App />)
  expect(screen.queryByText('Pet Pharma')).toBeInTheDocument()
  expect(screen.queryByText('Veterinary')).toBeInTheDocument()
})
