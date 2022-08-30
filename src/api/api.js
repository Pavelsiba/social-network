import axios from "axios";



const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": '67037de1-fc63-4ea6-8f65-108837ca3b76'},
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
    return (instance 
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data))
  },

  unfollow (userId) {
    return (instance.delete(`follow/${userId}`))
        /* .then(response => response.data) */
  },

  follow (userId) {
    return (instance.post(`follow/${userId}`))
        /* .then(response => response.data) */
  },

  authUser () {
    return (instance.get(`auth/me`))
  },

  userProfile (userId) {
    return (instance.get(`profile/${userId}`))
  },
};
