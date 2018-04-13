const login = {
    pixiv_id: 'mikulength',
    password: 'yingjie1233210',
    post_key: '',
    source: 'pc',
    captcha: '',
    g_recaptcha_response: ''
}

const header = {
    host: "accounts.pixiv.net",
    path: "/api/login?lang=zh",
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "",
        "Accept": "text/html, application/xhtml+xml, */*",
        "Accept-Language": "zh-CN",
        "Cache-Control": "no-cache",
        "Connection": "Keep-Alive",
        "Host": "accounts.pixiv.net",
        "Referer": "https://accounts.pixiv.net/login?lang=zh&source=pc&view_type=page&ref=wwwtop_accounts_index",
        "User-Agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; BOIE9;ZHCN)",
        "Cookie": ""
    }
}

module.exports = {
    login,
    header
}