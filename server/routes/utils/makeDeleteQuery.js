const makeDeleteQuery = async (id, table) => {    
  const query = { where: { id: id}}
  return await table.destroy(query)
}

export default makeDeleteQuery