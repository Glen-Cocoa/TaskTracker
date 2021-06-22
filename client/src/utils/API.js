import axios from 'axios'
import { BASE_URL, ENDPOINTS } from './constants.js'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

const formQuery = (endpoint, config) => {
  if(config?.type && config?.id) {
    return `${endpoint}/${config.type}/${config.id}`
  } else if (!config?.type && config?.id) {
    return `${endpoint}/${config.id}`
  } else {
    return `${endpoint}`
  }
} 

const API = {
  users: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.USERS, {type, id}))
      } catch (e) {
        console.error(e)
      }
    }
  },
  customers: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.CUSTOMERS, {type, id}))
      } catch (e) {
        console.error(e)
      }
    },
    create: async (data) => {
      try {
        return await instance.post(formQuery(ENDPOINTS.CUSTOMERS), data)
      } catch (e) {
        console.error(e)
      }
    },
    update: () => {},
    delete: async (id) => {
      try {
        return await instance.delete(formQuery(ENDPOINTS.CUSTOMERS, { id }))
      } catch (e) {
        console.error(e)
      }
    }
  },
  projects: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.PROJECTS, { type, id }))
      } catch (e) {
        console.error(e)
      }
    },
    create: async (data) => {
      try {
        return await instance.post(formQuery(ENDPOINTS.PROJECTS), data)
      } catch (e) {
        console.error(e)
      }
    },
    update: () => {},
    delete: async (id) => {
      try {
        return await instance.delete(formQuery(ENDPOINTS.PROJECTS, { id }))
      } catch (e) {
        console.error(e)
      }
    }
  },
  tasks: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.TASKS, { type, id }))
      } catch (e) {
        console.error(e)
      }
    },
    create: async (data) => {
      try {
        return await instance.post(formQuery(ENDPOINTS.TASKS), data)
      } catch (e) {
        console.error(e)
      }
    },
    update: () => {},
    delete: async (id) => {
      try {
        return await instance.delete(formQuery(ENDPOINTS.TASKS, { id }))
      } catch (e) {
        console.error(e)
      }
    }
  },
  task_logs: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.TASKLOGS, { type, id }))
      } catch (e) {
        console.error(e)
      }
    },
    create: async (data) => {
      try {
        return await instance.post(formQuery(ENDPOINTS.TASKLOGS), data)
      } catch (e) {
        console.error(e)
      }
    },
    update: () => {},
    delete: async (id) => {
      try {
        return await instance.delete(formQuery(ENDPOINTS.TASKLOGS, { id }))
      } catch (e) {
        console.error(e)
      }
    }
  }
}

export default API