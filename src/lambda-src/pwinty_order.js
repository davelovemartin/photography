const fetch = require("node-fetch")

module.exports.handler = async (event, context, callback) => {
    const stripeOrder = JSON.parse(event.body)
    // Order information (from Stripe Checkout)
    console.log('Stripe Order: ' + stripeOrder)

    const res = fetch('https://sandbox.pwinty.com/v3.0/Orders/', {
        method: 'POST',
        headers: {
            "X-Pwinty-MerchantId": process.env.PWINTY_MERCHANT_ID,
            "X-Pwinty-REST-API-Key": process.env.PWINTY_API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            recipientName: stripeOrder.recipientName,
            Address1: stripeOrder.address1,
            addressTownOrCity: stripeOrder.addressTownOrCity,
            stateOrCounty: stripeOrder.stateOrCounty,
            postalOrZipCode: stripeOrder.postalOrZipCode,
            email: stripeOrder.email,
            countryCode: stripeOrder.destinationCountryCode,
            preferredShippingMethod: 'CHEAPEST',
            mobileTelephone: stripeOrder.mobileTelephone
        })
    })
    const orderId = await res.json();
    console.log(orderId)
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: orderId
        })
    }
    callback(null, response)

    // 
    // return pwinty.createOrder(stripeOrder, function (err, order) {  
        
    //     var photo = {
    //         type: "4x4",
    //         url: "",
    //         copies: "2",
    //         sizing: "ShrinkToExactFit",
    //         priceToUser: "450"
    //     }

    //     return pwinty.addPhotoToOrder(order.id, photo, function (err, result) {
    //         console.log('photo added');
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