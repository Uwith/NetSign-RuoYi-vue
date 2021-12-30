import request from '@/utils/request'

// 查询买方信息列表
export function listSeller(query) {
  return request({
    url: '/system/seller/list',
    method: 'get',
    params: query
  })
}

// 查询买方信息详细
export function getSeller(sellerId) {
  return request({
    url: '/system/seller/' + sellerId,
    method: 'get'
  })
}

// 新增买方信息
export function addSeller(data) {
  return request({
    url: '/system/seller',
    method: 'post',
    data: data
  })
}

// 修改买方信息
export function updateSeller(data) {
  return request({
    url: '/system/seller',
    method: 'put',
    data: data
  })
}

// 删除买方信息
export function delSeller(sellerId) {
  return request({
    url: '/system/seller/' + sellerId,
    method: 'delete'
  })
}
