/**
 * requestAnimationFrame polyfill
 */

// import { isServer } from '..';

let prev = Date.now();

/* istanbul ignore next */
function fallback(fn) {
  const curr = Date.now();
  let ms = Math.max(0, 16 - (curr - prev));
  // 支付宝小程序做毫秒定时器会卡
  // #ifdef MP-ALIPAY
  ms = 1000;
  // #endif
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
// const root = (isServer ? global : window) as Window;

// 支付宝小程序会提示 requestAnimationFrame is not defined， 然后gg
/* istanbul ignore next */
let iRaf = null;
let iCancel = null;
try {
  iRaf = requestAnimationFrame || fallback;
  iCancel = cancelAnimationFrame || clearTimeout;
} catch (error) {
  console.error("[catch] requestAnimationFrame polyfill raf.js", error);
  iRaf = fallback;
  iCancel = clearTimeout;
}

export function raf(fn) {
  return iRaf.call(this, fn);
}

// double raf for animation
export function doubleRaf(fn) {
  raf(() => {
    raf(fn);
  });
}

export function cancelRaf(id) {
  iCancel.call(this, id);
}
