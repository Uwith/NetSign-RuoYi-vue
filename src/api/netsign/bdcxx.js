import request from '@/utils/request'

// 查询不动产信息列表
export function listBdcxx(query) {
  return request({
    url: '/netsign/bdcxx/list',
    method: 'get',
    params: query
  })
}

// 查询不动产信息详细
export function getBdcxx(bdcxxId) {
  return request({
    url: '/netsign/bdcxx/' + bdcxxId,
    method: 'get'
  })
}

// 新增不动产信息
export function addBdcxx(data) {
  return request({
    url: '/netsign/bdcxx',
    method: 'post',
    data: data
  })
}

// 修改不动产信息
export function updateBdcxx(data) {
  return request({
    url: '/netsign/bdcxx',
    method: 'put',
    data: data
  })
}

// 删除不动产信息
export function delBdcxx(bdcxxId) {
  return request({
    url: '/netsign/bdcxx/' + bdcxxId,
    method: 'delete'
  })
}
