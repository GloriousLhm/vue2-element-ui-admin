const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('手机号不能为空'))
  } else {
    const reg = /^1[0-9]\d{9}$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的手机号'))
    }
  }
}

const uploadValidImage = (file) => {
  let fileTypes = ['jpg', 'jpeg', 'png', 'gif']
  let fileName = file.name.toLowerCase()
  let fileType = fileName.slice(fileName.lastIndexOf('.') + 1, fileName.length)
  // 上传的文件不符合fileTypes
  if (fileTypes.indexOf(fileType) == -1) {
    return false
  } else {
    return true
  }
}
export {
  checkPhone,
  uploadValidImage
}