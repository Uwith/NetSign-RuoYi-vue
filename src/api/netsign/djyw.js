import request from '@/utils/request'

// 查询登记业务列表
export function listDjyw(query) {
  return request({
    url: '/netsign/djyw/list',
    method: 'get',
    params: query
  })
}

// 查询登记业务详细
export function getDjyw(djywId) {
  return request({
    url: '/netsign/djyw/' + djywId,
    method: 'get'
  })
}

// 新增登记业务
export function addDjyw(data) {
  return request({
    url: '/netsign/djyw',
    method: 'post',
    data: data
  })
}

// 修改登记业务
export function updateDjyw(data) {
  return request({
    url: '/netsign/djyw',
    method: 'put',
    data: data
  })
}

// 删除登记业务
export function delDjyw(djywId) {
  return request({
    url: '/netsign/djyw/' + djywId,
    method: 'delete'
  })
}
