gsap.registerPlugin(TextPlugin, EasePack);

var container = $("#demo"),
    _sentenceEndExp = /(\.|\?|!)$/g; //regular expression to sense punctuation that indicates the end of a sentence so that we can adjust timing accordingly

function machineGun(text) {
    var words = text.split(" "),
        tl = gsap.timeline({ delay: 0.3, repeat: Infinity, repeatDelay: 4 }),
        wordCount = words.length,
        time = 0,
        word, element, duration, isSentenceEnd, i;

    for (i = 0; i < wordCount; i++) {
        word = words[i];
        isSentenceEnd = _sentenceEndExp.test(word);
        element = $("<h3>" + word + "</h3>").appendTo(container);
        duration = Math.max(0.8, word.length * 0.08); 
        if (isSentenceEnd) {
            duration += 0.6; 
        }
       
        gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });
        
        tl.to(element, duration, { scale: 1.5, ease: "slow(0.25, 0.9)" }, time)
            
            .to(element, duration, { autoAlpha: 1, ease: "slow(0.25, 0.9, true)" }, time);
        time += duration - 0.05;
        if (isSentenceEnd) {
            time += 0.6; //at the end of a sentence, add a pause for dramatic effect.
        }
    }

}

machineGun("Istanbul's lost souls, freaky-witches, missing-zombies, mighty-wizards and hopeless-heroes are gathering again for Halloween on the night of October 30th on Sunday at KLEIN-Phönix.");


document.getElementById("myMusic").volume = .05;
document.getElementById("myMusic").playbackRate = 1.25;



gsap.from(".horizontal-1",{
    x:"1000",
    duration:.8,
    delay:0.2
})
gsap.from(".horizontal-2",{
    x:"-3000",
    duration:.4,
    delay:.7
})

gsap.from(".horizontal-3",{
    x:"3000",
    duration:.7,
    delay:1.2
})
gsap.from(".horizontal-4",{
    x:"-2000",
    duration:1.2,
    delay:.8
})
gsap.from(".vertical-1",{
    y:"700",
    duration:1.,
    delay:.5
})
gsap.from(".vertical-2",{
    y:"700",
    duration:1.,
    delay:1
})
gsap.from(".vertical-3",{
    y:"-700",
    duration:1,
    delay:1.4
})

gsap.from(".details",{
    x:"-700",
    duration:1,
    delay:1.4
})

gsap.from(".contact",{
    x:"-700",
    duration:1,
    delay:1.8
})

gsap.from(".puchase",{
    x:"-700",
    duration:1,
    delay:2
})


var mp = document.getElementById('typeThing').style;
mp.opacity=0;


setTimeout(() => {
    setInterval(() => {
    
        if(mp.opacity == 0 ){
            mp.opacity = 1;
        }
        else{
            mp.opacity = 0
        }
    }, 500);
}, 2400);

