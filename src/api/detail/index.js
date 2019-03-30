import axios from 'axios'

const api = {
  requestData (id) {
    return new Promise((resolve, reject) => {
      axios.get('/api/product/search?num=' + id)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
