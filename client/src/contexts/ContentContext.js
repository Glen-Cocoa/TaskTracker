import { createContext } from 'react'

const ContentContext = createContext({
  type: '',
  showDetail: false,
  setShowDetail: () => {},
  showEdit: false,
  setShowEdit: () => {},
  items: [],
  contentMap: {},
  activeItem: {},
  activeCategory: {},
  formObject: {},
  setFormObject: () => {},
  handleFormSubmit: () => {},
  handleDelete: () => {},
  handleItemClick: () => {}
})

export default ContentContext
