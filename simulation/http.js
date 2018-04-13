const request = require('superagent'),
    axios = require('axios')

const url = 'https://www.pixiv.net/ranking.php?mode=daily'

const http = {
    getTop: async () => {
        let { data, status } = await axios.get('https://www.pixiv.net/ranking.php?mode=daily')
        try {
            if (status === 200) {
                return data
            }
        } catch (e) {
            console.log('http error : ' + e)
        }
    }
}

module.exports = {
    http
}