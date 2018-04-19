const axios = require('axios'),
    querystring = require('querystring'),
    config = require('../config/config'),
    ker = require('./getKey'),
    abb = require('../dataDeal/abbreviated')
    sex = require('./http')

const reqpixiv = {
    loging: async (key, cookie) => {
        try {
            let {data, status, headers} = await axios({
                method: 'post',
                url: config.url.login_api,
                headers: config.url.post_headers,
                data: querystring.stringify({
                    pixiv_id: 'mikulength',
                    password: 'yingjie1233210',
                    captcha: '',
                    g_recaptcha_response: '',
                    post_key: await ker.getKey.logingkey(),
                    source: 'pc',
                    ref: 'wwwtop_accounts_index',
                    return_to: 'http://www.pixiv.net/'
                })
            })
            if (status === 200 && data.body.success) {
                console.log('login success')
                config.url.cookieer = headers['set-cookie'][0]
                abb.main.smallRegexper();
            }
        } catch (e) {
            console.log(e)
        }
    }
}

reqpixiv.loging()

module.exports = {
    reqpixiv
}
