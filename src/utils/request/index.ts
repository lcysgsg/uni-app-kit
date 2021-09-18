import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosAdapterUniapp from 'axios-adapter-uniapp';
import errorCodeRes from './helper/errorCodeRes';
import errorCodeHttp from './helper/errorCodeHttp';

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  adapter: axiosAdapterUniapp,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request拦截器
instance.interceptors.request.use(
  (config) => {
    // console.log("[info] interceptors.request :>> ", config);
    // let data = filterObjectNullVal(config.data);
    // if (config.method === 'get') {
    //   config.params = data;
    //   delete config.data;
    // }
    // if (config.method === 'post') {
    //   if (isUploadFile(config)) {
    //     data = filterObjectNullVal(config.formData);
    //     config.formData = data;
    //   }
    // }
    return config;
  },
  (error) => {
    // console.error("interceptors.request.catch: ", error);
    Promise.reject(error);
  },
);

// response拦截器
instance.interceptors.response.use(
  (response) => {
    // console.log("interceptors.response :>> ", response);
    // 服务端返回的状态码不等于200，则reject()
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    if (typeof response.data === 'string') {
      response.data = JSON.parse(response.data);
    }
    // 如果接口错误码不为0，则进行错误处理
    const isInvalidResult = response.data.code !== 200;
    if (isInvalidResult) {
      return Promise.reject(errorCodeRes(response));
    }

    return response.data.content;
  },

  // HTTP 状态码 错误处理
  (error) => {
    if (axios.isCancel(error)) {
      console.log('[request] interceptors.response.catch::Request canceled', error);
      Promise.reject(error);
    } else {
      Promise.reject(errorCodeHttp(error));
    }
  },
);

export default instance;

// 兼容 openapi-gen
export function request<T>(url: string, params: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return instance.request({
    url,
    ...params,
  });
}
