import axios from "axios";
const querystring = require("querystring");
const MOCK_URI = "/api/";
// const BASE_URI = "https://pdmsit.lynkco.cn/apis/"; //sit API SERVICE
// const BASE_URI = "https://collection-apigw-tra.lynkco.cn/"; //公测 API SERVICE
const BASE_URI =
  "/api/"; //uat API SERVICE
const service = axios.create();
const CONTENT_TYPES = {
  json: "application/json",
  form: "application/x-www-form-urlencoded",
  file: "multipart/form-data",
  xml: "text/xml"
};
const r = (path, contentType) => {
  const str = path.split(" ");
  const method = str[0];
  let url = str[1];
  if (!/^(http|https)/.test(url)) {
    url = BASE_URI + url;
  } else if (/^~/.test(url)) {
    url = url.substr(1);
  }
  return (params, body, ops) => {
    if (method === "GET") {
      params = Object.assign(params || {}, {
        _t: Math.floor(Math.random() * 10000000)
      });
    }
    const pathNames = [];
    url = url.replace(/{(\w|_)(\d|\w|_)*}/gi, match => {
      const pathName = match.substr(1, match.length - 2);
      if (pathNames.indexOf(pathName) === -1) {
        pathNames.push(pathName);
      }
      return (params || {})[pathName] || (body || {})[pathName];
    });
    for (let pathName of pathNames) {
      if (params && params[pathName]) {
        delete params[pathName];
      }
      if (body && body[pathName]) {
        delete body[pathName];
      }
    }
    const options = Object.assign({}, ops, {
      method: method,
      url: url,
      params: params,
      data: body,
      headers: {
        // "x-user-id": store.state.userId,
        // // apiKey: this.$cookies.get("apiKey") ? this.$cookies.get("apiKey") : "",
        // apiKey: store.state.apiKey,
        // // "X-Ca-stage": "TEST",
        // Authorization: "APPCODE 514c8a65625e43dc821f6b030cf9244b"
      }
    });
    if (contentType) {
      options.headers["Content-Type"] = contentType;
      switch (contentType) {
        case CONTENT_TYPES.file:
          options.data = new FormData();
          options.headers["X-Requested-With"] = "XMLHttpRequest";
          for (const key in body) {
            if (body.hasOwnProperty(key)) {
              options.data.append(key, body[key]);
            }
          }
          break;
        case CONTENT_TYPES.form:
          options.data = querystring.stringify(body);
          break;
        default:
          break;
      }
    }
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const promise = new Promise((resolve, reject) => {
      options.cancelToken = source.token;
      service
        .request(options)
        .then(res => {
          if (res.data.code) {
            if (res.data.code === 10001) {
              resolve(res.data.data);
            } else {
              res.data.message = res.data.message || res.data.msg;
              reject(res.data);
            }
          } else if (res.data.status) {
            if (res.data.status.code === "200") {
              resolve(res.data.data.data);
            } else {
              res.data.status.message = res.data.status.msg;
              reject(res.data.status);
            }
          } else {
            reject({
              message: "返回的数据结构不正确"
            });
          }
        })
        .catch(res => {
          reject(res);
        });
    });
    promise.abort = msg => {
      source.cancel(msg !== null && msg !== undefined ? msg : null);
    };
    return promise;
  };
};
const m = (path, contentType) => {
  const str = path.split(" ");
  const method = str[0];
  let url = str[1];
  return r(`${method} ${MOCK_URI}${url}`, contentType);
};
export { r, m, CONTENT_TYPES };
