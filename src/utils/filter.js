import Vue from 'vue'
import moment from 'moment/moment'
Vue.filter('fixTwoNumber', (value = 0) => {
  let val = Math.round(value * 100) / 100
  return val.toFixed(2)
})
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  // 判断数据如果为空返回'--' 否则返回日期
  if (!dataStr) {
    return ' -- '
  }
  return moment(dataStr).format(pattern)
})