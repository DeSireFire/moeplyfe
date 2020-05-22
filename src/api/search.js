import request from '../utils/requests'
// 获取数据列表
export function fetchList(query) {
    return request({
        url: 'search/',
        method: 'get',
        params: query
    })
}
