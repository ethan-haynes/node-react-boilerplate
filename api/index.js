import express from 'express'
import { MongoClient } from 'mongodb'
import assert from 'assert'
import config from '../config'
console.log("config", config.mongodbUri)
let mdb
MongoClient.connect( config.mongodbUri, ( err,db ) => {
  assert.equal( null,err )
  mdb = db
})

const router = express.Router()

router.get( '/people', ( req, res ) => {
  mdb.collection( 'people' )
    .find().toArray( (err, people) => {
        assert.equal(null, err)
        res.send( people )
    })
})

router.get( '/people/:peopleId', ( req, res ) => {
  mdb.collection( 'people' )
    .findOne( { id: Number(req.params.peopleId) }, (err, person) => {
      assert.equal(null, err)
      res.send( person )
    })
})

export default router
