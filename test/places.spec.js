/* eslint-disable no-undef */
const app = require('../app')
const supertest = require('supertest')
const chai = require('chai')
const placesDb = require('../db/places')
const dbConfig = require('../knexfile')['testing']
const knex = require('knex')(dbConfig)

const api = supertest(app)
const expect = chai.expect

describe('api/v1/places', () => {
  describe('post', () => {
    it('should create a new place', done => {
      api
        .post('/api/v1/places')
        .expect(201)
        .end((error, result) => {
          if (error) return done(error)

          const { id } = result.body

          expect(id).to.be.a('number')

          placesDb.getById(id).then(place => {
            expect(place.id).to.equal(id)
            done()
          })
        })
    })
  })
})
