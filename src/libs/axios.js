import axios from 'axios'

const http = axios.create({
  // You can add your headers here
  baseURL: `${import.meta.env.VITE_VUE_APP_API_BASE_URL}/api/`,
  timeout: 100000,
})

const routes = {
  articles: {
    all: 'articles',
    fetch: ((id) => {
       return `article/${id}/show`
    })
    }
}

export { 
    http,
    routes
}
