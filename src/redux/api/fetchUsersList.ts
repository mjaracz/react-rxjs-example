import {from} from 'rxjs'

export const fetchUsersList = () => from(
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(res => res.json())
)