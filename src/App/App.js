import React from 'react'
import manUrl from './man.png'

function App() {
  return (
    <div className="container-fluid" style={{maxWidth: 'var(--breakpoint-sm)'}}>
      <header className="mt-4">
        <img src={manUrl} alt="" style={{maxWidth: 64}} className="mb-3" />
        <h1 className="h2">Pet Pharma</h1>
        <p className="text-secondary mb-0">Veterinary</p>
      </header>
    </div>
  )
}

export default App
