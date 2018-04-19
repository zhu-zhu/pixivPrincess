const axios = require('axios')
    config = require('../config/config')

const url = 'https://www.pixiv.net/ranking.php?mode=daily_r18'

const http = {
    getTop: async () => {
        try {
            let { data, status } = await axios({
                method: 'get',
                url: url,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
                    'Cookie': config.url.cookieer
                }
            })
            if (status === 200) {
                return data
            }
        } catch (e) {
            console.log('http error ' + e)
        }
    }
}


module.exports = {
    http
}