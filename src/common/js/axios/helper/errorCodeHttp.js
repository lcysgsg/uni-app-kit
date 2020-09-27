/**
 * HTTP 状态码 错误处理
 */
export default function httpCodeHandling(response) {
  console.error('httpCodeHandling: ', JSON.stringify(response))

  const error = {
    _data: response,
  }

  if (!response || response.errMsg === 'request:fail abort') {
    error.message = '无法连接至服务器'
    return false
  }

  const code = response.statusCode
  switch (code) {
    case 404:
      error.message = '接口不存在'
      break
    case 408:
      error.message = '服务器繁忙,请稍后再试'
      break
    case 500:
      error.message = '服务器错误,请稍后再试'
      break
    default:
      error.message = `UNHANDLED_HTTP_CODE:${code}`
      break
  }

  return error
}
