'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it 
  request(app)
  .get('/groot')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      t.error(err);
    } 
    t.deepEqual(res.body, {error: 'I am Groot!'});
  });
  t.end();
});


