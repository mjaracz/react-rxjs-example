export interface RootState {
  usersList: UsersListState
}

export interface UsersListState {
  users: User[]
  isLoading: boolean
  error: Error
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: address
  phone: string
  website: string
  company: company
}

type address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: geo
}

type geo = {
  lat: string
  lng: string
}

type company = {
  name: string
  catchPhrase: string
  bs: string
}