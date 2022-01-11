import request from '@/utils/request'

// 查询登记业务列表
export function listAccept(query) {
  return request({
    url: '/netsign/accept/list',
    method: 'get',
    params: query
  })
}

// 修改不动产信息
export function updateAccept(data) {
  return request({
    url: '/netsign/accept',
    method: 'put',
    data: data
  })
}

// 查询登记业务列表
export function selectImgShow(data) {
  return request({
    url: '/netsign/accept/selectImgShow',
    method: 'post',
    data: data
  })
}
