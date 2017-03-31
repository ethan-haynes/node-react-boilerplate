import express from 'express'
import { MongoClient } from 'mongodb'
import assert from 'assert'
import config from '../config'

let mdb
MongoClient.connect( config.mongodbUri, ( err,db ) => {
  assert.equal( null,err )

  mdb = db
})

const router = express.Router()

router.get( '/people', ( req, res ) => {
  mdb.collection( 'people' )
    .find({})
    .then( people => res.send( people ) )
    .catch( console.err )
})

router.get( '/people/:peopleId', ( req, res ) => {
  mdb.collection( 'people' )
    .findOne( { id: Number(req.params.peopleId) } )
    .then( person => res.send( person ) )
    .catch( console.err )
})

export default router
