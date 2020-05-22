import request from '../utils/requests'
// 获取所有AT trackers
export function getTrackerAll(query) {
    return request({
        url: 'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all.txt ',
        method: 'get',
        params: query
    })
}