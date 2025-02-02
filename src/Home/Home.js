import React from 'react'
import AppLayout from 'components/AppLayout/AppLayout'
import manUrl from './man.png'
import PetList from './PetList'

function Home({onRegisterClick, onEditClick, onDeleteClick, pets = []}) {
  return (
    <AppLayout>
      <header className="mt-4">
        <img src={manUrl} style={{maxWidth: 64}} className="mb-3" alt="" />
        <h1 className="h2">Pet Pharma</h1>
        <p className="text-secondary mb-0">Veterinary</p>
      </header>
      <main>
        <div style={{paddingBottom: 96}}>
          <PetList
            pets={pets}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        </div>
        <footer className="fixed-bottom">
          <AppLayout>
            <div className="pb-4">
              <button
                type="button"
                onClick={onRegisterClick}
                className="btn btn-primary btn-lg btn-block shadow"
              >
                Register Your Pet
              </button>
            </div>
          </AppLayout>
        </footer>
      </main>
    </AppLayout>
  )
}

export default Home
