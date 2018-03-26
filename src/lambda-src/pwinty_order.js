const pwinty = require('pwinty')(process.env.PWINTY_API_KEY, process.env.PWINTY_MERCHANT_ID, 'https://sandbox.pwinty.com:443')

module.exports.handler = (event, context, callback) => {
    const requestBody = JSON.parse(event.body)
    // Order information (from Stripe Checkout)
    const orderParams = requestBody.order

    return pwinty.createOrder(orderParams, function (err, order) {
        
        var photo = {
            type: "4x4",
            url: "photourl",
            copies: "2",
            sizing: "ShrinkToExactFit",
            priceToUser: "450"
        }

    }).then((order) => {
        const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                message: `Order processed succesfully!`,
                order
            })
        }
        callback(null, response)
    })
    .catch((err) => { // Error response
        console.log(err)
        const response = {
        statusCode: 500,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            error: err.message
        })
    }
    callback(null, response)
    })
}