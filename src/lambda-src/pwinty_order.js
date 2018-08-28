const fetch = require("node-fetch")

module.exports.handler = async (event, context, callback) => {
    // stripe details from checkout
    const stripeOrder = JSON.parse(event.body)
    // headers
    const pwintyHeaders = {
        "X-Pwinty-MerchantId": process.env.PWINTY_MERCHANT_ID,
        "X-Pwinty-REST-API-Key": process.env.PWINTY_API_KEY,
        "Content-Type": "application/json"
    }
    //create an order
    const order = await fetch('https://sandbox.pwinty.com/v3.0/Orders/', {
        method: 'POST',
        headers: pwintyHeaders,
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
    const orderJson = await order.json()
    console.log(orderJson)      
    const image = await fetch('https://sandbox.pwinty.com/v3.0/orders/' + orderJson.data.id + '/images', {
        method: 'POST',
        headers: pwintyHeaders,
        body: JSON.stringify({ 
            sku: 'P-PHO-MG-420X594',
            url: 'https://cdn.contentful.com/spaces/' + process.env.CONTENTFUL_SPACE_ID + '/assets/' + stripeOrder.assetId +'?access_token=' + process.env.CONTENTFUL_ACCESS_TOKEN,
            sizing: 'crop',
            copies: 1,
            attributes: { frame: 'box' }
        })
    })
    const imageJson = await image.json()
    console.log(imageJson)

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: imageJson
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