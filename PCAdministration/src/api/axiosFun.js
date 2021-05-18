import axios from 'axios';

// 登录请求方法
const loginreq = (method, url, params) => {
    return axios({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: params,
        traditional: true,
        transformRequest: [
            function(data) {
                let ret = ''
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) +
                        '=' +
                        encodeURIComponent(data[it]) +
                        '&'
                }
                return ret
            }
        ]
    }).then(res => res.data);
};
// 通用公用方法
const req = (method, url, params) => {
    return axios({
        method: method.toUpperCase(),
        url: url ,
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('logintoken')
        },
        params:params,
        data: params,
        traditional: true,
        // transformRequest: [ 
        //     function(data) {
        //         let ret = ''
        //         for (let it in data) {
        //             ret +=
        //                 encodeURIComponent(it) +
        //                 '=' +
        //                 encodeURIComponent(data[it]) +
        //                 '&'
        //         }
        //         return ret
        //     }
        // ]
    }).then(res => res.data.data);
};

const change =  (formData) => {
  let queryString = ''
        Object.keys(formData).forEach(key => {
          queryString += `${key}=${formData[key]}&`
        })
        if (queryString) { // id=1&xxx=abc&
          // 去除最后的&
          queryString = queryString.substring(0, queryString.length-1)
          // 接到url
        }
          return '?' + queryString
};


export {
    loginreq,
    req
}