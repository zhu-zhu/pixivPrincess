const url = {
    login_url: 'https://accounts.pixiv.net/login?lang=zh&source=pc&view_type=page&ref=wwwtop_accounts_index',
    user_agent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    login_api: 'https://accounts.pixiv.net/api/login?lang=zh',
    post_headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://accounts.pixiv.net',
        'Referer': 'https://accounts.pixiv.net/login?lang=zh&source=pc&view_type=page&ref=wwwtop_accounts_index',
        'X-Requested-With': 'XMLHttpRequest',
        'Cookie': ''
    },
    cookieer: ''
}

const key_get = {
    method: 'get',
    url: url.login_url,
    headers: {
        'User-Agent': url.user_agent
    }
}

module.exports = {
    url,
    key_get,
}