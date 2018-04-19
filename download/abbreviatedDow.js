const request = require('superagent'),
    fs = require('fs')

const dwonload = {
    small: (url) => {
        url.map((i,j)=>{
            let res = request.get(i).set('referer', url).pipe(fs.createWriteStream('../demo/'+ j + '.jpg'))
        })
        console.log('download success')
    }
}


module.exports = {
    dwonload
}