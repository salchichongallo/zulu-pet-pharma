export class PetService {
  static counter = 0
  static loadAllPets() {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            {
              id: ++this.counter,
              name: 'Izzy',
              petType: 'dog',
              breed: 'Terrier',
              birthDate: '2021-01-01',
              owner: {
                firstName: 'John',
                lastName: 'Doe',
                address: 'test address',
                phone: '123 456 7890',
                email: 'john@doe.com',
              },
              createdAt: new Date('2021-01-11'),
            },
            {
              id: ++this.counter,
              name: 'Buzzy',
              petType: 'snake',
              breed: 'Boa',
              birthDate: '2018-02-15',
              owner: {
                firstName: 'Jane',
                lastName: 'Doe',
                address: 'test address',
                phone: '123 456 7890',
                email: 'jane@doe.com',
              },
            },
          ]),
        500
      )
    })
  }

  static register(pet) {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            id: ++this.count,
            ...pet,
          }),
        1500
      )
    })
  }

  static update(pet) {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            ...pet,
            updatedAt: new Date(),
          }),
        1500
      )
    })
  }

  static delete(pet) {
    return new Promise(resolve => {
      setTimeout(() => resolve(pet), 1500)
    })
  }
}
