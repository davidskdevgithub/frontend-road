migrate((db) => {
  const collection = new Collection({
    "id": "6nv8zi21xm3y1wu",
    "created": "2023-04-24 11:59:03.292Z",
    "updated": "2023-04-24 11:59:03.292Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6nv8zi21xm3y1wu");

  return dao.deleteCollection(collection);
})
