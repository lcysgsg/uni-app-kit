/**
 * 错误返回码 统一处理
 */
export default function apiErrorCodeHandling(error) {
  // console.error('apiErrorCodeHandling: ', console.log(JSON.stringify(error)))
  // 错误返回码
  let error_code = Number(error.data.error_code)
  let msg = error.data.message || ''

  switch (error_code) {
    // 登录错误
    case 10001:
      // message = `${message}`
      break
    // 系统繁忙
    case -1:
    case 10002: // 参数丢失
    case 10003: // 参数错误
    case 10004: // 权限错误fa
    case 10005: // 签名错误
    case 10006: // 参数非法
    case 10007: // 验证错误
    case 10008: // 数据错误
      msg = `${msg}【${error_code}】`
      break
    case 99999:
      msg = `${msg}`
      break

    // token过期
    case 30004:
      // message = `ERROR_CODE:${error_code}::TOKEN_EXPIRE`
      msg = `登录已失效，请重新登录`
      // $store.dispatch("account/handleTokenInvalid");
      // uni.navigateTo({
      //   url: "/pages/authPage/authUser",
      // });
      break

    default:
      msg = `ERROR_CODE:${error_code}::UNKNOWN ERROR`
      break
  }

  return {
    ...error,
    msg: msg,
  }
}
