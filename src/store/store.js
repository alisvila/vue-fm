import Vue from "vue"
import Vuex from "vuex"
import apiCall from '../_helper/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
    admin: "bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiI0NiIsInVuaXF1ZV9uYW1lIjoiYWxpYW0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiI5Y2JiY2E4Mi0zYTViLTRhNDktODIxNS05YTg2NGIyZWU5NjUiLCJyb2xlIjoi2YXYr9uM2LEiLCJTZXNzaW9uSUQiOiIxNThiMTU4YmMyMDc0MmJhOWQ3MWUyNWQwNzdiZGVmNiIsIkJ1c2luZXNzUm9sZSI6IjEiLCJQZXJtaXNzaW9ucyI6WyIxMTAiLCIxMTEiLCIxMTIiLCIxMTMiLCIxMTQiLCIxMTUiLCIxMTYiLCIxMTciLCIxMTgiLCIxMTkiLCIxMjAiLCIxMjEiLCIyMDAiLCIyMDEiLCIyMDIiLCIyMDMiLCIyMDQiLCIyMDUiLCIyMDYiLCIyMDciLCIyMDgiLCIyMDkiLCIyMTAiLCIyMjEiLCIyMjIiLCIyMjMiLCIyMjQiLCIyMjUiLCIyMjYiLCIyMjciLCIyMjgiLCIyMjkiLCIyMzAiLCIyMzEiLCIyMzIiLCIyMzMiLCIyMzQiLCIyMzUiLCIyMzYiLCIyMzciLCIyMzgiLCIyMzkiLCIyNDAiLCIyNDEiLCIyNDIiLCIyNDMiLCIyNDQiLCIyNDUiLCIyNDYiLCIyNDciLCIyNDgiLCIyNDkiLCIyNTAiLCIyNTEiLCIyNTIiLCIzMDAiLCIzMDEiLCIzMDIiLCIzMDMiLCIzMTAiLCIzMTEiLCIzMTIiLCIzMTMiLCIzMTQiLCIzMTUiLCIzMTYiLCIzMTciLCIzMTgiLCIzMTkiLCIzMjAiLCIzMjEiLCIzMjIiLCIzMjMiLCIzMjQiLCIzMjUiLCIzMjYiLCIzMjciLCIzMjgiLCIzMjkiLCIzMzAiLCIzMzEiLCIzMzIiLCIzMzMiLCIzMzQiLCIzMzUiLCIzMzYiLCIzMzciLCIzMzgiXSwiRGlzcGxheU5hbWUiOiJhbGkiLCJpc3MiOiJNQmlzc3VlciIsImF1ZCI6IjQxNGUxOTI3YTM4ODRmNjhhYmM3OWY3MjgzODM3ZmQxIiwiZXhwIjoxNTU5MzE2NDgwLCJuYmYiOjE1NDIwMzY0ODB9.oz054krV5EoKZzRTbUZ0XamHrX03aCYGnfgJ5mZsMNA",
    servicNo: -1,
    userName: 'admin',
    jwt: '',
    user: ''
  },
  mutations: {
    auth_request: (state) => {
      state.status = 'loading'
    },
  },
  actions: {
    auth_request: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => {

      commit('auth_request')
      apiCall({url: 'auth', data: user, method: 'POST'})
      .then(resp => {
        localStorage.setItem('user-token', resp.token)

        axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*'
        // commit(AUTH_SUCCESS, resp)
        // dispatch(USER_REQUEST)
        resolve(resp)
      })
      .catch(err => {
        // commit(AUTH_ERROR, err)
        localStorage.removeItem('user-token')
        reject(err)
      })

      })
    }

  }
})
