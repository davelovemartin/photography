var gateway = braintree.connect({
    accessToken: process.env.BRAINTREE_TOKEN
});

export function handler(event, context, callback) {
    return gateway.clientToken.generate({}, function (err, response) {

        var clientToken = response.clientToken
        callback(null, clientToken)
    });
}