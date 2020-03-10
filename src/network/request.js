import axios from 'axios'
export function request(config){
  const instance =new axios.create({
    baseURL:'http://123.207.32.32:8000/api/wh',
    //baseURL:'http://106.54.54.237:8000/api/wh',
    timeout:5000
  })

  instance.interceptors.request.use(config => {
    //console.log(config);
    return config
  },error => {
    //console.log(err);
  })
  instance.interceptors.response.use(res => {
    //console.log(res);
    return res.data
  },error => {
    //console.log(err);
  })
  return instance(config)
}
