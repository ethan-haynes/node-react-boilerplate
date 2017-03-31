import axios from 'axios'

export const fetchPerson = personId => {
  return axios.get( `http://localhost:80/api/people/${personId}` )
              .then( res => res.data )
}

export const fetchPeopleList = ( ) => {
  return axios.get( 'http://localhost:80/api/people/' )
              .then( res => res.data.contests )
}
