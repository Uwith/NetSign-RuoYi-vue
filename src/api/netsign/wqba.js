import request from '@/utils/request'

// 查询备案信息列表
export function listWqba(query) {
  return request({
    url: '/netsign/wqba/list',
    method: 'get',
    params: query
  })
}

// 查询备案信息详细
export function getWqba(recordid) {
  return request({
    url: '/netsign/wqba/' + recordid,
    method: 'get'
  })
}

// 新增备案信息
export function addWqba(data) {
  return request({
    url: '/netsign/wqba',
    method: 'post',
    data: data
  })
}

// 修改备案信息
export function updateWqba(data) {
  return request({
    url: '/netsign/wqba',
    method: 'put',
    data: data
  })
}

// 删除备案信息
export function delWqba(recordid) {
  return request({
    url: '/netsign/wqba/' + recordid,
    method: 'delete'
  })
}
