import apiUrl from '../apiConfig'
import axios from 'axios'

export const allQuotes = (user) => {
  return axios({
    url: apiUrl + '/quotes',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const singleQuote = (user, id) => {
  return axios({
    url: apiUrl + '/quotes' + `/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const quoteCreate = (user, quote) => {
  return axios({
    url: apiUrl + '/quotes',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      quote: quote
    }
  })
}

export const quoteUpdate = (user, id, quote) => {
  return axios({
    url: `${apiUrl}/quotes/${id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      quote: quote
    }
  })
}

export const quoteDelete = (user, id) => {
  return axios({
    url: `${apiUrl}/quotes/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
