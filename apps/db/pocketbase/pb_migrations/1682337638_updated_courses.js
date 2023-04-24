migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bbm5guer",
    "name": "nombre",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bbm5guer",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
