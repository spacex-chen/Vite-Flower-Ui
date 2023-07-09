/**
 * 登录表单提交请求数据类型
 */
export interface LoginReq {
  username: string;
  password: string;
}

/**
 * 注册表单提交请求数据类型
 */
export interface RegisterReq {
  username: string;
  password: string;
  email: string;
}
