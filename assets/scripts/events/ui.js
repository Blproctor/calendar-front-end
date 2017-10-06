'use strict'

// const app = require('../app.js')

const createEventSuccess = function (data) {
  console.log('You successfully created an event')
}

const createEventError = function (response) {
  console.error(response)
}

const updateEventSuccess = function () {
  console.log('you successfully updated an event!')
}

const updateEventError = function () {
  console.log('nice try dude, no dice on that update, sorry')
}

const getAllEventsSuccess = function (data) {
  console.log('first line inside function in ui.js')
  console.log(data.events)
  $('#table-container').empty()
  $('#table-container').show()
  // incorporating Handlebars into function
  $(() => {
    const theTemplateScript = $('#events-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define the data object
    const context = {
      fields: data.events
    }
    // Pass the data to template
    const theCompiledHtml = theTemplate(context)
    // Add compiled html to page
    $('#table-container').prepend(theCompiledHtml)
    console.log('last line within function in ui.js')
  })
}

const getAllEventsError = function (response) {
  console.error(response)
}

const deleteEventSuccess = function (data) {
  console.log(data)
  console.log('you successfully deleted an event!')
}

const deleteEventError = function (error) {
  console.error(error)
  console.log('you never had your car')
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
