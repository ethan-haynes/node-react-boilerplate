import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/comps/App'
import axios from 'axios'
import config from './config'

const getApiUrl = personId => {
  if ( personId ) {
    return `${config.serverUrl}/api/people/${personId}`
  }

  return `${config.serverUrl}/api/people`
}

const getInitialData = ( personId, apiData )  => {
  if ( personId ) {
    return {
      currentPersonId: apiData.id,
      people: {
        [apiData.id]: apiData
      }
    }
  }
  return {
    people: apiData
  }
}

const serverRender = ( personId ) =>
  axios.get( getApiUrl( personId ) )
    .then( res => {
      const initialData = getInitialData( personId, res.data )
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={ initialData }/>
        ),
        initialData
      }
    })
    .catch ( err => {
      console.error( err )
    })

export default serverRender
