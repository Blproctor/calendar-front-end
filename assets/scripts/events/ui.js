'use strict'

// const app = require('../app.js')

const createEventSuccess = function () {
  console.log('You successfully created an event')
}

const createEventError = function (response) {
  console.error(response)
}

const updateEventSuccess = function () {
  console.log('you successfully updated an event!')
}

const updateEventError = function () {
  console.log('your update failed')
}

const getAllEventsSuccess = function (data) {
  console.log('passing through ui.js')
}

const getAllEventsError = function (response) {
  console.error(response)
}

const deleteEventSuccess = function (data) {
  console.log(data)
}

const deleteEventError = function (error) {
  console.error(error)
}

const getEventSuccess = function (data) {
  console.log(data)
}

const getEventError = function (error) {
  console.error(error)
}

module.exports = {
  createEventSuccess,
  createEventError,
  updateEventSuccess,
  updateEventError,
  getAllEventsSuccess,
  getAllEventsError,
  deleteEventSuccess,
  deleteEventError,
  getEventSuccess,
  getEventError
}
