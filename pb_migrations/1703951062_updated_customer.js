/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f720czizbrcrzr7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dn3suxmf",
    "name": "email1",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("f720czizbrcrzr7")

  // remove
  collection.schema.removeField("dn3suxmf")

  return dao.saveCollection(collection)
})
