import socketIO from 'socket.io-client'
import apiConfig from '../api/config'

let socket

export const connect = (roomId) => {
  socket = socketIO(`${apiConfig.protocol}://${apiConfig.host}:${apiConfig.port}`, {
    query: {
      roomId,
    },
    forceNew: true,
  })
  return socket
}

export const getIO = () => socket
