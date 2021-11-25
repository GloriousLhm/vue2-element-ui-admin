const checkLogin = function () {
  return localStorage.getItem('userId')
}

export {
  checkLogin
}