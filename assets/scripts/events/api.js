'use strict'

const app = require('../app.js')

const createEvent = function (data) {
  console.log('passing through events api.js')
  return $.ajax({
    url: app.host + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getAllEvents = function () {
  console.log('passing through events api.js')
  return $.ajax({
    url: app.host + '/events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getEvent = function (data) {
  console.log('passing through events api.js')
  return $.ajax({
    url: app.host + '/events/' + app.events._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateEvent = function (data, id) {
  console.log('passing through events api.js')
  return $.ajax({
    url: app.host + '/events/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'event': {
        'text': data
      }
    }
  })
}

const deleteEvent = function (id) {
  console.log('passing through events api.js')
  return $.ajax({
    url: app.host + '/events/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent
}
