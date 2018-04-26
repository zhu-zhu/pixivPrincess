/**
 * Created by miku on 2018/4/21.
 */
const fs = require("fs")

const reg = /https:\/\/i\.pximg\.net\/c\/240x480\/\img-master\/img\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}_p\d{0,}_master\d{0,}\.(png|jpg)/g,
    regb = /https:\/\/i\.pximg\.net\/c\/240x480\/\img-master\/img\/(\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,})\/(\d{0,})(_p\d{0,})_master\d{0,}(\.(png|jpg))/g,
    bigString = 'https://i.pximg.net/img-original/img/',
    h2 = /<h2><a href=.{0,} class="title" target="_blank".{0,}>.{0,}<\/a><\/h2>/g
    c = /<a href="member_illust\.php\?mode=medium&amp;illust_id=\d{0,}&amp;ref=rn-b-\d{0,}-title-\d{0,}&amp;uarea=daily" class="title" target="_blank">[^\s]*<\/a>/g

let arr = []

const imgconfig = []

fs.readFile('../simulation/input.html', function (err, data) {
    if (err) {
        return console.error(err);
    }
    arr = data.toString().match(reg)
    console.log(data.toString().match(c).length)
    // arr.map((i) => {
    //     let c = i.replace(regb, "$1 $2 $3 $4")
    //     let a =c.split(' ')
    //     imgconfig.push({
    //         id: a[1],
    //         small: i,
    //         big: bigString + a[0] + '/' + a[1] + a[2] + a[3],
    //         anthor: bigString + a[0] + '/' + a[1] + a[2] + '.png'
    //     })
    // })
    // console.log(imgconfig)
});