import { r } from './http'

const api = {
  user: {
    userList: r('GET user/userList.php')
  }
}
export default api
