const fetch = require("node-fetch")

module.exports.handler = async (event, context, callback) => {
    const stripeOrder = JSON.parse(event.body)
    
    const order = await fetch('https://sandbox.pwinty.com/v3.0/Orders/', {
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
    });
    const json = await order.json()
    console.log(json)
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: order
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