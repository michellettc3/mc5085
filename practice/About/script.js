

const cursor = document.getElementById("cursor");
const amount = 20;
const sineDots = Math.floor(amount * 0.3);
const width = 26;
const idleTimeout = 150;

const wraps = [...document.querySelectorAll('.wrap')];
console.log(wraps)
const menuTog = document.querySelector('.menu-tog');
const menu = document.querySelector('.menu');
const menuWraps = [...document.querySelectorAll('.menu-wrap')];

const pageContainer = document.querySelector(".container");


let lastFrame = 0;
let mousePosition = {x: 0, y: 0};
let dots = [];
let timeoutID;
let idle = false;
let hoverButton;
let hoverTL;


window.addEventListener('resize', init);
menuTog.addEventListener('click', toggleMenu)

function displayWraps(){
    wraps.forEach((wrap, idx) => {
        setTimeout(() => {
            wrap.classList.add('active');
        }, (idx + 1) * 50)
    })
}

function toggleMenu(){
    if(menu.classList.contains('active')){
        menuTog.classList.remove('active');
        toggleMenuWraps(false);
        setTimeout(() => {
            menu.classList.remove('active')
        }, 300)
        setTimeout(() => {
            toggleWraps(true);
        }, 300)
    }else{
        menuTog.classList.add('active');
        toggleWraps(false);
        setTimeout(() => {
            menu.classList.add('active')
        }, 300)
        setTimeout(() => {
            toggleMenuWraps(true);
        }, 300)
    }
}

function toggleWraps(active){
    wraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleMenuWraps(active){
    menuWraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleWrap(wrap, active){
    setTimeout(() => {
        if(active){
            wrap.classList.add('active');
        }else{
            wrap.classList.remove('active');
        }
    })
}

let target = 1;
let reverse = false;

document.addEventListener('click', () => reverse = !reverse)

class HoverButton {
    constructor(id) {
        this.hovered = false;
        this.animatingHover = false;
        this.forceOut = false;
        this.timing = 0.65;
        this.el = document.getElementById(id);
        this.bg = this.el.getElementsByClassName("bg")[0];
        this.el.addEventListener("mouseenter", this.onMouseEnter);
        this.el.addEventListener("mouseleave", this.onMouseLeave);
    }

    onMouseEnter = () => {
        this.hoverInAnim();
    };

    hoverInAnim = () => {
        if (!this.hovered) {
            this.hovered = true;
            this.animatingHover = true;
            this.forceOut = false;
            TweenMax.fromTo(
                this.bg,
                this.timing,
                {x: "-112%"},
                {
                    x: "-12%",
                    ease: Power3.easeOut,
                    onComplete: () => {
                        this.animatingHover = false;
                        if (this.forceOut) {
                            this.foceOut = false;
                            this.hoverOutAnim();
                        }
                    }
                }
            );
        }
    };

    onMouseLeave = () => {
        if (!this.animatingHover) {
            this.hoverOutAnim();
        } else {
            this.forceOut = true;
        }
    };

    hoverOutAnim = () => {
        this.hovered = false;
        TweenMax.to(this.bg, this.timing, {
            x: "100%",
            ease: Power3.easeOut,
            onComplete: () => {
            }
        });
    };
}

class Dot {
    constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - width / 2 * this.scale + 2;
        this.limit = width * 0.75 * this.scale;
        this.element = document.createElement("span");
        TweenMax.set(this.element, {scale: this.scale});
        cursor.appendChild(this.element);
    }

    lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
    }

    draw(delta) {
        if (!idle || this.index <= sineDots) {
            TweenMax.set(this.element, {x: this.x, y: this.y});
        } else {
            this.angleX += this.anglespeed;
            this.angleY += this.anglespeed;
            this.y = this.lockY + Math.sin(this.angleY) * this.range;
            this.x = this.lockX + Math.sin(this.angleX) * this.range;
            TweenMax.set(this.element, {x: this.x, y: this.y});
        }
    }
}

class Circle {
    constructor(id) {
        const el = document.getElementById(id);
        const parent = el.parentElement;
        parent.removeChild(el);
        const chars = el.innerText.split("");
        chars.push(" ");
        for (let i = 0; i < chars.length; i++) {
            const span = document.createElement("span");
            span.innerText = chars[i];
            span.className = `char${i + 1}`;
            parent.appendChild(span);
        }
    }
}

