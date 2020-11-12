import req from './request.js'



// 首页搜索
export let getSearch =  (options)  => {
  return req.get('/search/', options)
}
