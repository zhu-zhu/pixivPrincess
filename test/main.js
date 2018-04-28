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
                    duration: 800,
                    elasticity: 600,
                    delay: function(t,i) {
                        return i*10;
                    },
                    opacity: {
                        value: [0,1],
                        duration: 600,
                        easing: 'linear'
                    },
                    scaleX: {
                        value: [0.4,1]
                    },
                    scaleY: {
                        value: [0.6,1],
                        duration: 1000
                    }

                });
            })
        }
    } catch (e) {
        console.error(e)
    }
}

