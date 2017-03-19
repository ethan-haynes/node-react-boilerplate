import config from './config'
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'

import express from 'express'
const server = express()

server.use( sassMiddleware({
  src: path.join( __dirname, 'sass' ),
  dest: path.join( __dirname, 'public' ),
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/prefix'
}))


server.set( 'view engine', 'ejs' )

import serverRender from './serverRender'

server.get( [ '/','/contest/:contestId' ], ( req, res ) => {
  serverRender( req.params.contestId )
    .then( ({ initialMarkup, initialData }) => {
      res.render( 'index', {
        initialMarkup,
        initialData
      })
      .catch( console.error )
    })
    .catch( console.error )
})

server.use( '/api', apiRouter )
server.use( express.static( 'public' ) )

server.listen( config.port, ( ) => {
  console.log( 'Express listening on port ', config.port )
})