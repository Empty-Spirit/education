import axios from 'axios';
import { loginreq, req } from './axiosFun';

const api = {
  // 系统管理
  system: {
    menuList: (params) => { return req("post", "/api/systemMenuController/selectSystemMenuByCond", params) } //菜单列表
  },
  // 人员管理
  user:{
    teacherList:(params) => { return req("post", "/api/teacherInfoController/selectTeacherInfoByCond", params) }, //教师列表
    studentList:(params) => { return req("post", "/api/studentInfoController/selectStudentInfoByCond", params) }, //学生列表
    gradeList:(params) => { return req("post", "/api/gradeInfoController/selectGradeInfoByCond", params) }, //年级列表
    subjectList:(params) => { return req("post", "/api/subjectInfoController/selectSubjectInfoByCond", params) }, //科目列表
    roleList:(params) => { return req("post", "/api/systemRoleController/selectSystemRoleByCond", params) }, //角色列表
    userList:(params) => { return req("post", "/api/systemUserController/selectSystemUserByCond", params) }, //用户列表
  }
}
export default api

