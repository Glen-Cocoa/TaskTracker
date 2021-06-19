import axios from 'axios'
import { BASE_URL, ENDPOINTS } from './constants.js'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

const formQuery = (endpoint, type, id) => {
  if(type && id) {
    console.log(type, id)
    return `${endpoint}/${type}/${id}`
  } else {
    return `${endpoint}`
  }
} 

const API = {
  users: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.USERS, type, id))
      } catch (e) {
        console.error(e)
      }
    }
  },
  customers: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.CUSTOMERS, type, id))
      } catch (e) {
        console.error(e)
      }
    },
    create: () => {},
    update: () => {},
    delete: () => {}
  },
  projects: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.PROJECTS, type, id))
      } catch (e) {
        console.error(e)
      }
    },
    create: () => {},
    update: () => {},
    delete: () => {}
  },
  tasks: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.TASKS, type, id))
      } catch (e) {
        console.error(e)
      }
    },
    create: () => {},
    update: () => {},
    delete: () => {}
  },
  task_logs: {
    get: async (type, id) => {
      try {
        return await instance.get(formQuery(ENDPOINTS.TASKLOGS, type, id))
      } catch (e) {
        console.error(e)
      }
    },
    create: () => {},
    update: () => {},
    delete: () => {}
  },
  fetchAll: async () => {
    const users = await API.users.get().data
    const projects = await API.projects.get().data
    const tasks = await API.tasks.get().data

    return { users, projects, tasks }
  }
}

export default API