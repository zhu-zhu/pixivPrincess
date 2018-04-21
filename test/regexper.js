/**
 * Created by miku on 2018/4/21.
 */
const fs = require("fs")

const reg = /https:\/\/i\.pximg\.net\/c\/240x480\/\img-master\/img\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}_p\d{0,}_master\d{0,}\.(png|jpg)/g,
    regb = /https:\/\/i\.pximg\.net\/c\/240x480\/\img-master\/img\/(\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,}\/\d{0,})\/(\d{0,})(_p\d{0,})_master\d{0,}(\.(png|jpg))/g,
    bigString = 'https://i.pximg.net/img-original/img/'

let arr = []

const imgconfig = []

fs.readFile('../simulation/input.html', function (err, data) {
    if (err) {
        return console.error(err);
    }
    arr = data.toString().match(reg)
    arr.map((i) => {
        let c = i.replace(regb, "$1 $2 $3 $4")
        let a =c.split(' ')
        imgconfig.push({
            id: a[1],
            small: i,
            big: bigString + a[0] + '/' + a[1] + a[2] + a[3],
            anthor: bigString + a[0] + '/' + a[1] + a[2] + '.png'
        })
    })
    console.log(imgconfig)
});