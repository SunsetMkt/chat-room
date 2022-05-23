'use strict'

//const db = require('../db')
//const record2svg = require('../utils/record2svg')
const express = require('express')
const router = express.Router()

router.get('/@:roomId', (req, res) => {
  const roomList = req.app.get('roomList')
  const { roomId } = req.params
  const { title } = req.query

  res.render('room', {
    roomId,
    title,
    users: roomList[roomId] || []
  })
})

router.get('/@:roomId/record', async (req, res) => {
  const { roomId } = req.params
  const { limit=100, offset=0 } = req.query

  //const record = await db.getRecord(roomId, limit, offset)
  const record = [{"id":0,"name":roomId,"room":roomId,"uid":"null","sid":"null","time":0,"namecolor":"#117743","msgcolor":"#3d3d3d","msg":"本服务不会保存聊天记录，您必须保持在线才能收到消息，刷新此页面会清空消息记录。为了增强用户体验，您的用户昵称和ID会使用Cookies保存，如需重置请清除Cookies。"}]

  res.json(record)
})

/**
router.get('/@:roomId/svg', async (req, res) => {
  const { roomId } = req.params
  let { width=500, height=300, limit=20, theme='', title=`${roomId}
  @chat.getloli.com: ~`, fontSize='12' } = req.query

  limit = Math.floor(Math.abs(Math.min(limit, 100) || 20))

  const record = await db.getRecord(roomId, limit)

  const svg = record2svg({ roomId, record, width: Math.abs(width), height: Math.abs(height), limit, theme, title, fontSize: Math.abs(fontSize) })

  res.set({
    'content-type': 'image/svg+xml',
    'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
  })

  res.send(svg)
})
*/

module.exports = router