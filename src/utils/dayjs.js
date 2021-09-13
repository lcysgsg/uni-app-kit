/**
 * 统一加载的 dayjs 及其扩展
 * 常用于评论时间等
 *
 * - zh-cn, 中文语言包
 *
 * - relativeTime 相对时间计算， 计算两个时间相隔了大约多久
 *   e.g. dayjs(...).from(dayjs(...))
 *
 * - updateLocale 更新语言描述， 更新了 relativeTime 扩展的中文语言描述
 *   dayjs(...).locale("zh-cn").form(dayjs(...))
 *   => 几秒前
 */

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import dayjsRelativeTime from 'dayjs/plugin/relativeTime'
import dayjsUpdateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(dayjsUpdateLocale)
dayjs.extend(dayjsRelativeTime)

dayjs.updateLocale('zh-cn', {
  relativeTime: {
    future: '%s后',
    past: '%s前',
    s: '几秒',
    m: '1分钟',
    mm: '%d分钟',
    h: '1小时',
    hh: '%d小时',
    d: '1天',
    dd: '%d天',
    M: '1个月',
    MM: '%d月',
    y: '1年',
    yy: '%d年',
  },
})

export default dayjs
