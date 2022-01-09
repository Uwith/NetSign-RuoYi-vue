import request from '@/utils/request'

// 查询登记业务列表
export function listAccept(query) {
  return request({
    url: '/netsign/accept/list',
    method: 'get',
    params: query
  })
}

// 查询登记业务详细
export function getAccept(acceptId) {
  return request({
    url: '/netsign/accept/' + acceptId,
    method: 'get'
  })
}
