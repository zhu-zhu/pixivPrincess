const axios = require('axios'),
    querystring = require('querystring'),
    qs = require('qs'),
    config = require('../config/loginConfig')

const hed = {
    'Referer': 'https://accounts.pixiv.net/login?lang=zh&source=pc&view_type=page&ref=wwwtop_accounts_index',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
}

const reqpixiv = {
    loging: async (key) => {
        try {
            console.log(key)
            let {data, status, headers, config} = await axios.post('https://accounts.pixiv.net/api/login?lang=zh', querystring.stringify({
                pixiv_id: 'mikulength',
                captcha: '',
                g_recaptcha_response: '',
                password: 'yingjie1233210',
                post_key: key,
                source: 'pc',
                ref: 'wwwtop_accounts_index',
                return_to: 'https://www.pixiv.net/',
            }), {headers:hed})
            if (status === 200) {
                console.log(data)
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = {
    reqpixiv
}