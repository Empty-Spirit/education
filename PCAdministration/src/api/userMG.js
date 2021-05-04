import axios from 'axios';
import { loginreq, req } from './axiosFun';

// 登录接口 
export const login = (params) => { return loginreq("post", "/api/login", params) };

/**
 * 用户管理 
 **/
// 用户管理-获取学生列表
export const userList = (params) => { return req("post", "/api/studentInfoController/selectStudentInfoByCond", params) };
