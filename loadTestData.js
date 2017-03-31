import { MongoClient } from 'mongodb'
import assert from 'assert'
import config from './config'

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err)

  db.collection('people').insertMany([
    { id: 1,
      name: 'Frank Underwood',
      job: 'POTUS',
      address: `1600 Pennsylvania Avenue`},
    { id: 2,
      name: 'Claire Underwood',
      job: 'First Lady',
      address: `1600 Pennsylvania Avenue`},
    { id: 3,
      name: 'Will Conway',
      job: 'Governor of New York',
      address: '633 Third Avenue 38th Floor New York'}])
  .then(response => {
    console.info('Contests', response.insertedCount)
    db.collection('parties').insertMany([
      { id: 101, name: 'Mind Assembly', timestamp: new Date() },
      { id: 102, name: 'Brain Scaffold', timestamp: new Date() },
      { id: 103, name: 'Cash View', timestamp: new Date() },
      { id: 104, name: 'Currency Map', timestamp: new Date() },
      { id: 105, name: 'Cash Board', timestamp: new Date() },
      { id: 106, name: 'RootLib', timestamp: new Date() },
    ]).then(response => {
      console.info('Names', response.insertedCount);
      db.close()
    })
  })
})
