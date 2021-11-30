const { getItems, getItem } = require('../controllers/items');
const Item ={
    type:'object',
    properties:{
        id: { type: "number" },
        name: { type: "string" },
    }
}
const getItemsOpts = {
    schema:{
        response: {
            200: {
                type:'array',
                items: Item,
            }
        }
    },
    handler: getItems,
}


const getItemOpts = {
    schema:{
        response: {
            200: Item,
        }
    },
    handler: getItem,
}

module.exports = {getItemsOpts , getItemOpts} ;