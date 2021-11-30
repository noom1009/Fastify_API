const Item ={
    type:'object',
    properties:{
        id: { type: 'number'},
        name: {type: 'String'}
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
    handler: function (req, reply) {
        reply.send(items);
    },
}


const getItemOpts = {
    schema:{
        response: {
            200: Item,
        }
    },
    handler: function (req, reply) {
      const { id } = req.params
      const item = items.find((item) => item.id === id)
    },
}

module.exports = getItemsOpts , getItemOpts ;