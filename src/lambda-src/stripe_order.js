const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body)

  // Payment information (from Stripe Checkout)
  const token = requestBody.token.id
  const email = requestBody.token.email

  // Order information
  const amount = requestBody.order.amount
  const currency = requestBody.order.currency
  const shipping = requestBody.order.shipping

  // Pay order with received token (from Stripe Checkout)
  return stripe.charges.create({
    amount: amount,
    currency: currency,
    source: token,
    description: 'order for ' + email,
    receipt_email: email,
    shipping: shipping,
  }).then((order) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: `Charge processed succesfully!`,
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
