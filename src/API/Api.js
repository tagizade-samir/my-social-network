import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'd866ea22-117a-4f1c-b91e-45e0c6e7f648'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}

export const followAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollowUser(userId){
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then (response => response.data)
  },
  getStatus (userId) {
    return instance.get(`profile/status/${userId}`)
    .then (response => response.data)
  },
  updateStatus (status) {
    return instance.put(`profile/status`, {status})
    .then (response => response.data)
  }
}

export const authAPI = {
  isAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  loginUser(email, password, rememberMe = false) {
    return instance.post('auth/login', {
      email,
      password,
      rememberMe
    })
      .then(response => response.data)
  },
  logoutUser() {
    return instance.delete('auth/login')
      .then(response => response.data)
  }
}
