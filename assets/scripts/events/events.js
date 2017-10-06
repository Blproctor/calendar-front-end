'use strict'

const eventApi = require('./api.js')
const eventUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const createEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through events events.js')
  console.log(data)
  eventApi.createEvent(data)
    .then(eventUi.createEventSuccess)
    .catch(eventUi.createEventError)
}

const getAllEvents = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  eventApi.getAllEvents(data)
    .then(eventUi.getAllEventsSuccess)
    .catch(eventUi.getAllEventsError)
}

const getEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  eventApi.getEvent(data)
    .then(eventUi.getEventSuccess)
    .catch(eventUi.getEventError)
}

const updateEvent = function (event) {
  event.preventDefault()
  const data = $('#thing-to-update').val()
  const id = this.getAttribute('data-id')
  eventApi.updateEvent(data, id)
    .then(eventUi.updateEventSuccess)
    .catch(eventUi.updateEventError)
}

const deleteEvent = function (event) {
  const id = this.getAttribute('data-id')
  event.preventDefault()
  eventApi.deleteEvent(id)
    .then(eventUi.deleteEventSuccess)
    .catch(eventUi.deleteEventError)
}

module.exports = {
  createEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent
}
