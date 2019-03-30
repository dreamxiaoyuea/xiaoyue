import axios from 'axios'

const api = {
  requestdata (url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
