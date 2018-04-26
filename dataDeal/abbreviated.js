const content = require('../simulation/http'),
    abbdow = require('../download/abbreviatedDow')

const reg = {
    small: /https:\/\/i\.pximg\.net\/c\/240x480\/\img-master\/img\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}_p\d{0,}_master\d{0,}\.(png|jpg)/g,
    // label: '',
    arr: []
}

var cer = /<a href="member_illust\.php\?mode=medium&amp;illust_id=\d{0,}&amp;ref=rn-b-\d{0,}-title-\d{0,}&amp;uarea=daily" class="title" target="_blank">([\s\S]*?)<\/a>/g

const main = {
    smallRegexper: async () => {
        let re = await content.http.getTop()
        console.log(re.match(/<a href="member_illust\.php\?mode=medium&amp;illust_id=\d{0,}&amp;ref=rn-b-\d{0,}-title-\d{0,}&amp;uarea=daily" class="title" target="_blank">[\s\S]*?<\/a>/g)[0].replace(cer, "$1"))
        // let smurl = re.match(reg.small)
        // reg.arr = smurl
        // let save = await abbdow.dwonload.small(smurl)
    },
    bigRegexper: async () => {
        console.log(reg.arr)
    }
}

main.smallRegexper()


module.exports = {
    main
}

// {
//     id: 1,
//         big: 'https://i.pximg.net/img-original/img/2018/04/10/21/35/23/68171397_p0.jpg',
//     smail: 'https://i.pximg.net/c/240x480/img-master/img/2018/04/10/21/35/23/68171397_p0_master1200.jpg',
//     name: 'nono'
// }