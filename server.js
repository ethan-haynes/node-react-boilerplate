import path from 'path'
import express from 'express'
import config from './config'
import apiRouter from './api'
import serverRender from './serverRender'

const server = express()

server.set( 'view engine', 'ejs' )

server.get( [ '/','/people/:peopleId' ], ( req, res ) => {
  serverRender( req.params.peopleId )
    .then( ({ initialMarkup, initialData }) => {
      res.render( 'index', {
        initialMarkup,
        initialData
      })
    })
    .catch( console.error )
})

server.use( '/api', apiRouter )
server.use( express.static( 'public' ) )

server.listen( config.port, config.host, ( ) => {
  console.log( 'Express listening on port ', config.port )
})
