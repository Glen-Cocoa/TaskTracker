import { createContext } from 'react'

const CustomersContext = createContext({
  customers: [],
  setCustomers: () => null
})

export default CustomersContext
