window.onload = async function () {
    let ma = document.querySelectorAll('.grid')[0]
    let body = document.querySelectorAll('body')[0]
    try {
        let {data, status} = await axios.post('/p1')
        if (status === 200) {
            data.map((i)=>{
                ma.innerHTML += '<div class="grid-item grid-item--width2"><img src="./demo/'+ i +'" alt="aa" /></div>'
            })
            imagesLoaded( document.querySelector('.grid'), () => {
                let wookmark = new Wookmark('.grid');
                body.classList.remove('loading')
                let reverseAnim = anime({
                    targets: '.grid-item',
                    duration: function(t,i) {
                        return 500 + i*50;
                    },
                    easing: 'easeOutExpo',
                    delay: function(t,i) {
                        return i * 20;
                    },
                    opacity: {
                        value: [0,1],
                        duration: function(t,i) {
                            return 250 + i*50;
                        },
                        easing: 'linear'
                    },
                    translateY: [400,0]
                });
            })
        }
    } catch (e) {
        console.error(e)
    }
}

