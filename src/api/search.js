import request from '../utils/requests'

export function fetchList(query) {
    return request({
        url: 'search/',
        method: 'get',
        params: query
    })
}
