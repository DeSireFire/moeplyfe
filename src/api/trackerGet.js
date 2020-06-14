import request from '../utils/requests'

// 获取所有AT trackers
export function getTracker(trackersURL) {
    return request({
        url: 'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/' + trackersURL,
        method: 'get',
    })
}