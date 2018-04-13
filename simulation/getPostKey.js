const axios = require('axios'),
    qs = require('qs'),
    config = require('../config/loginConfig'),
    login = require('./login'),
    querystring = require("querystring"),
    postKeyMatch = /postKey":"([^"]*)"/

const getKey = {
    getting: async () => {
        try {
            let {data, status} = await axios.get('https://accounts.pixiv.net/login?lang=zh&source=pc&view_type=page&ref=wwwtop_accounts_index')
            if (status === 200) {
                config.login.post_key = data.match(postKeyMatch)[1]
                // config.header.headers["Content-Length"] = querystring.stringify(config.login).length
                // config.header.headers["Cookie"] = response.headers["set-cookie"].join()
                login.reqpixiv.loging(data.match(postKeyMatch)[1])
            }
        } catch (e) {
            console.log(e)
        }
    }
}

getKey.getting()

module.exports = {
    getKey
}