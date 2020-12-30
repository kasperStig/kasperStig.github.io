var Lambda = function() {
    AWS.config.region = 'eu-west-1'; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'eu-west-1:bbd364e0-f629-46a7-833a-e43f29495a85'});

    var lambda = new AWS.Lambda({region: 'eu-west-1', apiVersion: '2015-03-31'});
    var params = {
        FunctionName : 'Rejseplanen',
        InvocationType : 'RequestResponse',
        LogType : 'None'
    }

    function invoke(callback, onLoad, onStart) {
        onStart();
        lambda.invoke(params, function(err, data) {
            onLoad();
            if (err) {
                console.error(err);
            } else {
                var result = JSON.parse(JSON.parse(data.Payload));
                callback(result);
            }
        });
    }

    return {
        invoke: function(callback, onLoad, onStart) {
            invoke(callback, onLoad, onStart);
        }
    }
}