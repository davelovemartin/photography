const pwinty = require('../lib/pwinty')(process.env.PWINTY_API_KEY, process.env.PWINTY_MERCHANT_ID, 'https://sandbox.pwinty.com:443')

export function handler(event, context, callback) {
    
    callback(null, {
        // var orderParams = {};
        // pwinty.createOrder(orderParams, function (err, order) {
        
        //     var photo = {
        //         type: "4x4",
        //         url: "photourl",
        //         copies: "2",
        //         sizing: "ShrinkToExactFit",
        //         priceToUser: "450"
        //     };

        //     pwinty.addPhotoToOrder(order.id, photo, function (err, order) {
        //         console.log('photo added');
        //     });
        // })
    })
  }