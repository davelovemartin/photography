var gateway = braintree.connect({
    accessToken: process.env.BRAINTREE_TOKEN
});

export function handler(event, context, callback) {
    return gateway.clientToken.generate({}, function (err, response) {
        console.log(response.clientToken)
        callback(null, response.clientToken)
    });
}