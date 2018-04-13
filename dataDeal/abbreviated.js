const content = require('../simulation/http'),
    abbdow = require('../download/abbreviatedDow')

const reg = {
    small: /https:\/\/i\.pximg\.net\/c\/240x480\/\img-master\/img\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}_p\d{0,}_master\d{0,}\.(png|jpg)/g,

    label: '',
    arr: [
        {
            id: 1,
            big: 'https://i.pximg.net/img-original/img/2018/04/10/21/35/23/68171397_p0.jpg',
            smail: 'https://i.pximg.net/c/240x480/img-master/img/2018/04/10/21/35/23/68171397_p0_master1200.jpg',
            name: 'nono'
        }
    ]
}

const main = {
    smallRegexper: async () => {
        let re = await content.http.getTop()
        let smurl = re.match(reg.small)
        reg.arr = smurl
        let save = await abbdow.dwonload.small(smurl)
    },
    bigRegexper: async () => {
        console.log(reg.arr)
    }
}

main.smallregexper()