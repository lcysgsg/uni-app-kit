// 覆盖 openapi 脚本生成的接口类型
declare namespace API {
  // https://stackoverflow.com/questions/48228735/untyped-function-calls-may-not-accept-type-arguments-angular-5-http-calls/48228762
  // type JsonResult = HttpClient;
  type JsonResult = {
    code?: number;
    msg?: string;
    content?: ant;
  };

  type 查询字段 = {
    /** 查询名称 数据库里面字段 */
    name?: string;
    /** 该字段的值 */
    value?: any;
    /** 判断  eq =  , like 模糊 ，ge 大于等于，le 小于等于，orderByDesc 倒序，orderByAsc 顺序 */
    symbols?: string;
  };
}
