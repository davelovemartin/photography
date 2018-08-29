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

    // try {
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
        })
        const orderJson = await order.json()
        // find image
        const assetUrl = await fetch('https://cdn.contentful.com/spaces/' + process.env.CONTENTFUL_SPACE_ID + '/assets/' + stripeOrder.assetId +'?access_token=' + process.env.CONTENTFUL_ACCESS_TOKEN)
        const assetJson = await assetUrl.json()
        // add image to order
        const image = fetch('https://sandbox.pwinty.com/v3.0/orders/' + orderJson.data.id + '/images', {
            method: 'POST',
            headers: pwintyHeaders,
            body: JSON.stringify({ 
                sku: 'FRA-BOX-HPL-MOUNT1-ACRY-A3',
                url: 'https:' + assetJson.fields.file.url,
                sizing: 'crop',
                copies: 1,
                attributes: { FrameColour: 'white' }
            })
        })
        const imageJson = image.json() 
        
        let response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                message: imageJson
            })
        }
        callback(null, response)
    // }
    // } catch {
    //     let response = {
    //         statusCode: 500,
    //         headers: {
    //           'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({
    //           error: err.message
    //         })
    //     }
    //     callback(null, response)
    // }
}