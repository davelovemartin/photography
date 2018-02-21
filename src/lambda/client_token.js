const braintree = require('braintree');

exports.handler = function(event, context, callback) {
  // const gateway = braintree.connect({ accessToken: process.env.BRAINTREE_TOKEN });
  console.log("hi");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
    // return gateway.clientToken.generate({})
    // .then(result => {
    //     const response = {
    //         statusCode: 200,
    //         headers: {
    //           'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({clientToken: result.clientToken})
    //     }
    //     callback(null, response)
    // })
    // .catch((err) => {
    //   console.log(err)
    //   const response = {
    //     statusCode: 500,
    //     headers: {
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify({
    //       error: err.message
    //     })
    //   }
    //   callback(null, response)
    // });
}