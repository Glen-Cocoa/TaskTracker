const makeUpdateQuery = async (id, content, table) => {    
  const query = { where: { id: id}}
  return await table.update(content, query)
}

export default makeUpdateQuery