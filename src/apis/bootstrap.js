
import request from "./request";

/**
 * 发送验证码，需要传递email
 *
 * @export
 * @param {*} body
 * @return {*}
 */
export function fetchSendCode(body) {
  return request.post("/api/help/send/verification/code", body);
}

/**
 * 用户注册
 *
 * @export
 * @param {*} body
 * @return {*}
 */
export function fetchRegister(body) {
  return request.post("/api/auth/register", body);
}

/**
 * 用户登录
 *
 * @export
 * @param {*} body
 * @return {*}
 */
export function fetchLogin(body) {
  return request.post("/api/auth/login", body);
}
