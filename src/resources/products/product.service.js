const db = require('db');

const constants = require('app.constants');
const schema = require('./product.schema');

const service = db.createService(constants.DATABASE_DOCUMENTS.PRODUCTS, schema);

service.updateInfo = (_id, {name, price, quantity }) => {
    return service.update(
        {
          _id,
        },
        (doc) => {
          const productDoc = doc;
          productDoc.name = name;
          productDoc.price = price;
          productDoc.quantity = quantity;
        },
      );
};

module.exports =  service;
