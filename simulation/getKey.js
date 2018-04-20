const axios = require('axios'),
    config = require('../config/config'),
    postKeyMatch = /postKey":"([^"]*)"/

const getKey = {
    logingkey: async () => {
        try {
            let {data, status, headers} = await axios(config.key_get)
            if (status === 200) {
                config.aer = '123'
                config.url.post_headers['Cookie'] = headers['set-cookie'].join('; ')
                return data.match(postKeyMatch)[1]
            }
        } catch (e) {
            console.log(e)
        }
    },
}

module.exports = {
    getKey
}