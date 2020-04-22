document.addEventListener('DOMContentLoaded',()=>{
    let tl=anime.timeline({
        targets:'.row1',
        translateX: 50,
        delay:anime.stagger(300,{easing:'easeInSine'})
    });
    tl.add({
        opacity:1
    })
    anime({
        targets:'.twotwo',
        translateX:80,
        translateY:-70,
        duration:1500,
        delay:700,
        easing:'easeInSine',
        scale:'.9'
    })
})

window.addEventListener('scroll',()=>{
    const scrollable= document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(scrolled)
    if (Math.ceil(scrolled)===scrollable) {
            console.log('u re in end')
            let tl=anime.timeline({
                targets:'.row3',
                translateX: 80,
                duration: 2000,
                delay:anime.stagger(300,{easing:'easeInSine'})
            })
            tl.add({
                opacity:1
            })
            anime({
                targets:'.row2',
                translateX: -80,
                duration: 1000,
                easing:'easeInSine',
                opacity:0
            }) 
            let tl2=anime.timeline({
                targets:'.row1',
                translateX: -50,
                delay:anime.stagger(300,{easing:'easeInSine'})
            });
            tl2.add({
                opacity:0
            })
            anime({
                targets:'.twotwo',
                translateX:-80,
                translateY:70,
                duration:2000,
                delay:2000,
                easing:'easeInSine',
                scale:1.1
            })
    }
    if (Math.ceil(scrolled)>scrollable/2) {
        console.log('u re in middle')
        anime({
            targets:'.row2',
            translateX: 80,
            duration: 800,
            easing:'easeInSine',
            opacity:'1'
        })
    }
    if (Math.ceil(scrolled)===0) {
        console.log('u re in start')
        let tl=anime.timeline({
            targets:'.row1',
            translateX: 50,
            delay:anime.stagger(300,{easing:'easeInSine'})
        });
        tl.add({
            opacity:1
        })
        anime({
            targets:'.twotwo',
            translateX:80,
            translateY:-70,
            duration:2000,
            delay:2000,
            easing:'easeInSine',
            scale:'.9'
        })
        let tl2=anime.timeline({
            targets:'.row3',
            translateX: -80,
            duration: 1000,
            delay:anime.stagger(300,{easing:'easeInSine'})
        })
        tl2.add({
            opacity:0
        })
        anime({
            targets:'.row2',
            translateX: -80,
            duration: 1000,
            easing:'easeInSine',
            opacity:0
        })
    }
});