import axios from 'axios';
import { loginreq, req } from './axiosFun';
// 系统管理
// 获取菜单 
export const menuList = (params) => { return req("post", "/api/systemMenuController/selectSystemMenuByCond", params) };
