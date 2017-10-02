'use strict'

const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signUp(data)
    .then(userUi.signUpSuccess)
    .catch(userUi.signUpError)
}

const signIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
    .then(userUi.signInSuccess)
    .catch(userUi.signInError)
}

const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePassword(data)
    .then(userUi.changePasswordSuccess)
    .catch(userUi.changePasswordError)
}

const signOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.signOutSuccess)
    .catch(userUi.signOutError)
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
