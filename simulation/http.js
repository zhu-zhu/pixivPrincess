const axios = require('axios')
    config = require('../config/config'),
        fs = require("fs")

const url = 'https://www.pixiv.net/ranking.php?mode=daily'

const http = {
    getTop: async () => {
        try {
            let { data, status } = await axios({
                method: 'get',
                url: url,
                // headers: {
                //     'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
                //     'Cookie': config.url.cookieer
                // }
            })
            if (status === 200) {
                console.log("准备写入文件");
                fs.writeFile('input.html', data,  function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("数据写入成功！");
                    fs.readFile('input.html', function (err, data) {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
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