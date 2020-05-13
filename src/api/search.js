import request from '@/utils/request'

export function fetchList(query) {
    return request({
        url: '/api/search/',
        method: 'get',
        params: query
    })
}
