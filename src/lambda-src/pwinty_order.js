const pwinty = require('pwinty')(process.env.PWINTY_API_KEY, process.env.PWINTY_MERCHANT_ID, 'https://sandbox.pwinty.com:443')

module.exports.handler = (event, context, callback) => {
    const stripeOrder = JSON.parse(event.body)
    // Order information (from Stripe Checkout)
    console.log(stripeOrder)
    return pwinty.createOrder(stripeOrder, function (err, order) {  
        
        var photo = {
            type: "4x4",
            url: "",
            copies: "2",
            sizing: "ShrinkToExactFit",
            priceToUser: "450"
        }

        return pwinty.addPhotoToOrder(order.id, photo, function (err, result) {
            console.log('photo added');

            const response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    message: `Order processed succesfully!`,
                    phorder
                })
            }
            callback(null, response)
        })
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