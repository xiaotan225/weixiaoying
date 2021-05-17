import req from './request.js'



// 首页轮播图
export let getslideshow = (options)  => {
  return req.get('/slideshow', options)
}

// 获取首页公告
export let notice = (options)  => {
  return req.get('/notice', options)
}


// 获取首页更多热门
export let indexClassify = (options,isJia)  => {
  return req.get('/indexClassify', options,isJia)
}


// 获取视频详情
export let getVideoDatails = (options)  => {
  return req.get('/getVideoDatails', options)
}


// 特殊视频播放地址（后缀名）
export let getURL = (options)  => {
  return req.get('/getURL', options)
}
// 搜索视频
export let getSearch = (options)  => {
  return req.get('/search', options)
}

// 获取视频分类选项
export let getvodClassify = (options)  => {
  return req.get('/getvodClassify', options)
}

// 视频类型筛选查询
export let getvodClassifyList = (options,isJia)  => {
  return req.get('/getvodClassifyList', options,isJia)
}

// 微信授权登录
export let getwxuser = (options)  => {
  return req.post('/api/wxuser/getwxuser', options)
}

// 微信授权登录
export let wxUserLogin = (options)  => {
  return req.post('/api/wxuser/login', options)
}


// 用户收藏影片
export let collectVod = (options)  => {
  return req.post('/api/wxuser/collectVod', options,{
	  token:true
  })
}


// 获取是否用户收藏改影片
export let isCollectVod = (options)  => {
  return req.get('/api/wxuser/isCollectVod', options,{
	  token:true
  })
}


// 获取用户收藏影片和播放记录
export let getCollectVod = (options)  => {
  return req.get('/api/wxuser/getCollectVod', options,{
	  token:true
  })
}


// 反馈问题
export let feedbackIssue = (options)  => {
  return req.post('/api/wxuser/feedbackIssue', options,{
	  token:true
  })
}

// 热门搜索获取
export let hotSearch = (options)  => {
  return req.get('/hotSearch', options)
}

// // 热门搜索获取
export let test = (options)  => {
  return req.get('/test', options)
}



// 获取豆瓣评分
export let getScoreVod = (options)  => {
  return req.get('/getScoreVod', options)
}


// H5邮箱验证码获取
export let h5AuthCode = (options)  => {
  return req.post('/api/wxuser/h5AuthCode', options)
}

// H5账号注册
export let Hregister = (options)  => {
  return req.post('/api/wxuser/register', options)
}

// H5登录
export let h5login = (options)  => {
  return req.post('/api/wxuser/h5login', options)
}

// H5获取用户
export let geth5User = (options)  => {
  return req.post('/api/wxuser/geth5User', options,{
	  token:true
  })
}


// H5登录
export let getTodayVodList = (options)  => {
  return req.get('/getTodayVodList', options)
}










/*  
export default {
	 getslideshow(options) {
	  return req.get('/slideshow', options)
	}
}*/