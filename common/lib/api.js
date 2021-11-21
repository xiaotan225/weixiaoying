import req from './request.js'



// 获取视频列表
export let getVodList = async (options,isJia) => {
	let {
		type,
		tag,
		sort,
		page_limit,
		page_start,
		q,
		page
	} = options
	return req.get('/j/search_subjects', {
		type: type || '',
		tag: tag || '',
		sort: sort || '',
		page_limit: page_limit || 6,
		page_start: page_start || 0,
		playable: 'on',
		q:q || '',
		page: page || ''
	},isJia)
}



// 获取视频详情
export let getVideoDatails = (options) => {
	return req.get('/j/subject_abstract', options)
}


// 搜索视频
export let getSearch = (options) => {
	return req.get('/j/subject_suggest', options)
}



// 视频类型筛选查询
export let getvodClassifyList = (options, isJia) => {
	return req.get('/j/new_search_subjects', options, isJia)
}

