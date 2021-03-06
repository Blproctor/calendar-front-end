'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const eventEvents = require('./events/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('#signup-account').on('submit', authEvents.signUp)
  $('#signin-account').on('submit', authEvents.signIn)
  $('#change-password').on('submit', authEvents.changePassword)
  $('#signout-account').on('submit', authEvents.signOut)
  // click handler to show the weekly events
  $('#show-table').on('click', eventEvents.getAllEvents)
  // hide show-table button until user successfully signs in
  $('#show-table').hide()
  $('#create-event').on('submit', eventEvents.createEvent)
  // $('#show-event').on('click', eventEvents.getEvent)
  $('#create-event').hide()
  $('#update-event').hide()
  $('#delete-event').hide()
  $('#change-password').hide()
  $('#signout-account').hide()
  $('#delete-event-button').on('click', eventEvents.deleteEvent)
  $('#update-event').on('submit', eventEvents.updateEvent)
})

$(document).on('click', '#update-MEH', eventEvents.updateEvent)
$(document).on('click', '#delete-event-button', eventEvents.deleteEvent)
