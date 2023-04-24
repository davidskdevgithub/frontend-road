migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  collection.listRule = null

  return dao.saveCollection(collection)
})
