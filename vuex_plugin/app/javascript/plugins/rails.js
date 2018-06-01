import http from '../helpers/http'

const ALL = 'ALL'
const GET = 'GET'
const CREATE = 'CREATE'
const UPDATE = 'UPDATE'
const DESTROY = 'DESTROY'
const ERROR = 'ERROR'

const updateItem = (item, all, remove) => {
  remove = remove || false
  const thisItem = all.find(i => i.id === item.id)
  const thisItemIndex = all.indexOf(thisItem)
  if (thisItemIndex > -1) {
    if (remove) {
      console.info('destroying => ', thisItem)
      all.splice(thisItemIndex, 1)
    } else {
      all.splice(thisItemIndex, 1, item)
    }
  }
}

export default function createRailsPlugin(resource) {
  return store => {
    store.registerModule(resource, {
      namespaced: true,
      state: {
        all: [],
        current: null,
        error: null
      },
      actions: {
        getAll({ commit }, params) {
          params = params || {}
          return new Promise((resolve, reject) => {
            http.get(`/${resource}.json`, { params })
              .then(res => {
                const items = res.data
                commit(ALL, { items })
                resolve(res)
              })
              .catch(err => {
                commit(ERROR, { err })
                reject(err)
              })
          })
        },
        get({ commit }, id, params) {
          params = params || {}
          return new Promise((resolve, reject) => {
            http.get(`/${resource}/${id}.json`, { params })
              .then(res => {
                const item = res.data
                commit(GET, { item })
                resolve(res)
              })
              .catch(err => {
                commit(ERROR, { err })
                reject(err)
              })
          })
        },
        create({ commit }, item) {
          return new Promise((resolve, reject) => {
            http.post(`/${resource}.json`, item)
              .then(res => {
                const item = res.data
                commit(CREATE, { item })
                resolve(res)
              })
              .catch(err => {
                commit(ERROR, { err })
                reject(err)
              })
          })
        },
        update({ commit }, item) {
          return new Promise((resolve, reject) => {
            http.put(`/${resource}/${item.id}.json`, item)
              .then(res => {
                const item = res.data
                commit(UPDATE, { item })
                resolve(res)
              })
              .catch(err => {
                commit(ERROR, { err })
                reject(err)
              })
          })
        },
        destroy({ commit }, item) {
          return new Promise((resolve, reject) => {
            http.delete(`/${resource}/${item.id}.json`)
              .then(res => {
                commit(DESTROY, { item })
                resolve(res)
              })
              .catch(err => {
                commit(ERROR, { err })
                reject(err)
              })
          })
        }
      },
      mutations: {
        [ALL] (state, { items }) {
          state.error = null
          state.all = items
        },
        [GET] (state, { item }) {
          state.error = null
          state.current = item
          updateItem(state.current, state.all)
        },
        [CREATE] (state, { item }) {
          state.error = null
          state.all.push(item)
        },
        [UPDATE] (state, { item }) {
          state.error = null
          state.current = null
          updateItem(item, state.all)
        },
        [DESTROY] (state, { item }) {
          state.error = null
          state.current = null
          updateItem(item, state.all, true)
        },
        [ERROR] (state, { err }) {
          state.error = err.response.data
        }
      }
    })
    store.subscribe(mutation => {
      console.debug('mutation from plugin => ', mutation)
    })
  }
}