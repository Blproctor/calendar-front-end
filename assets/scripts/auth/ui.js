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
  app.user = data.user
}

const signInError = function (response) {
  console.error(response)
}

const changePasswordSuccess = function () {
  console.log('passing through ui.js')
  console.log('you successfully changed your password!')
}

const changePasswordError = function (response) {
  console.error(response)
}

const signOutSuccess = function () {
  console.log('passing through ui.js')
  console.log('you successfully signed out!')
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
