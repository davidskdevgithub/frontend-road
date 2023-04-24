migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obk3ovvf",
    "name": "fechaInscrpcionHasta",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uk1qgnxw",
    "name": "fechaInscrpcionDesde",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  // remove
  collection.schema.removeField("obk3ovvf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uk1qgnxw",
    "name": "fechaInscrpcion",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
