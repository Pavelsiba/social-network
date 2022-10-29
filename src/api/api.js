import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "67037de1-fc63-4ea6-8f65-108837ca3b76" },
});

export const usersAPI = {
  async  getUsers (currentPage = 1, pageSize = 10) {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
    /* .then(response => response.data) */
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
    /* .then(response => response.data) */
  },

  userProfile(userId) {
    console.warn("Obsolete method. Please used profileAPI object");
    return profileAPI.userProfile(userId);
  },
};

export const profileAPI = {
  userProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },

  savePhoto (photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },

  saveProfile (profile) {
    return instance.put(`profile`, profile);
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },

  login (email, password, rememberMe=false, captcha) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  }, 

  logout () {
    return instance.delete(`auth/login`)
  }
};

export const securityAPI = {
  async getCaptchaUrl () {
    return instance.get(`security/get-captcha-url`)
    //.then(response=>response.data.url)
  }
}




/* login(email, password, rememberMe = false, captcha=null) {
  return instance.post(`auth/login`, { email, password, rememberMe, captcha });
},

logout() {
  return instance.delete(`auth/login`);
}, */