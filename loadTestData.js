const { MongoClient } = require('mongodb')
const assert = require('assert')

MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
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
    console.log(response)
      db.close()
  })
})