function init() {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    hoverButton = new HoverButton("button");
    // eslint-disable-next-line no-new
    new Circle("circle-content");
    lastFrame += new Date();
    buildDots();
    render();
}

/*function limit(value, min, max) {
    return Math.min(Math.max(min, value), max);
}*/

function startIdleTimer() {
    timeoutID = setTimeout(goInactive, idleTimeout);
    idle = false;
}

function resetIdleTimer() {
    clearTimeout(timeoutID);
    startIdleTimer();
}

function goInactive() {
    idle = true;
    for (let dot of dots) {
        dot.lock();
    }
}

function buildDots() {
    for (let i = 0; i < amount; i++) {
        let dot = new Dot(i);
        dots.push(dot);
    }
}

const onMouseMove = event => {
    mousePosition.x = event.clientX - width / 2;
    mousePosition.y = event.clientY - width / 2;
    resetIdleTimer();
};

const onTouchMove = () => {
    mousePosition.x = event.touches[0].clientX - width / 2;
    mousePosition.y = event.touches[0].clientY - width / 2;
    resetIdleTimer();
};

const render = timestamp => {
    const delta = timestamp - lastFrame;
    positionCursor(delta);
    lastFrame = timestamp;
    requestAnimationFrame(render);
};

const positionCursor = delta => {
    let x = mousePosition.x;
    let y = mousePosition.y;
    dots.forEach((dot, index, dots) => {
        let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
            const dx = (nextDot.x - dot.x) * 0.35;
            const dy = (nextDot.y - dot.y) * 0.35;
            x += dx;
            y += dy;
        }
    });
};

gsap.set('.stage',  {perspective:800})
gsap.set('.txt',    {left:'50%', top:'50%', xPercent:-50, yPercent:-50, whiteSpace:'nowrap'})

let chars = new SplitText('.txt', {type:'chars', position:'absolute'}).chars;

// 3d rotation
gsap.timeline() 
    .set(chars,     {x:0, left:'50%', transformPerspective:800, transformOrigin:'0 0 -500'})
    .fromTo(chars,  {rotationY:(i)=>i/chars.length*360}, {rotationY:'-=360', duration:12, ease:'none', repeat:-1}, 0)
    .fromTo(chars,  {rotationX:-9}, {rotationX:12, duration:6, ease:'power3.inOut', yoyo:true, repeat:-1}, 0)
    .fromTo('.txt', {rotation:20}, {rotation:-10, duration:10, ease:'power2.inOut', yoyo:true, repeat:-1}, 0)

// lighting
for (let i=0; i<chars.length; i++){ 
  gsap.timeline({repeat:-1})
      // .fromTo(chars[i], {zIndex:1000, color:'#fff'}, {zIndex:1, color:'#000', duration:8, repeat:1, yoyo:true, ease:'power1'}, 0) //simple grayscale (alternative to lines 17-21)
      .fromTo(chars[i], {zIndex:1000, color:'#fff'}, {zIndex:1, color:'#244353', duration:3, ease:'power1'}, 0)
      .to(chars[i],     {color:'#000', duration:4, ease:'expo'})
      .to(chars[i],     {color:'#244353', duration:4, ease:'power3.in'})  
      .to(chars[i],     {color:'#a48d7d', duration:2, ease:'none'})
      .to(chars[i],     {zIndex:1000, color:'#fff', duration:3, ease:'power3.inOut'})
      .progress(1-i/chars.length)
}

// film grain + dust
gsap.set('.grain', {width:'100%', height:'100%', backgroundImage:'url(https://assets.codepen.io/721952/grain.png)', mixBlendMode:'overlay'})

for (let i=0; i<8; i++){
  let d = document.createElement('div');
  document.getElementsByClassName('stage')[0].appendChild(d);
  gsap.set(d, {attr:{class:'d'}, width:30, height:30, backgroundImage:'url(https://assets.codepen.io/721952/filmDust.png)', backgroundPosition:'0 -'+gsap.utils.wrap(0,8,i)*30+'px'});
}

function dustLoop(){
  gsap.timeline({onComplete:dustLoop})
      .set('.d', {x:()=>window.innerWidth*1.5*Math.random(), // overshoot width+height of stage to reduce number visible at once
                  y:()=>window.innerHeight*2*Math.random(),  //
                  rotation:()=>360*Math.random(),
                  scale:()=>Math.random(),
                  opacity:()=>Math.random()
                 }, 0.07)
}
dustLoop()

init();
