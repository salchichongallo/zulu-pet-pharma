import React from 'react'
import Home from 'Home/Home'

const pets = [
  {
    id: 1,
    name: 'Izzy',
    petType: 'dog',
    breed: 'Terrier',
    birthDate: '2021-01-01',
    ownerName: 'Jimmy',
    ownerLastName: 'Murillo',
  },
  {
    id: 2,
    name: 'Buzzy',
    petType: 'snake',
    breed: 'Boa',
    birthDate: '2018-02-15',
    ownerName: 'Jane',
    ownerLastName: 'Doe',
  },
]

function App() {
  return <Home pets={pets} />
}

export default App
