const pwinty = require('pwinty')(process.env.PWINTY_API_KEY, process.env.PWINTY_MERCHANT_ID, 'https://sandbox.pwinty.com:443')

module.exports.handler = (event, context, callback) => {
    const order = JSON.parse(event.body)
    // Order information (from Stripe Checkout)
    console.log(order)
    // return pwinty.createOrder(orderParams, function (err, order) {
        
    // var photo = {
    //     type: "4x4",
    //     url: "",
    //     copies: "2",
    //     sizing: "ShrinkToExactFit",
    //     priceToUser: "450"
    // }

    // pwinty.addPhotoToOrder(order.id, photo, function (err, order) {
    //     console.log('photo added');
    // });

    // }).then((order) => {
    //     const response = {
    //         statusCode: 200,
    //         headers: {
    //           'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({
    //             message: `Order processed succesfully!`,
    //             order
    //         })
    //     }
    //     callback(null, response)
    // })
    // .catch((err) => { // Error response
    //     console.log(err)
    //     const response = {
    //     statusCode: 500,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify({
    //         error: err.message
    //     })
    // }
    // callback(null, response)
    // })
}