import axios from 'axios'

const api = {
  requestList () {
    return new Promise((resolve, reject) => {
      axios.get('/api/product')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  requestBanner () {
    return new Promise((resolve, reject) => {
      axios.get('/api/banner')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  loadmore (pageCode) {
    return new Promise((resolve, reject) => {
      axios.get('/api/product?pageCode=' + pageCode + '&pageNumber=8')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
