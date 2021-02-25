import React from 'react'

function AppLayout({children}) {
  return (
    <div
      className="container-fluid"
      style={{maxWidth: 'var(--breakpoint-sm)'}}
      data-testid="AppLayout"
    >
      {children}
    </div>
  )
}

export default AppLayout
