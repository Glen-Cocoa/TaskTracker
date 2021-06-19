const makeGetQuery = async (id, type, table) => {
  let result
  if (type) {
    console.log(type)
    const query = { 
      where: {
        [type]:id
      }
    }
    result = await table.findAll(query)
  } else {
    result = await table.findAll()
  }

  return result.length ? result : `No task_logs matching ${type}: ${id} found`
}

export default makeGetQuery