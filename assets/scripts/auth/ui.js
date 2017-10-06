'use strict'

const app = require('../app.js')

const signUpSuccess = function () {
  console.log('passing through ui.js')
  console.log('you successfully signed up!')
}

const signUpError = function (response) {
  console.error(response)
}

const signInSuccess = function (data) {
  console.log('passing through ui.js')
  console.log('you successfully signed in')
  $('#show-table').show()
  $('#signup-account').hide()
  $('#signin-account').hide()
  $('#change-pw-h1').hide()
  $('#sign-out-h1').hide()
  $('#change-password').show()
  $('#signout-account').show()
  $('#create-event').show()
  $('#update-event').show()
  $('#delete-event').show()
  app.user = data.user
}

const signInError = function (response) {
  console.error(response)
}

const changePasswordSuccess = function () {
  console.log('passing through ui.js')
  console.log('you successfully changed your password!')
  $('#change-password').hide()
  $('#signout-account').hide()
  $('#signup-account').show()
  $('#signin-account').show()
  $('#show-table').hide()
  $('#table-container').hide()
}

const changePasswordError = function (response) {
  console.error(response)
}

const signOutSuccess = function () {
  console.log('passing through ui.js')
  console.log('you successfully signed out!')
  $('#signin-account').show()
  $('#signup-account').show()
  $('#show-table').hide()
  $('#table-container').hide()
  $('#change-password').hide()
  $('#signout-account').hide()
  $('#create-event').hide()
  $('#update-event').hide()
  $('#delete-event').hide()
  app.user = null
}

const signOutError = function (response) {
  console.error(response)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
