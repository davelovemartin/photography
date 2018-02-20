var braintree = require("braintree")
var gateway = braintree.connect({
    accessToken: process.env.BRAINTREE_TOKEN
});

exports.handler = function(event, context, callback) {
    return gateway.clientToken.generate({}).then(result => {
        const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(
                {clientToken: result.clientToken}
            )
        }
        callback(null, response)
    });
};