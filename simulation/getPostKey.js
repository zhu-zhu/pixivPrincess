const request = require('request'),
    config = require('../config/loginConfig'),
    postKeyMatch = /postKey":"([^"]*)"/

request.get(config.login.accountsLogin, (error, response, body) => {
    if (response.statusCode == 200 && !error) {
        config.login.post_key = body.match(postKeyMatch)[1]
        console.log(config)
    } else {
        console.log(error)
    }
})

