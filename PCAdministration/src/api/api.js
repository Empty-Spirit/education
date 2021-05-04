import axios from 'axios';
import { loginreq, req } from './axiosFun';
// 系统管理
// 获取菜单 
// export const menuList = (params) => { return req("post", "/api/systemMenuController/selectSystemMenuByCond", params) };

// /**
//  * 用户管理 
//  **/
// // 用户管理-获取学生列表
// export const userList = (params) => { return req("post", "/api/studentInfoController/selectStudentInfoByCond", params) };

const api = {
  system: {
    menuList: (params) => { return req("post", "/api/systemMenuController/selectSystemMenuByCond", params) } //菜单列表
  },
  user:{
    userList:(params) => { return req("post", "/api/systemUserController/selectSystemUserByCond", params) } //用户列表
  }
}
export default api

