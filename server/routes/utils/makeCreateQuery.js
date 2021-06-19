const makeCreateQuery = async (content, table) => {    
  return table.create(content)
}

export default makeCreateQuery