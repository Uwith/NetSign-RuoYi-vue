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

// 选择图片
export function selectImg(data,bdcxxId) {
  return request({
    url: '/netsign/accept/selectImg/'+bdcxxId,
    method: 'post',
    data: data
  })
}

// 提交审核
export function submitAudit(bdcxxId) {
  return request({
    url: '/netsign/accept/submit/'+ bdcxxId,
    method: 'get'
  })
}

// 驳回审核
export function rejectAudit(bdcxxId) {
  return request({
    url: '/netsign/accept/reject/'+ bdcxxId,
    method: 'get'
  })
}

// 通过审核
export function passAudit(bdcxxId) {
  return request({
    url: '/netsign/accept/passAudit/'+ bdcxxId,
    method: 'get'
  })
}
// 撤销审核
export function rowUndo(recordid,bdcxxId) {
  return request({
    url: '/netsign/accept/rowUndo/',
    method: 'post',
    params: {
      recordid,
      bdcxxId
    }
  })
}
