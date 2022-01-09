import request from '@/utils/request'

// 查询撤销档案列表
export function listUndo(query) {
  return request({
    url: '/netsign/undo/list',
    method: 'get',
    params: query
  })
}

// 查询撤销档案详细
export function getUndo(undoId) {
  return request({
    url: '/netsign/undo/' + undoId,
    method: 'get'
  })
}

// 新增撤销档案
export function addUndo(data) {
  return request({
    url: '/netsign/undo',
    method: 'post',
    data: data
  })
}

// 修改撤销档案
export function updateUndo(data) {
  return request({
    url: '/netsign/undo',
    method: 'put',
    data: data
  })
}

// 删除撤销档案
export function delUndo(undoId) {
  return request({
    url: '/netsign/undo/' + undoId,
    method: 'delete'
  })
}
