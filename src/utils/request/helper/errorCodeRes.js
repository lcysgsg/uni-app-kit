/**
 * 错误返回码 统一处理
 */
export default function apiErrorCodeHandling(error) {
  // console.error('apiErrorCodeHandling: ', console.log(JSON.stringify(error)))
  // 错误返回码
  let code = Number(error.data.error_code);
  let msg = error.data.message || '';

  switch (code) {
    // 登录错误
    case 10000:
      // message = `${message}`
      console.log('[request]登录失效');
      break;
    default:
      msg = `ERROR_CODE:${code}::UNKNOWN ERROR`;
      break;
  }

  return {
    ...error,
    msg: msg,
  };
}
