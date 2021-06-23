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
  currentData: {},
  formObject: {},
  setFormObject: () => {},
  handleFormSubmit: () => {},
  handleDelete: () => {},
  handleItemClick: () => {},
  handleEditSave: () => {}
})

export default ContentContext
