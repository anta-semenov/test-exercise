import request from 'request'

const baseURl = 'http://localhost:3005'

const makeRequest = (url, method, body) => new Promise((resolve, reject) => {
  request(
    {
      uri: url,
      method: method,
      json: true,
      body: body
    },
    (error, response, body) => {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    }
  )
})

export const create = (type, data) => makeRequest(`${baseURl}/${type}`, 'POST', data)

export const update = (type, id, data) => makeRequest(`${baseURl}/${type}/${id}`, 'PUT', data)

export const get = (type) => makeRequest(`${baseURl}/${type}`, 'GET')

export const deleteDb = (type, id) => makeRequest(`${baseURl}/${type}/${id}`, 'DELETE')
