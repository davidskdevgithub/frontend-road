migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1mpkw1qr",
    "name": "horasSemanales",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkqgxp3e",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu")

  // remove
  collection.schema.removeField("1mpkw1qr")

  // remove
  collection.schema.removeField("uk1qgnxw")

  // remove
  collection.schema.removeField("xkqgxp3e")

  return dao.saveCollection(collection)
})
