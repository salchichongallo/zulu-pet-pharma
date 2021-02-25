import React from 'react'
import {render, screen} from '@testing-library/react'
import AppLayout from './AppLayout'

describe('AppLayout', () => {
  it('should render correctly', () => {
    render(<AppLayout />)
    expect(screen.queryByTestId('AppLayout')).toBeInTheDocument()
  })

  it('should have a max width equals to var(--breakpoint-sm)', () => {
    render(<AppLayout />)
    expect(screen.getByTestId('AppLayout')).toHaveStyle({
      maxWidth: 'var(--breakpoint-sm)',
    })
  })

  test('should render its children', () => {
    render(
      <AppLayout>
        <div data-testid="children">foo</div>
      </AppLayout>
    )
    const child = screen.queryByTestId('children')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('foo')
  })
})
