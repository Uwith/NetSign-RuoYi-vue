import request from '@/utils/request'

// 查询买方信息列表
export function listBuyer(query) {
  return request({
    url: '/netsign/buyer/list',
    method: 'get',
    params: query
  })
}

// 查询买方信息详细
export function getBuyer(buyerId) {
  return request({
    url: '/netsign/buyer/' + buyerId,
    method: 'get'
  })
}

// 新增买方信息
export function addBuyer(data) {
  return request({
    url: '/netsign/buyer',
    method: 'post',
    data: data
  })
}

// 修改买方信息
export function updateBuyer(data) {
  return request({
    url: '/netsign/buyer',
    method: 'put',
    data: data
  })
}

// 删除买方信息
export function delBuyer(buyerId) {
  return request({
    url: '/netsign/buyer/' + buyerId,
    method: 'delete'
  })
}
