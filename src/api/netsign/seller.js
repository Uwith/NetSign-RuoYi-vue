import request from '@/utils/request'

// 查询卖方信息列表
export function listSeller(query) {
  return request({
    url: '/netsign/seller/list',
    method: 'get',
    params: query
  })
}

// 查询卖方信息详细
export function getSeller(sellerId) {
  return request({
    url: '/netsign/seller/' + sellerId,
    method: 'get'
  })
}

// 新增卖方信息
export function addSeller(data) {
  return request({
    url: '/netsign/seller',
    method: 'post',
    data: data
  })
}

// 修改卖方信息
export function updateSeller(data) {
  return request({
    url: '/netsign/seller',
    method: 'put',
    data: data
  })
}

// 删除卖方信息
export function delSeller(sellerId) {
  return request({
    url: '/netsign/seller/' + sellerId,
    method: 'delete'
  })
}
